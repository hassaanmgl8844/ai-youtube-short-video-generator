import { Outfit  } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "AI YOUTUBE SHORT VIDEO GENERATOR",
  description: "This SASS Product Is Being Developed By Muhammad Hassaan Mughal",
};

const outfit=Outfit({subsets:['latin']})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className={outfit.className}
      >
        {children}
      </body>
    </html>
  );
}
