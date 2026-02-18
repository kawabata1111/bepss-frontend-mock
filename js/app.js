// BePSS Frontend Mock - App JS
// Toggle account dropdown menu
function toggleMenu() {
  const menu = document.getElementById('accountMenu');
  menu.classList.toggle('show');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
  const menu = document.getElementById('accountMenu');
  const trigger = document.querySelector('.p-header--account--name');
  if (menu && trigger && !trigger.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove('show');
  }
});

// Tab switching
function switchTab(tabId) {
  document.querySelectorAll('.c-tab-content').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.c-tab a, .c-tab button').forEach(el => el.classList.remove('active'));
  const target = document.getElementById(tabId);
  if (target) target.style.display = 'block';
  event.target.classList.add('active');
}

// Active nav highlighting
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#app-globalNav a').forEach(a => {
    a.classList.remove('active');
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
  // Local nav active state
  document.querySelectorAll('#app-localNav a').forEach(a => {
    a.classList.remove('active');
    const href = a.getAttribute('href');
    if (href === currentPage) {
      a.classList.add('active');
    }
  });
});
