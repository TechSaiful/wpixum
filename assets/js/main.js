
AOS.init({
duration: 1000,
once: true
});


// Header & Footer components //////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {

// HEADER
fetch('components/header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  })
  .catch(err => console.error('Header error:', err));

// FOOTER
fetch('components/footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  })
  .catch(err => console.error('Footer error:', err));

});




// <!-- hero animation -->

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

if (counters.length > 0) {
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let el = entry.target;
      let target = +el.getAttribute('data-target');

      if (!target) return; // 🔥 safety

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
}



// ===============================
// TESTIMONIAL SLIDER
// ===============================

const slider = document.getElementById("testimonialSlider");

if (slider) {
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let index = 0;
const totalSlides = slider.children.length;

function updateSlider() {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn?.addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  updateSlider();
});

prevBtn?.addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlider();
});

setInterval(() => {
  index = (index + 1) % totalSlides;
  updateSlider();
}, 5000);
}

// ===============================
// FAQ ACCORDION
// ===============================

const faqItems = document.querySelectorAll(".faq-item");

if (faqItems.length > 0) {
faqItems.forEach(item => {
  item.addEventListener("click", () => {

    const text = item.querySelector("p");
    const icon = item.querySelector("span");

    if (!text || !icon) return; // 🔥 safety

    text.classList.toggle("hidden");

    icon.innerText = text.classList.contains("hidden") ? "+" : "−";

  });
});
}

// ===============================
// PORTFOLIO FILTER
// ===============================

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(btn => {
btn.addEventListener("click", () => {

  // active button style
  filterButtons.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  const filter = btn.getAttribute("data-filter");

  portfolioItems.forEach(item => {
    const category = item.getAttribute("data-category");

    if (filter === "all" || category === filter) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }

  });

});
});


