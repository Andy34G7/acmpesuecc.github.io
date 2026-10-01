// Responsive Navigation & Rail Toggle for ACM PESU ECC
(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const sidebarNav = document.getElementById('sidebar-nav');
        const mobileToggle = document.getElementById('mobile-nav-toggle');
        const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
        const sidebarBackdrop = document.getElementById('sidebar-backdrop');
        const railToggle = document.getElementById('sidebar-rail-toggle');

        function openMobileMenu() {
            if (sidebarNav) {
                sidebarNav.classList.add('mobile-open');
            }
            if (sidebarBackdrop) {
                sidebarBackdrop.classList.add('active');
            }
            if (mobileToggle) {
                mobileToggle.setAttribute('aria-expanded', 'true');
            }
            document.body.style.overflow = 'hidden';
        }

        function closeMobileMenu() {
            if (sidebarNav) {
                sidebarNav.classList.remove('mobile-open');
                sidebarNav.classList.remove('rail-expanded');
            }
            if (sidebarBackdrop) {
                sidebarBackdrop.classList.remove('active');
            }
            if (mobileToggle) {
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
            document.body.style.overflow = '';
        }

        function toggleRailExpand() {
            if (sidebarNav) {
                const isExpanded = sidebarNav.classList.toggle('rail-expanded');
                if (sidebarBackdrop) {
                    if (isExpanded) {
                        sidebarBackdrop.classList.add('active');
                    } else {
                        sidebarBackdrop.classList.remove('active');
                    }
                }
            }
        }

        if (mobileToggle) {
            mobileToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                openMobileMenu();
            });
        }

        if (sidebarCloseBtn) {
            sidebarCloseBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeMobileMenu();
            });
        }

        if (sidebarBackdrop) {
            sidebarBackdrop.addEventListener('click', () => {
                closeMobileMenu();
            });
        }

        if (railToggle) {
            railToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleRailExpand();
            });
        }

        // Close when pressing Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });

        // Highlight active nav item
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (
                href === currentPath ||
                (currentPath === '/' && (href === '/index.html' || href === '/')) ||
                (currentPath !== '/' && href !== '/index.html' && href !== '/' && currentPath.includes(href.replace('.html', '')))
            ) {
                link.classList.add('active');
            }
        });
    });
})();
