'use strict';

/** Render one activity detail page from info/data/activities.js. */
(function renderTalkPage() {
  const root = document.body;
  const parameters = new URLSearchParams(window.location.search);
  const activityId = root.dataset.activityId || parameters.get('id');
  const language = root.dataset.activityLang || parameters.get('lang') || 'en';
  const site = window.SITE_DATA;
  const activity = (window.ACTIVITIES || []).find((item) => item.id === activityId);
  const detail = activity?.detail?.[language];

  if (!site || !activity || !detail) {
    console.error(`Activity detail not found: ${activityId || '(missing id)'} / ${language}`);
    return;
  }

  const escapeHtml = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const localPath = (url) => url.startsWith('info/') ? `../${url.slice(5)}` : url;
  const externalLink = (url) => `href="${escapeHtml(localPath(url))}" target="_blank" rel="noopener noreferrer"`;

  document.title = detail.pageTitle;
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';

  const profile = site.profile;
  const avatar = document.querySelector('[data-profile-avatar]');
  if (avatar) {
    avatar.src = localPath(profile.avatar);
    avatar.alt = profile.name;
  }
  document.querySelector('[data-profile-name]').textContent = profile.name;
  document.querySelector('[data-profile-affiliation]').textContent = profile.affiliation;
  document.querySelector('[data-profile-email]').textContent = profile.email;
  document.querySelector('[data-profile-location]').textContent = profile.location;
  document.querySelector('[data-profile-scholar]').href = profile.scholarUrl;

  const content = document.getElementById('talkContent');
  content.innerHTML = `
    <header><h2 class="h2 article-title">${escapeHtml(detail.heading)}</h2></header>
    <section class="about-text">
      <p class="talk-body-text">${escapeHtml(detail.intro)}</p>
      <figure class="blog-banner-box talk-hero talk-hero-${escapeHtml(detail.imageLayout)}">
        <img src="${escapeHtml(localPath(detail.heroImage))}" alt="${escapeHtml(detail.heroAlt)}" loading="lazy">
      </figure>
    </section>
    <section class="timeline">
      <ol class="timeline-list talk-meta-list">
        <li class="timeline-item"><p class="talk-meta"><strong>${escapeHtml(detail.labels.date)}:</strong> ${escapeHtml(detail.dateRange)}</p></li>
        <li class="timeline-item"><p class="talk-meta"><strong>${escapeHtml(detail.labels.event)}:</strong> <a class="underlinena" ${externalLink(detail.event.url)}>${escapeHtml(detail.event.text)}</a></p></li>
        <li class="timeline-item"><p class="talk-meta"><strong>${escapeHtml(detail.labels.location)}:</strong> ${escapeHtml(detail.venueAddress)}</p></li>
      </ol>
    </section>
    <div class="separator"></div>
    <header><h2 class="h2 article-title">${escapeHtml(detail.labels.abstract)}</h2></header>
    <section class="about-text talk-abstract">
      ${detail.abstract.map((paragraph) => `<p class="talk-body-text">${escapeHtml(paragraph)}</p>`).join('')}
    </section>
    <ul class="talk-resources">
      ${detail.resources.map((resource) => `<li><a class="niceButton3" ${externalLink(resource.url)}>${escapeHtml(resource.label)}</a></li>`).join('')}
    </ul>
  `;
})();
