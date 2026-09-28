'use strict';

/** Shared, defensive interactions for the home page and activity pages. */
(function initializeSiteInteractions() {
  const sidebar = document.querySelector('[data-sidebar]');
  const sidebarButton = document.querySelector('[data-sidebar-btn]');

  if (sidebar && sidebarButton) {
    sidebarButton.addEventListener('click', () => sidebar.classList.toggle('active'));
  }

  const navigationLinks = [...document.querySelectorAll('[data-nav-link]')];
  const pages = [...document.querySelectorAll('[data-page]')];

  function activatePage(pageName) {
    if (!pages.some((page) => page.dataset.page === pageName)) return;

    pages.forEach((page) => page.classList.toggle('active', page.dataset.page === pageName));
    navigationLinks.forEach((link) => {
      link.classList.toggle('active', link.textContent.trim().toLowerCase() === pageName);
    });
    window.scrollTo({ top: 0, behavior: 'auto' });

    if (pageName === 'publications') {
      window.setTimeout(updateActiveYear, 50);
    }
  }

  navigationLinks.forEach((link) => {
    link.addEventListener('click', () => activatePage(link.textContent.trim().toLowerCase()));
  });

  const select = document.querySelector('[data-select]');
  if (select) select.addEventListener('click', () => select.classList.toggle('active'));

  function publicationPageIsActive() {
    return document.querySelector('[data-page="publications"]')?.classList.contains('active') ?? false;
  }

  function updateActiveYear() {
    if (!publicationPageIsActive()) return;

    const sections = [...document.querySelectorAll('[data-publication-year]')];
    const yearLinks = [...document.querySelectorAll('[data-year]')];
    if (sections.length === 0) return;

    const current = sections.reduce((closest, section) => {
      const distance = Math.abs(section.getBoundingClientRect().top - 150);
      return distance < closest.distance ? { section, distance } : closest;
    }, { section: sections[0], distance: Infinity }).section.dataset.publicationYear;

    yearLinks.forEach((link) => link.classList.toggle('active', link.dataset.year === current));
  }

  document.querySelectorAll('[data-year]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  let yearUpdateQueued = false;
  function queueYearUpdate() {
    if (yearUpdateQueued) return;
    yearUpdateQueued = true;
    window.requestAnimationFrame(() => {
      updateActiveYear();
      yearUpdateQueued = false;
    });
  }

  window.addEventListener('scroll', queueYearUpdate, { passive: true });
  window.addEventListener('resize', queueYearUpdate);
})();
