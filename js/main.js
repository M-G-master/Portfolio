const btnDarkMode = document.querySelector('.dark-mode-btn');

// 1.Test Dark-mode from system settings
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  btnDarkMode.classList.add('dark-mode-btn--active');
  document.body.classList.add('dark');
}

// 2. Test Dark-mode

if (localStorage.getItem('darkMode') === 'dark') {
  btnDarkMode.classList.add('dark-mode-btn--active');
  document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'light') {
  btnDarkMode.classList.remove('dark-mode-btn--active');
  document.body.classList.remove('dark');
}

// If changing system settings, changing theme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  const newColorScheme = event.matches ? 'dark' : 'light';

  if (newColorScheme === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
    localStorage.setItem('darkMode', 'dark');
  } else {
    btnDarkMode.classList.remove('dark-mode-btn--active');
    document.body.classList.remove('dark');
    localStorage.setItem('darkMode', 'dark');
  }
});
// Play Dark-mode from button
btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle('dark-mode-btn--active');
  const isDark = document.body.classList.toggle('dark');

  if (isDark) {
    localStorage.setItem('darkMode', 'dark');
  } else {
    localStorage.setItem('darkMode', 'light');
  }
};
