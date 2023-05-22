/*=======Scroll Reveal==== */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.heading-section', {origin: "top"});
ScrollReveal().reveal('.about-img, .services-card, .project-card, .blog-card, .price-card', {origin: "bottom"});

/* Typed JS */
const typed = new Typed('.multi-text', {
    strings: [ "A Web Designer", "A Developer", "I Love Design.", "I Love to Develop." ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });