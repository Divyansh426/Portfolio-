// script.js

// Select the theme toggle button
const themeToggle = document.getElementById('themeToggle');

// Function to toggle between day and night mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    // Update the button icon
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';

    // Save theme preference to localStorage
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Load the saved theme from localStorage
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
}

// Add an event listener to the theme toggle button
themeToggle.addEventListener('click', toggleTheme);

// Call the loadSavedTheme function on page load
loadSavedTheme();

// Typing effect for the "I'm Divyansh Mishra" text
const typingText = document.querySelector('.typing');
const words = ['a Developer.', 'a Designer.', 'a Problem Solver.'];
let wordIndex = 0;
let letterIndex = 0;

function typeEffect() {
    if (letterIndex < words[wordIndex].length) {
        typingText.textContent += words[wordIndex][letterIndex];
        letterIndex++;
        setTimeout(typeEffect, 150);
    } else {
        setTimeout(eraseEffect, 1000); // Pause before erasing
    }
}

function eraseEffect() {
    if (letterIndex > 0) {
        typingText.textContent = typingText.textContent.slice(0, -1);
        letterIndex--;
        setTimeout(eraseEffect, 100);
    } else {
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word
        setTimeout(typeEffect, 300); // Pause before typing the next word
    }
}

// Start the typing effect on page load
typeEffect();

// Add hover effects to project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'none';
    });
});

// Form validation and submission
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        formFeedback.textContent = 'Please fill out all fields.';
        formFeedback.style.color = 'red';
        return;
    }

    // Simulate form submission (you can integrate a backend here)
    setTimeout(() => {
        formFeedback.textContent = 'Thank you for reaching out! I will get back to you soon.';
        formFeedback.style.color = 'green';

        // Clear form fields
        contactForm.reset();
    }, 1000);
});

// Add hover effect to social media buttons
const socialButtons = document.querySelectorAll('.media .btn');

socialButtons.forEach((button) => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = 'none';
    });
});


// Skill card hover effect
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'none';
    });
});

// Typing animation for "About Me" intro
const introText = document.querySelector('.intro-text');
const text = "Hello! I'm Divyansh Mishra, an engineering graduate passionate about coding, problem-solving, and impactful solutions.";
let index = 0;

function typeIntro() {
    if (index < text.length) {
        introText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeIntro, 50);
    }
}

// Start typing animation on page load
typeIntro();

// Dynamic background effect for Interests Section
const interestsSection = document.querySelector('.interests');

function createBubbles() {
    const bubble = document.createElement('span');
    bubble.className = 'bubble';
    const size = Math.random() * 50 + 10; // Random size
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 5 + 2}s`;
    interestsSection.appendChild(bubble);

    // Remove the bubble after animation ends
    setTimeout(() => {
        bubble.remove();
    }, 7000);
}

// Create bubbles periodically
setInterval(createBubbles, 500);