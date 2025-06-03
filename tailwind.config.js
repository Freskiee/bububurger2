/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#FFF3E8',
          100: '#FFE6D1',
          200: '#FFCDA3',
          300: '#FEB476',
          400: '#FEA052',
          500: '#FE8C2D', // Brand orange
          600: '#F37208',
          700: '#CB5E07',
          800: '#A34B05',
          900: '#7B3804',
        },
        secondary: {
          50: '#F7F7F7',
          100: '#EFEFEF',
          200: '#DFDFDF',
          300: '#CFCFCF',
          400: '#A6A6A6',
          500: '#7D7D7D',
          600: '#545454',
          700: '#404040',
          800: '#323232', // Brand dark gray
          900: '#1F1F1F',
        },
        accent: {
          red: '#FF5252',
          green: '#4CAF50',
          yellow: '#FFEB3B',
        }
      },
      backgroundImage: {
        'grill-pattern': "url('https://images.pexels.com/photos/1268551/pexels-photo-1268551.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      },
      animation: {
        bounce: 'bounce 1s infinite',
        wiggle: 'wiggle 1s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};