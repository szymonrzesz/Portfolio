        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Scroll reveal animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-reveal').forEach(el => {
            observer.observe(el);
        });

        // Enhanced project card interactions
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) rotateX(5deg)';
                this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) rotateX(0deg)';
            });
        });

        // Enhanced skill category interactions
        document.querySelectorAll('.skill-category').forEach(category => {
            category.addEventListener('mouseenter', function() {
                const tags = this.querySelectorAll('.skill-tag');
                tags.forEach((tag, index) => {
                    setTimeout(() => {
                        tag.style.transform = 'scale(1.05) translateY(-2px)';
                    }, index * 50);
                });
            });
            
            category.addEventListener('mouseleave', function() {
                const tags = this.querySelectorAll('.skill-tag');
                tags.forEach(tag => {
                    tag.style.transform = 'scale(1) translateY(0)';
                });
            });
        });


        // Enhanced navigation scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            const scrolled = window.pageYOffset;
            
            if (scrolled > 100) {
                nav.style.background = 'rgba(0, 29, 61, 0.98)';
                nav.style.boxShadow = '0 8px 32px rgba(0, 29, 61, 0.4)';
            } else {
                nav.style.background = 'rgba(0, 29, 61, 0.95)';
                nav.style.boxShadow = '0 8px 32px rgba(0, 29, 61, 0.3)';
            }
        });