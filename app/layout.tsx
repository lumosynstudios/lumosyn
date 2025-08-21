import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: '/favicon-light.svg',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: light)'
      },
      {
        url: '/favicon-dark.svg',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: dark)'
      },
    ]
  },
  title: "Lumosyn Studios",
  description: "Leading tech startup in the Philippines offering modern web development, mobile apps, AI automation, UI/UX design, and chatbot/LLM integrations. Serving Manila, Cebu, Davao and all of PH.",
  keywords: "web development Philippines, AI automation Manila, UI/UX design Cebu, chatbots Philippines, LLM integration, tech startup PH, React development Philippines, Next.js developers Manila, mobile app development Philippines",
  authors: [{ name: "Lumosyn Studios Philippines" }],
  creator: "Lumosyn Studios",
  publisher: "Lumosyn Studios",
  robots: "index, follow",
  alternates: {
    canonical: "https://lumosyn.ph",
  },
  openGraph: {
    title: "Lumosyn Studios",
    description: "Transform your business with our modern web development and AI automation services. Based in the Philippines, serving clients worldwide.",
    url: "https://lumosyn.ph",
    siteName: "Lumosyn Studios",
    type: "website",
    locale: "en_PH",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lumosyn Studios - Modern Web & AI Solutions Philippines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumosyn Studios",
    description: "Transform your business with our modern web development and AI automation services.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
  other: {
    "geo.region": "PH",
    "geo.country": "Philippines",
    "geo.placename": "Philippines",
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
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
