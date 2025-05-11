import { absoluteUrl } from '@/lib/utils'
import { Metadata } from 'next'
import '@/styles/index.css'
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL('https://outstatic.com'),
  title: {
    default: 'Micky Mai',
    template: '%s | Outstatic'
  },
  description: 'A blog starter built with Outstatic.',
  openGraph: {
    title: 'Hành trình của Micky',
    description: 'A blog starter built with Outstatic.',
    url: absoluteUrl('/'),
    siteName: 'Micky Mai',
    images: [
      {
        url: absoluteUrl('/images/Micky-black.png'),
        width: 1800,
        height: 1600
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  icons: {
    icon: [{ url: '/images/Micky-black.png' }]
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      {children}
      <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
      </body>
    </html>
  )
}
