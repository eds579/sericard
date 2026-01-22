import type { Metadata } from 'next'
import './globals.css'
import { SITE_CONFIG } from '@/lib/constants'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import FloatingCTA from '@/components/common/FloatingCTA'
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | 카드 현금화 24시간 3분 입금`,
  description: SITE_CONFIG.description,
  keywords: ['카드 현금화', '신용카드 현금화', '세리카드', '카드깡', '현금화'],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | 카드 현금화 24시간 3분 입금`,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | 카드 현금화 24시간 3분 입금`,
    description: SITE_CONFIG.description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
