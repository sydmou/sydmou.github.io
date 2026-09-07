// Native disclosures work without JavaScript; enhance dismissal and grouping.
(() => {
  const nav = document.getElementById('primary-navigation');
  if (!nav) return;
  const groups = [...nav.querySelectorAll('details')];
  const close = (except) => {
    groups.forEach(group => {
      if (group !== except) group.open = false;
    });
  };
  groups.forEach(group => {
    group.addEventListener('toggle', () => {
      if (group.open) close(group);
    });
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) close();
  });
  nav.addEventListener('focusout', (event) => {
    if (!nav.contains(event.relatedTarget)) close();
  });
  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) close();
  });
  document.addEventListener('keydown', (event) => {
    const openGroup = groups.find(group => group.open);
    if (event.key === 'Escape' && openGroup) {
      close();
      openGroup.querySelector('summary').focus();
    }
  });
})();
