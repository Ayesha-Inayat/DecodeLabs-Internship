document.addEventListener('DOMContentLoaded', () => {
    // UI Elements
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Toggle Mobile Menu
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileToggle.classList.toggle('is-active');
        
        const bars = mobileToggle.querySelectorAll('.bar');
        if (navLinks.classList.contains('active')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const bars = mobileToggle.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });

    // Change active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        const navHeight = 80;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - navHeight - 10) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // --- Water Ripple Effect ---
    const canvas = document.getElementById('water-canvas');
    const ctx = canvas.getContext('2d');

    let width, height, size, halfWidth, halfHeight;
    let buffer1 = [];
    let buffer2 = [];
    let rippleRadius = 3;
    let damping = 0.95;

    function initCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        // Low res buffer for performance
        const scale = 0.25;
        canvas.width = width * scale;
        canvas.height = height * scale;
        
        halfWidth = canvas.width >> 1;
        halfHeight = canvas.height >> 1;
        size = canvas.width * canvas.height;
        
        buffer1 = new Float32Array(size).fill(0);
        buffer2 = new Float32Array(size).fill(0);
    }

    initCanvas();
    window.addEventListener('resize', initCanvas);

    function ripple(x, y) {
        x = Math.floor(x * (canvas.width / width));
        y = Math.floor(y * (canvas.height / height));

        for (let j = y - rippleRadius; j < y + rippleRadius; j++) {
            for (let i = x - rippleRadius; i < x + rippleRadius; i++) {
                if (j >= 0 && j < canvas.height && i >= 0 && i < canvas.width) {
                    buffer1[j * canvas.width + i] = 255;
                }
            }
        }
    }

    window.addEventListener('mousemove', (e) => {
        ripple(e.clientX, e.clientY);
    });

    // Random ripples
    setInterval(() => {
        ripple(Math.random() * width, Math.random() * height);
    }, 2000);

    function update() {
        const imgData = ctx.createImageData(canvas.width, canvas.height);
        const data = imgData.data;

        for (let i = canvas.width; i < size - canvas.width; i++) {
            buffer2[i] = (
                (buffer1[i - 1] +
                 buffer1[i + 1] +
                 buffer1[i - canvas.width] +
                 buffer1[i + canvas.width]) >> 1
            ) - buffer2[i];
            
            buffer2[i] = buffer2[i] * damping;

            const val = buffer2[i];
            const index = i * 4;
            data[index] = 14;      // R: Ocean blue base
            data[index + 1] = 165;  // G
            data[index + 2] = 233;  // B
            data[index + 3] = val > 0 ? val : 0; // Alpha based on ripple intensity
        }

        // Swap buffers
        const temp = buffer1;
        buffer1 = buffer2;
        buffer2 = temp;

        ctx.putImageData(imgData, 0, 0);
        requestAnimationFrame(update);
    }

    update();

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .hero-content, .about-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
});
