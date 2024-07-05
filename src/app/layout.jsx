import "../app/globals.css";
import Navbar from "@/components/Navbar";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "RAnimeList",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`${gabarito.className} bg-color-dark`} suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
