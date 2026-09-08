// ============================================
// script.js — Hamburger Toggle (minimal)
// ============================================

const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('navList');

if (hamburger && navList) {
    hamburger.addEventListener('click', function () {
        const isOpen = navList.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked (optional)
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
}
