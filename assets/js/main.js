
  AOS.init({
    duration: 1000,
    once: true
  });


<!-- hero animation -->

// ===============================
// HERO SCROLL REVEAL ANIMATION
// ===============================

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0", "translate-y-10");
      entry.target.classList.add("opacity-100", "translate-y-0");
    }
  });
}, {
  threshold: 0.2
});

// Target elements
document.querySelectorAll('.hero-text, .hero-image').forEach(el => {
  observer.observe(el);
});


// ===============================
// REVEAL ANIMATION (Reusable)
// ===============================
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0", "translate-y-10");
      entry.target.classList.add("opacity-100", "translate-y-0");
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => revealObserver.observe(el));


// ===============================
// COUNTER ANIMATION
// ===============================
const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let el = entry.target;
      let target = +el.getAttribute('data-target');
      let count = 0;

      let update = () => {
        let increment = target / 100;
        count += increment;

        if (count < target) {
          el.innerText = Math.ceil(count);
          requestAnimationFrame(update);
        } else {
          el.innerText = target + "+";
        }
      };

      update();
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));