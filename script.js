// Smooth Scroll Navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll-based Fade-in Animation
const observer = new IntersectionObserver((entries, observerInstance) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observerInstance.unobserve(entry.target); // Optional: Stop observing once visible
    }
  });
}, {
  threshold: 0.1
});

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});