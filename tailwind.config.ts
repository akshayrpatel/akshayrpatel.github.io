import type { Config } from 'tailwindcss';
import { jetbrainsMono } from './app/fonts';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        sectionTitle: 'var(--section-title-font-color)',
      },
      font: {
        title: 'var(--font-1-title)',
        subtitle: 'var(--font-1-subtitle)',
        paragraph: 'var(--font-1-paragraph)',
      },
      fontFamily: {
        googleSansBold: ['var(--font-google-sans-bold)', 'sans-serif'],
        googleSansMedium: ['var(--font-google-sans-medium)', 'sans-serif'],
        googleSansRegular: ['var(--font-google-sans-regular)', 'sans-serif'],
        jakartaSans: [
          'var(--font-jakarta-sans-variable)',
          '-apple-system',
          'sans-serif',
        ],
        outfitSans: [
          'var(--font-outfit-sans-variable)',
          '-apple-system',
          'sans-serif',
        ],
        robotoMono: ['var(--font-roboto-mono-variable)'],
        jetbrainsMono: ['var(--font-jetbrains-mono-variable)'],
      },
      display: ['group-hover'],
    },
  },
  plugins: [],
} satisfies Config;
