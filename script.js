const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple front-end validation passed, just show success message
    formMessage.textContent = "Thanks for reaching out! I'll get back to you soon.";
    form.reset();
});