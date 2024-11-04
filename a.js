// script.js

// Toggle Navbar on Hamburger Click
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Back to Top Button Functionality
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Handle Join Form Submission
const joinForm = document.getElementById('joinForm');
joinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for joining the Alumni Association!');
    joinForm.reset();
});

// Handle Contact Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    contactForm.reset();
});
