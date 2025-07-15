import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michael Yang - Full Stack Developer & Software Engineer",
  description: "Software engineer and full-stack web developer based in Mountain View, CA. Specializing in React, Node.js, Python, and modern web technologies.",
  keywords: ["Michael Yang", "Full Stack Developer", "Software Engineer", "React", "Node.js", "Python", "Web Development"],
  authors: [{ name: "Michael Yang" }],
  creator: "Michael Yang",
  openGraph: {
    title: "Michael Yang - Full Stack Developer",
    description: "Software engineer and full-stack web developer based in Mountain View, CA.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Yang - Full Stack Developer",
    description: "Software engineer and full-stack web developer based in Mountain View, CA.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
        suppressHydrationWarning={true}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
