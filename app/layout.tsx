import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://veriseekeducation.com'),
  title: {
    default: "Veriseek Education - Student Competitions & Workshops",
    template: "%s | Veriseek Education"
  },
  description: "Empowering students with real-world skills through dynamic competitions and workshops. Join Veriseek Education for innovative learning experiences and skill development.",
  keywords: ["education", "student competitions", "workshops", "skill development", "learning platform", "educational technology"],
  authors: [{ name: "Veriseek Education" }],
  creator: "Veriseek Education",
  publisher: "Veriseek Education",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://veriseekeducation.com',
    siteName: 'Veriseek Education',
    title: 'Veriseek Education - Student Competitions & Workshops',
    description: 'Empowering students with real-world skills through dynamic competitions and workshops.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Veriseek Education Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veriseek Education - Student Competitions & Workshops',
    description: 'Empowering students with real-world skills through dynamic competitions and workshops.',
    images: ['/og-image.jpg'],
    creator: '@veriseekedu',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}