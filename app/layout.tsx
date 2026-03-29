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

const siteDescription =
  "Frontend & Mobile Developer with 3+ years building React, Next.js, TypeScript, and React Native apps — healthcare dashboards, cross-platform mobile, and performance-optimised UIs.";

export const metadata: Metadata = {
  title: {
    default: "Abdus-Samad Ajao - Frontend & Mobile Developer | Portfolio",
    template: "%s | Abdus-Samad Ajao",
  },
  description: siteDescription,
  keywords: [
    "Frontend Developer",
    "React Native Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Developer",
    "Mobile Developer",
    "React",
    "Next.js",
    "JavaScript",
    "Web Development",
    "Portfolio",
    "Abdus-Samad Ajao",
    "Abuja, Nigeria",
    "Healthcare Applications",
  ],
  authors: [{ name: "Abdus-Samad Ajao", url: "https://abdussamadajao.com" }],
  creator: "Abdus-Samad Ajao",
  publisher: "Abdus-Samad Ajao",
  metadataBase: new URL("https://abdussamadajao.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdussamadajao.com",
    siteName: "Abdus-Samad Ajao - Portfolio",
    title: "Abdus-Samad Ajao - Frontend & Mobile Developer | Portfolio",
    description: siteDescription,
    images: [
      {
        url: "/images/abdussamad.png",
        width: 1200,
        height: 630,
        alt: "Abdus-Samad Ajao - Frontend & Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdus-Samad Ajao - Frontend & Mobile Developer | Portfolio",
    description: siteDescription,
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
