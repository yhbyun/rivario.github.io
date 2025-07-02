import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "rivario.com",
  description: "Portfolio of YongHun Byun, a web developer specializing in Laravel, PHP, and JavaScript. Building efficient and scalable web solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta property="og:title" content="rivario.com" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://rivario.com" />
      <meta property="og:image" content="https://avatars2.githubusercontent.com/u/946080?s=460" />
      <meta property="og:site_name" content="rivario.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="rivario.com" />
      <meta name="twitter:description" content="Portfolio of YongHun Byun, a web developer specializing in Laravel, PHP, and JavaScript. Building efficient and scalable web solutions." />
      <meta name="twitter:image" content="https://avatars2.githubusercontent.com/u/946080?s=460" />
      <meta name="twitter:site" content="@yonghunbyun" />
      <link rel="canonical" href="https://rivario.com"></link>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
