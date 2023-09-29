import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      transparent: 'transparent',
      'noble-black': {
        100: 'rgba(232, 233, 233, 1)',
        200: 'rgba(205, 206, 207, 1)',
        300: 'rgba(155, 156, 158, 1)',
        400: 'rgba(104, 107, 110, 1)',
        500: 'rgba(54, 58, 61, 1)',
        600: 'rgba(26, 29, 33, 1)',
        700: 'rgba(19, 22, 25, 1)',
        800: 'rgba(13, 15, 16, 1)',
        900: 'rgba(6, 7, 8, 1)',
      },
      'day-blue': {
        100: 'rgba(235, 237, 252, 1)',
        200: 'rgba(210, 216, 249, 1)',
        300: 'rgba(166, 176, 242, 1)',
        400: 'rgba(121, 137, 236, 1)',
        500: 'rgba(77, 98, 229, 1)',
        600: 'rgba(48, 69, 201, 1)',
        700: 'rgba(36, 52, 151, 1)',
        800: 'rgba(24, 35, 100, 1)',
        900: 'rgba(12, 17, 50, 1)',
      },
      'purple-blue': {
        100: 'rgba(240, 232, 253, 1)',
        200: 'rgba(222, 204, 251, 1)',
        300: 'rgba(189, 154, 248, 1)',
        400: 'rgba(156, 103, 244, 1)',
        500: 'rgba(124, 53, 241, 1)',
        600: 'rgba(95, 24, 212, 1)',
        700: 'rgba(71, 18, 159, 1)',
        800: 'rgba(48, 12, 106, 1)',
        900: 'rgba(24, 6, 53, 1)',
      },
      sunglow: {
        100: 'rgba(255, 250, 234, 1)',
        200: 'rgba(255, 243, 209, 1)',
        300: 'rgba(255, 232, 163, 1)',
        400: 'rgba(255, 220, 117, 1)',
        500: 'rgba(255, 209, 71, 1)',
        600: 'rgba(226, 180, 43, 1)',
        700: 'rgba(170, 135, 32, 1)',
        800: 'rgba(113, 90, 21, 1)',
        900: 'rgba(57, 45, 11, 1)',
      },
      'stem-green': {
        100: 'rgba(247, 253, 244, 1)',
        200: 'rgba(237, 251, 230, 1)',
        300: 'rgba(219, 247, 205, 1)',
        400: 'rgba(200, 244, 180, 1)',
        500: 'rgba(182, 240, 156, 1)',
        600: 'rgba(154, 211, 127, 1)',
        700: 'rgba(115, 159, 95, 1)',
        800: 'rgba(77, 106, 63, 1)',
        900: 'rgba(38, 53, 32, 1)',
      },
      'heisenberg-blue': {
        100: 'rgba(241, 251, 254, 1)',
        200: 'rgba(224, 246, 253, 1)',
        300: 'rgba(192, 237, 251, 1)',
        400: 'rgba(161, 228, 249, 1)',
        500: 'rgba(130, 219, 247, 1)',
        600: 'rgba(101, 190, 218, 1)',
        700: 'rgba(76, 143, 164, 1)',
        800: 'rgba(51, 95, 109, 1)',
        900: 'rgba(25, 48, 55, 1)',
      },
      'happy-orange': {
        100: 'rgba(255, 242, 233, 1)',
        600: 'rgba(226, 111, 32, 1)',
        900: 'rgba(57, 28, 8, 1)',
      },
      'electric-green': {
        100: 'rgba(243, 251, 247, 1)',
        600: 'rgba(74, 201, 126, 1)',
        900: 'rgba(18, 43, 29, 1)',
      },
      'red-power': {
        100: 'rgba(251, 236, 236, 1)',
        600: 'rgba(208, 48, 47, 1)',
        900: 'rgba(47, 15, 14, 1)',
      },
      'ouline:': {
        'heisenberg-blue': 'rgba(132, 220, 245, 1)',
      },
    },
    backgroundImage: {
      'green-blue-day-blue-600':
        'linear-gradient(225deg, #3045C9 0%, #65BEDA 45.31%, #9AD37F 100%)',
      'day-blue-blue-green-600': 'linear-gradient(45deg, #3045C9 0%, #65BEDA 45.31%, #9AD37F 100%)',
      'green-blue-day-blue-500':
        'linear-gradient(225deg, #4D62E5 0%, #87DDEE 45.31%, #B6F09C 100%)',
      'day-blue-blue-green-500': 'linear-gradient(45deg, #4D62E5 0%, #87DDEE 45.31%, #B6F09C 100%)',
      'green-blue-500': 'linear-gradient(225deg, #82DBF7 0%, #B6F09C 100%)',
      'blue-green-500': 'linear-gradient(45deg, #82DBF7 0%, #B6F09C 100%)',
      'glass-fill':
        'linear-gradient(118deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0.00) 100%)',
    },
    extend: {
      boxShadow: {
        'glass-effect':
          '0px 8px 12px 0px rgba(255, 255, 255, 0.08) inset, 0px 24px 24px -16px rgba(0, 0, 0, 0.12), 16px 24px 64px -24px rgba(255, 255, 255, 0.08) inset',
      },
    },
  },
  plugins: [
    plugin(({ addBase, addComponents, theme }) => {
      addBase({
        body: {
          color: theme('colors.gray.900'),
          backgroundColor: theme('colors.gray.100'),
        },
      });
      addComponents({
        '.heading-xl': {
          fontSize: '2.25rem',
          lineHeight: '2.75rem',
        },
        '.heading-lg': {
          fontSize: '2rem',
          lineHeight: '2.5rem',
        },
        '.heading-md': {
          fontSize: '1.75rem',
          lineHeight: '2.25rem',
        },
        '.heading-sm': {
          fontSize: '1.5rem',
          lineHeight: '2rem',
        },
        '.heading-xs': {
          fontSize: '1.25rem',
          lineHeight: '1.75rem ',
        },

        '.body-xl': {
          fontSize: '1.125rem',
          lineHeight: '1.75rem',
          letterSpacing: '-0.01em',
        },
        '.body-lg': {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          letterSpacing: '-0.01em',
        },
        '.body-md': {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          letterSpacing: '-0.01em',
        },
        '.body-sm': {
          fontSize: '0.75rem',
          lineHeight: '1.125rem',
          letterSpacing: '-0.01em',
        },
      });
    }),
    require('@tailwindcss/forms'),
  ],
};
export default config;
