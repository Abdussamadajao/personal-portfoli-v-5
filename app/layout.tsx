import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/layout";
import { ThemeProvider } from "@/providers/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ajao Abdussamad - Frontend Developer | Portfolio",
    template: "%s | Ajao Abdussamad",
  },
  description:
    "Frontend Architect specializing in high-performance, cinematic web experiences and scalable design systems. Expert in React, Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Developer",
    "UI/UX Developer",
    "Frontend Architect",
    "React",
    "Next.js",
    "JavaScript",
    "Web Development",
    "Portfolio",
    "Ajao Abdussamad",
    "Abuja, Nigeria",
    "Healthcare Applications",
    "E-commerce Solutions",
  ],
  authors: [{ name: "Ajao Abdussamad", url: "https://abdussamadajao.com" }],
  creator: "Ajao Abdussamad",
  publisher: "Ajao Abdussamad",
  metadataBase: new URL("https://abdussamadajao.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdussamadajao.com",
    siteName: "Ajao Abdussamad - Portfolio",
    title: "Ajao Abdussamad - Frontend Developer | Portfolio",
    description:
      "Frontend Architect specializing in high-performance, cinematic web experiences and scalable design systems.",
    images: [
      {
        url: "/images/abdussamad.png",
        width: 1200,
        height: 630,
        alt: "Ajao Abdussamad - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajao Abdussamad - Frontend Developer | Portfolio",
    description:
      "Frontend Architect specializing in high-performance, cinematic web experiences and scalable design systems.",
    images: ["/images/abdussamad.png"],
    creator: "@abdussamadajao",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <Layout>{children}</Layout>
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
