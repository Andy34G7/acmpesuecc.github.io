// System theme detection & switcher for ACM PESU ECC (Dark / Light mode)
(function () {
    const THEME_STORAGE_KEY = 'acm_theme_preference';

    function getSystemTheme() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }

    function getActiveTheme() {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme) {
            return savedTheme;
        }
        return getSystemTheme();
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }

    // Apply active theme immediately
    applyTheme(getActiveTheme());

    // Listen for system theme changes if user hasn't explicitly set a preference
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
            const hasUserPreference = localStorage.getItem(THEME_STORAGE_KEY);
            if (!hasUserPreference) {
                applyTheme(e.matches ? 'light' : 'dark');
            }
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        const themeToggleBtn = document.getElementById('theme-toggle-btn');
        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme') || getSystemTheme();
                const nextTheme = current === 'dark' ? 'light' : 'dark';
                applyTheme(nextTheme);
                localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
            });
        }
    });
})();
