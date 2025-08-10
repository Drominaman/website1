

// ==============================
// Cybersecurity Writer Site JS
// ==============================

// 1) Make comparison table rows clickable via data-href
(function () {
  var rows = document.querySelectorAll('table.compare-table tr[data-href]');
  rows.forEach(function (row) {
    // Accessibility roles
    row.setAttribute('role', 'link');
    row.setAttribute('tabindex', '0');

    function open() {
      var url = row.getAttribute('data-href');
      if (url) window.open(url, '_blank', 'noopener');
    }

    row.addEventListener('click', open);
    row.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open();
      }
    });
  });
})();

// 2) Smooth-scroll for on-page anchors
(function () {
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      var el = document.querySelector(targetId);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Optionally update URL hash without jumping
      history.pushState(null, '', targetId);
    });
  });
})();

// 3) External links: add rel attributes for safety (in case any were missed in HTML)
(function () {
  var links = document.querySelectorAll('a[target="_blank"]');
  links.forEach(function (a) {
    var rel = (a.getAttribute('rel') || '').split(/[\s,]+/);
    if (rel.indexOf('noopener') === -1) rel.push('noopener');
    if (rel.indexOf('noreferrer') === -1) rel.push('noreferrer');
    a.setAttribute('rel', rel.join(' ').trim());
  });
})();

// 4) Back-to-top convenience if a link with href="#top" exists
(function () {
  var topLink = document.querySelector('a[href="#top"]');
  if (!topLink) return;
  topLink.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.pushState(null, '', '#top');
  });
})();