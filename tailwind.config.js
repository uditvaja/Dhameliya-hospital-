// tailwind.config.js
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#032342', // Custom color ko 'primary' naam diya gaya hai
      },
      fontFamily: {
        'ds-sans': ['DS Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};