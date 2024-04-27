// AOS Config
AOS.init({
  duration: 1500,
  once: true,
  startEvent: 'DOMContentLoaded',
});

// Tailwind Config
tailwind.config = {
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('./assets/images/hero-bg.jpg')",
        'rune-bg': "url('./assets/images/rune-bg.svg')",
      },
      fontFamily: {
        'darker-grotesque': ['Darker Grotesque', 'sans-serif'],
      },
      colors: {
        'blur-bg': '#A379FB',
      },
    },
  },
};

// Mobile Navigation Menu
document.addEventListener('DOMContentLoaded', function () {
  const mobileNavbar = document.getElementById('mobile-navbar');
  const openButton = document.getElementById('menu-button');
  const closeButton = document.getElementById('close-button');
  const navLinks = document.querySelectorAll('#mobile-navbar a');

  openButton.addEventListener('click', function () {
    mobileNavbar.style.transform = 'translateY(0)';
  });

  closeButton.addEventListener('click', function () {
    mobileNavbar.style.transform = 'translateY(-100%)';
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      mobileNavbar.style.transform = 'translateY(-100%)';
    });
  });

  const navbar = document.getElementById('navbar');
  window.onscroll = function () {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      navbar.style.backgroundColor = '#1b0942e4';
      navbar.classList.add('backdrop-blur');
    } else {
      navbar.style.backgroundColor = 'transparent';
      navbar.classList.remove('backdrop-blur');
    }
  };
});
