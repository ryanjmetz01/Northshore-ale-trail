import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NorthShore Ale Trail",
  description: "An App that allows people to find new local breweries and other local craft booze",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header>
        <h1>NorthShore Ale Trail</h1>
      </header>
        {children}
        </body>
    </html>
  );
}
