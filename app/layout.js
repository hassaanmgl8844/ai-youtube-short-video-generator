import { Outfit } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

export const metadata = {
  title: "AI YOUTUBE SHORT VIDEO GENERATOR",
  description:
    "This SASS Product Is Being Developed By Muhammad Hassaan Mughal",
};

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={outfit.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
