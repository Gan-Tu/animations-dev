/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  // Hovering is technically only possible when using a pointer device. However, when you tap an interactive element on a touch device, it triggers the hover state as well. This is annoying and usually accidental. To avoid this we can apply a media query that will only trigger a hover effect only if a pointer is used to interact with the element.
  // future: {
  //   hoverOnlyWhenSupported: true,
  // },
};
