
    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('.navbar').classList.add('scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('scrolled');
        }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

        // Tambahkan ke main.js
    // Intersection Observer untuk animasi scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    // Select semua section
    document.querySelectorAll('section').forEach((section) => {
        section.classList.add('section-transition');
        observer.observe(section);
    });

    // Smooth scroll dengan animasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            
            section.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Add show class after scrolling
            setTimeout(() => {
                section.classList.add('show');
            }, 300);
        });
    });
