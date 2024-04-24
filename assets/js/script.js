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
        'rune-bg': "url('./assets/images/rune-bg.png')",
      },
      fontFamily: {
        'darker-grotesque': ['Darker Grotesque', 'sans-serif'],
      },
      colors: {
        'blur-bg': '#5DFDCB',
      },
    },
  },
};
