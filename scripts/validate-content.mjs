import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sandbox = { window: {} };
vm.createContext(sandbox);

for (const relativePath of [
  'info/data/site-data.js',
  'info/data/publications.js',
  'info/data/activities.js'
]) {
  const source = fs.readFileSync(path.join(projectRoot, relativePath), 'utf8');
  vm.runInContext(source, sandbox, { filename: relativePath });
}

const { SITE_DATA: site, PUBLICATIONS: publications, ACTIVITIES: activities } = sandbox.window;
const errors = [];

function requireFields(item, fields, label) {
  for (const field of fields) {
    if (item[field] === undefined || item[field] === null || item[field] === '') {
      errors.push(`${label}: missing "${field}"`);
    }
  }
}

function checkLocalUrl(url, label) {
  if (!url || /^(https?:|mailto:|#)/.test(url)) return;
  const cleanPath = url.split(/[?#]/)[0];
  if (!fs.existsSync(path.join(projectRoot, cleanPath))) {
    errors.push(`${label}: local file does not exist: ${cleanPath}`);
  }
}

requireFields(site.profile, ['name', 'affiliation', 'avatar', 'email', 'location'], 'profile');
checkLocalUrl(site.profile.avatar, 'profile.avatar');

const publicationKeys = new Set();
const selectedOrders = new Set();
for (const publication of publications) {
  const label = `publication "${publication.title || 'untitled'}"`;
  requireFields(publication, ['year', 'title', 'venue', 'authors', 'links'], label);
  const key = `${publication.year}:${publication.title}`;
  if (publicationKeys.has(key)) errors.push(`${label}: duplicate publication`);
  publicationKeys.add(key);
  for (const link of publication.links || []) checkLocalUrl(link.url, `${label} / ${link.label}`);
  if (publication.selected) {
    requireFields(publication.selected, ['order', 'venue', 'url'], `${label}.selected`);
    if (selectedOrders.has(publication.selected.order)) {
      errors.push(`${label}: duplicate selected order ${publication.selected.order}`);
    }
    selectedOrders.add(publication.selected.order);
  }
}

const activityIds = new Set();
for (const activity of activities) {
  const label = `activity "${activity.title || 'untitled'}"`;
  requireFields(activity, ['id', 'title', 'description', 'location', 'date', 'image', 'url'], label);
  if (activityIds.has(activity.id)) errors.push(`${label}: duplicate id "${activity.id}"`);
  activityIds.add(activity.id);
  checkLocalUrl(activity.image, `${label}.image`);
  checkLocalUrl(activity.url, `${label}.url`);
  for (const [language, detail] of Object.entries(activity.detail || {})) {
    const detailLabel = `${label}.detail.${language}`;
    requireFields(detail, ['pageTitle', 'heading', 'intro', 'heroImage', 'labels', 'dateRange', 'event', 'venueAddress', 'abstract', 'resources'], detailLabel);
    checkLocalUrl(detail.heroImage, `${detailLabel}.heroImage`);
    for (const resource of detail.resources || []) checkLocalUrl(resource.url, `${detailLabel} / ${resource.label}`);
  }
}

for (const project of site.projects || []) {
  const label = `project "${project.title || 'untitled'}"`;
  requireFields(project, ['title', 'url', 'image', 'date', 'description'], label);
  checkLocalUrl(project.image, `${label}.image`);
}

if (errors.length > 0) {
  console.error(`Content validation failed (${errors.length} problem${errors.length === 1 ? '' : 's'}):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log(`Content is valid: ${publications.length} publications, ${activities.length} activities, ${(site.projects || []).length} projects.`);
}
