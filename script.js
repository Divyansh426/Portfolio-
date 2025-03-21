
const themeToggle = document.getElementById('themeToggle');


function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';

    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}


function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
}


themeToggle.addEventListener('click', toggleTheme);


loadSavedTheme();


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
        setTimeout(eraseEffect, 1000); 
    }
}

function eraseEffect() {
    if (letterIndex > 0) {
        typingText.textContent = typingText.textContent.slice(0, -1);
        letterIndex--;
        setTimeout(eraseEffect, 100);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 300); 
    }
}


typeEffect();


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
    event.preventDefault();

    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        formFeedback.textContent = 'Please fill out all fields.';
        formFeedback.style.color = 'red';
        return;
    }

 
    setTimeout(() => {
        formFeedback.textContent = 'Thank you for reaching out! I will get back to you soon.';
        formFeedback.style.color = 'green';

       
        contactForm.reset();
    }, 1000);
});


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


typeIntro();


const interestsSection = document.querySelector('.interests');

function createBubbles() {
    const bubble = document.createElement('span');
    bubble.className = 'bubble';
    const size = Math.random() * 50 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 5 + 2}s`;
    interestsSection.appendChild(bubble);

    
    setTimeout(() => {
        bubble.remove();
    }, 7000);
}


setInterval(createBubbles, 500);
