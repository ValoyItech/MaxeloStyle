// Slideshow Animation for Hero Section
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');

function nextSlide() {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = 1;
}
setInterval(nextSlide, 5000);

// Scroll Animations
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.price-card').forEach(el => observer.observe(el));

// Hamburger Menu Toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('show');
});


document.addEventListener("DOMContentLoaded", function () {
    const slideshows = {
        '.kids-slideshow': ['Kids1.jpg', 'Kids2.jpg', 'Kids3.jpg', 'Kids4.jpg', 'Kids5.jpg', 'Kids6.jpg'],
        '.adult-slideshow': ['Adult1.jpg', 'Adult2.jpg', 'Adult3.jpg', 'Adult4.jpg', 'Adult5.jpg'],
        '.top-slideshow': ['Top1.jpg', 'Top2.jpg', 'Top3.jpg', 'Top4.jpg'],
        '.raw-slideshow': ['Raw1.jpg', 'Raw2.jpg', 'Raw3.jpg', 'Raw4.jpg', 'Raw5.jpg', 'Raw6.jpg', 'Raw7.jpg']
    };

    Object.entries(slideshows).forEach(([selector, images]) => {
        const container = document.querySelector(selector);
        let currentIndex = 0;

        if (!container) return; // Ensure the container exists

        // Clear any existing content
        container.innerHTML = '';

        // Create slides dynamically
        images.forEach((image, index) => {
            const slide = document.createElement('div');
            slide.className = 'gallery-slide';
            slide.style.backgroundImage = `url(images/${image})`;
            if (index === 0) slide.classList.add('active'); // First image visible
            container.appendChild(slide);
        });

        // Start the slideshow
        const slides = container.querySelectorAll('.gallery-slide');

        setInterval(() => {
            slides[currentIndex].classList.remove('active'); // Hide current
            currentIndex = (currentIndex + 1) % images.length;
            slides[currentIndex].classList.add('active'); // Show next
        }, 3000); // 3 seconds per image
    });
});

let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        navbar.classList.add('hidden'); // Hide when scrolling down
    } else {
        navbar.classList.remove('hidden'); // Show when scrolling up
    }
    lastScrollY = window.scrollY;
});
