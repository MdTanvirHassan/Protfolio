ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.heading-section', {origin: "top"});
ScrollReveal().reveal('.about-img, .services-card, .project-card, .blog-card, .price-card', {origin: "bottom"});