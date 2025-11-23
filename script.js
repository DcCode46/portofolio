// Smooth scroll untuk navbar & tombol
const scrollLinks = document.querySelectorAll('nav ul li a, .btn');

for (const link of scrollLinks) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute('href').slice(1);
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

// Contact form submit (dummy)
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Terima kasih, pesan Anda telah terkirim!');
  form.reset();
});

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');

  // Animasi hamburger
  hamburger.classList.toggle('active');
});
