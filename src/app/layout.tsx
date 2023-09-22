import { Analytics } from '@vercel/analytics/react'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://workarena.nl'),
  title: {
    template: '%s - Work Arena',
    default: 'Work Arena - Job offers made simple for everybody',
  },
  description:
    'Find a perfect job with Work Arena in an always thriving industry withing the Dutch companies.',

  openGraph: {
    title: {
      template: '%s - Work Arena',
      default: 'Work Arena - Job offers made simple for everybody',
    },
    description:
      'Find a perfect job with Work Arena in an always thriving industry withing the Dutch companies.',

    url: 'https://workarena.nl',
    siteName: 'WorkArena.nl',
    images: [
      {
        url: '/og-smaller.jpg',
        width: 640,
        height: 426,
      },
      {
        url: '/og-medium.jpg',
        width: 1920,
        height: 1280,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'workarena.nl',
    description:
      'Find a perfect job with Work Arena in an always thriving industry withing the Dutch companies.',
    creator: '@workarena.nl',
    images: ['/og-medium.jpg'],
  },
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
