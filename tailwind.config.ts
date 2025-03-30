import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#C4C7FF',        // Color principal
        secondary: '#FF9A00',   // Color secundario
        background: '#1d1d1b'   // Fondo
      }
    }
  },
  plugins: []
};

export default config;
