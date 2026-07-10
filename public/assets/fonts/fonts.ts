import localFont from "next/font/local";

export const tbcContracticaCaps = localFont({
  variable: "--font-tbc-contractica-caps",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  src: [
    {
      path: "./TBCContracticaCAPS-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./TBCContracticaCAPS-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./TBCContracticaCAPS-Medium.ttf",
      weight: "500",
      style: "normal",
    },

    {
      path: "./TBCContracticaCAPS-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});
