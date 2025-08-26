// Get DOM elements
const hamburger = document.getElementById('hamburger');
const dropdownMenu = document.getElementById('dropdownMenu');

// Toggle dropdown menu
function toggleMenu() {
    hamburger.classList.toggle('active');
    dropdownMenu.classList.toggle('active');
}

// Close menu when clicking outside
function closeMenuOnOutsideClick(event) {
    if (!hamburger.contains(event.target) && !dropdownMenu.contains(event.target)) {
        hamburger.classList.remove('active');
        dropdownMenu.classList.remove('active');
    }
}

// Close menu when clicking on a menu item
function closeMenuOnItemClick() {
    hamburger.classList.remove('active');
    dropdownMenu.classList.remove('active');
}

// Event listeners
hamburger.addEventListener('click', toggleMenu);
document.addEventListener('click', closeMenuOnOutsideClick);

// Add click event to all menu items
const menuItems = document.querySelectorAll('.menu-list a');
menuItems.forEach(item => {
    item.addEventListener('click', closeMenuOnItemClick);
});

// Close menu on escape key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        hamburger.classList.remove('active');
        dropdownMenu.classList.remove('active');
    }
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 70) {
        navbar.style.background = 'rgba(255, 255, 255, 0.1)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = 'none';
    }
});

// Scroll effect correction to menu
window.addEventListener('scroll', function() {
    const ddmt = document.querySelector('.dropdown-menu');
    if (window.scrollY > 200) {
        ddmt.style.background = 'rgba(0, 0, 0, 0.1)';
        ddmt.style.backdropFilter = 'blur(10px)';
    }
});

// Logo white bg on scroll
window.addEventListener('scroll', function() {
    const navlogo = document.querySelector('.navlogo');
    if (window.scrollY > 70) {
        navlogo.style.background = 'rgba(255, 255, 255, 1.0)';
    } else {
        navlogo.style.background = 'transparent';
        navlogo.style.backdropFilter = 'none';
    }
});
/*window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 500) {
        navbar.style.background = 'rgba(139, 196, 51, 1.0)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#transparent';
        navbar.style.backdropFilter = 'none';
    }
});
*/

// Carousel Functionality
let slideIndex = 1;
showSlide(slideIndex);

// Auto slide every 5 seconds
setInterval(() => {
    slideIndex++;
    if (slideIndex > 6) slideIndex = 1;
    showSlide(slideIndex);
}, 5000);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.add('active');
}

function setCarouselSectionHeight() {
    // Find the active slide image
    const activeSlide = document.querySelector('.carousel-slide.active img');
    const carouselSection = document.querySelector('.carousel-section');
    if (activeSlide && carouselSection) {
        // Get image height after it loads
        carouselSection.style.height = activeSlide.offsetHeight + 'px';
    }
}

// Run on page load and whenever the slide changes
window.addEventListener('load', setCarouselSectionHeight);
window.addEventListener('resize', setCarouselSectionHeight);

// If you have a carousel change event, call setCarouselSectionHeight() after slide changes



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

// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const subject = formData.get('subject');
    const message = formData.get('message');

    /*// Simple validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }*/

    // Simulate form submission
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});