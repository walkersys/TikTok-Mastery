import './globals.css'
import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'
import Script from 'next/script'
import { getWebsiteSchema } from '@/lib/schema'

const poppins = Poppins({ 
  weight: ['400', '600', '800'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TikTok Mastery: Unlock Your Potential - BoughtOnTikTok',
  description: 'Advanced strategies for TikTok content creators, sellers, and affiliates. Learn how to grow your following, boost sales and maximize earnings.',
  openGraph: {
    title: 'TikTok Mastery: Unlock Your Potential',
    description: 'Advanced strategies for TikTok content creators, sellers, and affiliates.',
    url: 'https://boughtontiktok.com',
    siteName: 'BoughtOnTikTok',
    images: [
      {
        url: 'https://boughtontiktok.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TikTok Mastery: Unlock Your Potential',
    description: 'Advanced strategies for TikTok content creators, sellers, and affiliates.',
    images: ['https://boughtontiktok.com/twitter-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebsiteSchema()) }}
        />
      </head>
      <body>
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}