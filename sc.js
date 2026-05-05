// 1. Scroll Control
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            nav.classList.toggle('scrolled', window.scrollY > 50);
        });

        // 2. Enhanced Mobile Menu
        const hamMenu = document.getElementById('hamMenu');
        const navWrapper = document.getElementById('navWrapper');

        hamMenu.addEventListener('click', () => {
            hamMenu.classList.toggle('active');
            navWrapper.classList.toggle('active');
            
            // قفل السكرول عند فتح المنيو لشعور احترافي
            if (navWrapper.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Close on link click
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamMenu.classList.remove('active');
                navWrapper.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });