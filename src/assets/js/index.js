    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            playfair: ['Playfair Display', 'serif'],
          },
          colors: {
            primary: '#0F2027',
            secondary: '#203A43',
            accent: '#2C5364',
            gold: '#F0A500',
            goldLight: '#F5C518',
            earth: '#8B6914',
            teal: '#00B4D8',
            darkBg: '#0A0A0A',
          }
        }
      }
    }

    
  // ===== SCROLL REVEAL =====
  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 100;
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

  // ===== COUNTER ANIMATION =====
  function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const rect = counter.getBoundingClientRect();
      if (rect.top < window.innerHeight && !counter.classList.contains('counted')) {
        counter.classList.add('counted');
        let current = 0;
        const increment = target / 80;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = target + (target > 100 ? '+' : '+');
            clearInterval(timer);
          } else {
            counter.textContent = Math.ceil(current);
          }
        }, 20);
      }
    });
  }
  window.addEventListener('scroll', animateCounters);
  window.addEventListener('load', animateCounters);

  // ===== NAVBAR SCROLL =====
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });

  // ===== MOBILE MENU =====
  function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileOverlay');
    const hamburger = document.getElementById('hamburgerBtn');
    if (menu) menu.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
    if (hamburger) hamburger.classList.toggle('active');
  }

  // ===== PARTICLES =====
  function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const colors = ['#F0A500', '#00B4D8', '#F5C518'];
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      const size = Math.random() * 4 + 2;
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.cssText = `
        width: ${size}px; height: ${size}px;
        background: ${color};
        left: ${Math.random() * 100}%;
        animation-duration: ${Math.random() * 15 + 10}s;
        animation-delay: ${Math.random() * 10}s;
        box-shadow: 0 0 ${size * 3}px ${color};
      `;
      container.appendChild(particle);
    }
  }
  createParticles();

  // ===== PRELOADER =====
  window.addEventListener('load', () => {
    setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if (preloader) preloader.classList.add('hidden');
    }, 1200);
  });

  // ===== MODAL CONNEXION =====
  function openModal() {
    const modal = document.getElementById('loginModal');
    if (modal) modal.classList.add('active');
  }
  function closeModal() {
    const modal = document.getElementById('loginModal');
    if (modal) modal.classList.remove('active');
  }

  // ===== PROGRESS BAR =====
  window.addEventListener('scroll', () => {
    const bar = document.getElementById('progressBar');
    if (bar) {
      const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      bar.style.width = scrolled + '%';
    }
  });