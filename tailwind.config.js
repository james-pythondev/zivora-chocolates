/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
      },
      colors: {
        cocoa: {
          50: '#FDF8F5',
          100: '#F9EEE7',
          200: '#F0D8C8',
          300: '#E2BBA2',
          400: '#C98F6D',
          500: '#A46845',
          600: '#7E472B',
          700: '#5C311C',
          800: '#3D1E10',
          900: '#26130A',
          950: '#170A05',
        },
        caramel: {
          50: '#FFF9EB',
          100: '#FEF0CC',
          200: '#FDE199',
          300: '#FBCF66',
          400: '#F8B633',
          500: '#E99B15',
          600: '#C9770E',
          700: '#9E540D',
        },
        sage: {
          50: '#F4F7F4',
          100: '#E5EDE5',
          500: '#4B7354',
          700: '#2F4F37',
          900: '#1D3323',
        }
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(61, 30, 16, 0.08)',
        'warm': '0 20px 40px -15px rgba(61, 30, 16, 0.15)',
        'glow': '0 0 25px rgba(233, 155, 21, 0.25)',
      }
    },
  },
  plugins: [],
}