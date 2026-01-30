document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('theme-switcher');
    const html = document.documentElement;

    themeSwitcher.addEventListener('click', () => {
        if (html.getAttribute('data-theme') === 'dark') {
            html.setAttribute('data-theme', 'light');
            themeSwitcher.textContent = 'Switch to Dark Mode';
        } else {
            html.setAttribute('data-theme', 'dark');
            themeSwitcher.textContent = 'Switch to Light Mode';
        }
    });
});