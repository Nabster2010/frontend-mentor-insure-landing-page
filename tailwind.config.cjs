/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkViolet: "hsl(256, 26%, 20%)",
        GrayishBlue: "hsl(216, 30%, 68%)",
        VeryDarkViolet: "hsl(270, 9%, 17%)",
        DarkGrayishViolet: "hsl(273, 4%, 51%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        DmSerif: "DM Serif Display, serif",
        Karla: "Karla, sans-serif",
      },
      backgroundImage: {
        introLeftDesktop: 'url("/images/bg-pattern-intro-left-desktop.svg")',
        introLeftMobile: 'url("/images/bg-pattern-intro-left-mobile.svg")',
        introRightDesktop: 'url("/images/bg-pattern-intro-right-desktop.svg")',
        introRightMobile: 'url("/images/bg-pattern-intro-right-mobile.svg")',
        howWeWorkPatternDesktop:
          'url("/images/bg-pattern-how-we-work-desktop.svg")',
        howWeWorkPatternMobile:
          'url("/images/bg-pattern-how-we-work-mobile.svg")',
        footerPatternDesktop: 'url("/images/bg-pattern-footer-desktop.svg")',
        footerPatternMobile: 'url("/images/bg-pattern-footer-mobile.svg")',
      },
      backgroundPosition: {
        introCornersDesktop: "0% 300px , 100% top",
        introCornersMobile: "0% 300px , 100% top",
      },
    },
  },
  plugins: [],
};
