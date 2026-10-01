// Theme switcher for ACM PESU ECC (Dark / Light mode)
(function () {
    const THEME_STORAGE_KEY = 'acm_theme_preference';

    function getPreferredTheme() {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme) {
            return savedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    }

    // Apply theme immediately on script load
    const currentTheme = getPreferredTheme();
    applyTheme(currentTheme);

    document.addEventListener('DOMContentLoaded', () => {
        const themeToggleBtn = document.getElementById('theme-toggle-btn');
        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
                const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
                applyTheme(newTheme);
            });
        }
    });
})();
