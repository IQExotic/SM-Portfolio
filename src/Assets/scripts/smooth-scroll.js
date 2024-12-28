document.addEventListener('DOMContentLoaded', function() {
    const scrollLink = document.querySelector('.scroll-link-projects');
    const targetElement = document.getElementById('projects');

    if (scrollLink && targetElement) {
        scrollLink.addEventListener('click', function(event) {
            event.preventDefault();
            const offset = 50;
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollLink = document.querySelector('.scroll-link-contact');
    const targetElement = document.getElementById('contact');

    if (scrollLink && targetElement) {
        scrollLink.addEventListener('click', function(event) {
            event.preventDefault();
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        });
    }
});