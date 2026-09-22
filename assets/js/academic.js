// Respect the new section spacing instead of the legacy theme's fixed offset.
document.addEventListener('click', event => {
  const link = event.target.closest('a[href]');
  if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const url = new URL(link.href, location.href);
  if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search || !url.hash) return;
  const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
  if (!target) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  document.querySelectorAll('.nav-group[open]').forEach(group => { group.open = false; });
  const addedTabIndex = !target.hasAttribute('tabindex');
  if (addedTabIndex) target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
  if (addedTabIndex) target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
  history.pushState(null, '', url.hash);
  target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
}, true);
