import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import Script from 'next/script'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Irineu Brito',
    template: '%s | Next.js Portfolio Starter',
  },
  description: 'Aqui você encontra mais informações sobre mim.',
  openGraph: {
    title: 'Portfolio Irineu Brito',
    description: 'Aqui você encontra mais informações sobre mim.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
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
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  useEffect(() => {
    // Get the user's language from the browser
    const language = navigator.language || 'pt-BR'

    // Check if the language is not Portuguese (pt or pt-BR)
    if (!language.includes('pt')) {
      // If it's not Portuguese, redirect to /en
      router.push('/en')
    }
  }, [router])

  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="9c2388f8-2160-467b-ac45-16d8bf6e899b"
        />
      </head>
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
