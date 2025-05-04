export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: { fontFamily: {
        love: ['"Great Vibes"', 'cursive'],
        handwritten:['"Shadows Into Light", cursive'],
         backgroundImage: {
          'story-bg': "url('../src/asstets/audio/background-image.jpg')",
        },
      }
    },
    plugins: [],
  }}
  