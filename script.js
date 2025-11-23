window.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('show');
  });

  // Smooth scroll
  const scrollLinks = document.querySelectorAll('nav ul li a');
  scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }

      // Tutup menu mobile setelah klik
      if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
        hamburger.classList.remove('active');
      }
    });
  });
});
