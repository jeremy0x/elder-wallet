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
      screens: {
        xsm: '475px',
      },
    },
  },
};
