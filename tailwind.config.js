/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}"
  ],
  // Note: Tailwind CSS v4 uses CSS-based configuration via @theme directive in globals.css
  // Theme customization is now done in src/app/globals.css using @theme {}
}
