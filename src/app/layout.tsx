import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

export const metadata: Metadata = {
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
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80',
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
    images: [
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80',
    ],
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
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
