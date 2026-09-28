'use strict';

/**
 * Turns the editable objects in info/data/*.js into the home-page markup.
 * Content changes belong in the data files; this file should only change
 * when the visual structure of a component changes.
 */
(function renderHomePage() {
  const site = window.SITE_DATA;
  const publications = window.PUBLICATIONS || [];
  const activities = window.ACTIVITIES || [];

  if (!site) {
    console.error('SITE_DATA is missing. Load info/data/site-data.js before render-home.js.');
    return;
  }

  const escapeHtml = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const linkAttributes = (url) => {
    const safeUrl = escapeHtml(url);
    return `href="${safeUrl}" target="_blank" rel="noopener noreferrer"`;
  };

  const renderRichText = (parts) => (parts || []).map((part) => {
    if (typeof part === 'string') return escapeHtml(part);
    return `<a class="underlinea" ${linkAttributes(part.url)}>${escapeHtml(part.text)}</a>`;
  }).join('');

  const setHtml = (id, html) => {
    const element = document.getElementById(id);
    if (element) element.innerHTML = html;
  };

  function renderProfile() {
    const profile = site.profile;
    const avatar = document.querySelector('[data-profile-avatar]');
    const name = document.querySelector('[data-profile-name]');
    const affiliation = document.querySelector('[data-profile-affiliation]');
    const email = document.querySelector('[data-profile-email]');
    const location = document.querySelector('[data-profile-location]');
    const scholar = document.querySelector('[data-profile-scholar]');

    if (avatar) {
      avatar.src = profile.avatar;
      avatar.alt = profile.name;
    }
    if (name) name.textContent = profile.name;
    if (affiliation) affiliation.textContent = profile.affiliation;
    if (email) email.textContent = profile.email;
    if (location) location.textContent = profile.location;
    if (scholar) scholar.href = profile.scholarUrl;

    setHtml('aboutText', profile.about.map((paragraph, index) => (
      `<p class="content-text${index === 0 ? ' content-text-justify' : ''}">${renderRichText(paragraph)}</p>`
    )).join(''));
  }

  function renderNews() {
    setHtml('newsScrollList', site.news.map((item) => (
      `<li class="timeline-item"><p class="content-text">[${escapeHtml(item.date)}] ${renderRichText(item.content)}</p></li>`
    )).join(''));
  }

  function renderSelectedPublications() {
    const selected = publications
      .filter((publication) => publication.selected)
      .sort((a, b) => a.selected.order - b.selected.order);
    setHtml('selectedPublicationsList', selected.map((publication) => (
      `<li class="timeline-item">` +
        `<a class="underlinea" ${linkAttributes(publication.selected.url)}>[${escapeHtml(publication.selected.venue)}]</a> ` +
        `<span class="selected-publication-title">${escapeHtml(publication.title)}</span>` +
      `</li>`
    )).join(''));
  }

  function renderReviewers() {
    setHtml('reviewersList', site.reviewers.map((reviewer) => (
      `<li class="timeline-item"><a class="underlinea" ${linkAttributes(reviewer.url)}>${escapeHtml(reviewer.label)}</a></li>`
    )).join(''));
  }

  function renderAuthors(authors) {
    return authors.map((author) => {
      const safeAuthor = escapeHtml(author);
      return author.replace(/^\*/, '') === site.profile.name
        ? `<strong class="publication-self">${safeAuthor}</strong>`
        : safeAuthor;
    }).join(', ');
  }

  function renderPublicationLinks(links) {
    if (!links || links.length === 0) return '';
    return `<ul class="publication-links">${links.map((link) => (
      `<li><a class="niceButton3" ${linkAttributes(link.url)}>${escapeHtml(link.label)}</a></li>`
    )).join('')}</ul>`;
  }

  function renderPublications() {
    const years = [...new Set(publications.map((publication) => publication.year))]
      .sort((a, b) => b - a);

    setHtml('yearIndexList', years.map((year) => (
      `<li><a href="#year-${year}" data-year="${year}">${year}</a></li>`
    )).join(''));

    setHtml('publicationsList', years.map((year) => {
      const entries = publications.filter((publication) => publication.year === year);
      return (
        `<section class="timeline publication-year" id="year-${year}" data-publication-year="${year}">` +
          `<div class="title-wrapper">` +
            `<div class="icon-box"><ion-icon name="book-outline"></ion-icon></div>` +
            `<h3 class="h3">${year}</h3>` +
          `</div>` +
          `<ol class="timeline-list">${entries.map((publication) => (
            `<li class="timeline-item">` +
              `<p class="publication-title">${escapeHtml(publication.title)}</p>` +
              `<p class="publication-venue">${escapeHtml(publication.venue)}</p>` +
              `<p class="timeline-text publication-authors">${renderAuthors(publication.authors)}</p>` +
              renderPublicationLinks(publication.links) +
            `</li>`
          )).join('')}</ol>` +
        `</section>`
      );
    }).join('') + '<div class="separator"></div>');
  }

  function renderActivities() {
    setHtml('activitiesList', activities.map((activity) => (
      `<li class="blog-post-item"><a ${linkAttributes(activity.url)}>` +
        `<figure class="blog-banner-box"><img src="${escapeHtml(activity.image)}" alt="${escapeHtml(activity.imageAlt)}" loading="lazy"></figure>` +
        `<div class="blog-content">` +
          `<div class="blog-meta"><p class="blog-category">${escapeHtml(activity.location)}</p><span class="dot"></span><time datetime="${escapeHtml(activity.datetime)}">${escapeHtml(activity.date)}</time></div>` +
          `<h3 class="h4 blog-item-title">${escapeHtml(activity.title)}</h3>` +
          `<p class="blog-text">${escapeHtml(activity.description)}</p>` +
        `</div>` +
      `</a></li>`
    )).join(''));
  }

  function renderProjects() {
    setHtml('projectsList', site.projects.map((project) => (
      `<li class="blog-post-item"><a ${linkAttributes(project.url)}>` +
        `<figure class="blog-banner-box"><img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}" loading="lazy"></figure>` +
        `<div class="blog-content">` +
          `<time datetime="${escapeHtml(project.datetime)}">${escapeHtml(project.date)}</time>` +
          `<h3 class="h3 blog-item-title">${escapeHtml(project.title)}</h3>` +
          `<p class="blog-text">${escapeHtml(project.description)}</p>` +
        `</div>` +
      `</a></li>`
    )).join(''));
  }

  renderProfile();
  renderNews();
  renderSelectedPublications();
  renderReviewers();
  renderPublications();
  renderActivities();
  renderProjects();

  const lastModified = document.querySelector('[data-last-modified]');
  if (lastModified) lastModified.textContent = `Last modified: ${site.lastModified}`;

  document.dispatchEvent(new CustomEvent('site:content-rendered'));
})();
