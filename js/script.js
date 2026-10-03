document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const actions = document.querySelector('.nav-actions');

  if (toggle && nav && actions) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));

      nav.style.display = expanded ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '78px';
      nav.style.left = '16px';
      nav.style.right = '16px';
      nav.style.padding = '18px';
      nav.style.background = 'rgba(17, 17, 17, 0.98)';
      nav.style.border = '1px solid rgba(255,255,255,0.12)';

      actions.style.display = expanded ? 'none' : 'flex';
      actions.style.flexDirection = 'column';
      actions.style.position = 'absolute';
      actions.style.top = '230px';
      actions.style.left = '16px';
      actions.style.right = '16px';
      actions.style.padding = '0 18px 18px';
      actions.style.background = 'rgba(17, 17, 17, 0.98)';
      actions.style.border = '1px solid rgba(255,255,255,0.12)';
      actions.style.borderTop = 'none';
    });
  }
});
