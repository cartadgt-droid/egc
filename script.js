document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for fade-in animations
    // Это позволяет элементам плавно появляться при скролле
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Mobile Menu Toggle
    // Управление мобильным меню (гамбургер)
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Закрытие меню при клике на ссылку
        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Add shadow to header on scroll
    // Добавляет тень шапке при прокрутке страницы
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('shadow-lg');
            header.style.backgroundColor = 'rgba(253, 251, 247, 0.95)';
        } else {
            header.classList.remove('shadow-lg');
            header.style.backgroundColor = 'rgba(253, 251, 247, 0.8)';
        }
    });

    // Smooth scroll for anchors
    // Плавная прокрутка ко всем якорям
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
