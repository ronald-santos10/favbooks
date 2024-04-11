import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FavBooks",
  description: "A sua biblioteca digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ptbr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
