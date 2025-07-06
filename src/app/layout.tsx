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
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-44X0VW65EY"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-44X0VW65EY');
            `,
          }}
        />
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=G-44X0VW65EY"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
