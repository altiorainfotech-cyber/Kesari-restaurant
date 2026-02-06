import type { Metadata } from "next";
import { Oswald, Inter, Protest_Revolution } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const protestRevolution = Protest_Revolution({
  variable: "--font-protest",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Kesari Restaurant",
  description: "Authentic Indian Cuisine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${oswald.variable} ${inter.variable} ${protestRevolution.variable} font-inter antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
