import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { SITE_CONFIG } from '@/lib/constants'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import FloatingCTA from '@/components/common/FloatingCTA'
import {
  GoogleTagManagerHead,
  GoogleTagManagerBody,
} from '@/components/common/GoogleTagManager'

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | 카드깡 업체 · 신용카드 현금화 24시간 3분 입금`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
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
    title: `${SITE_CONFIG.name} | 카드깡 업체 · 신용카드 현금화 24시간 3분 입금`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/images/cards/세리카드.png',
        width: 1200,
        height: 630,
        alt: '세리카드 - 카드 현금화 전문 서비스',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | 카드깡 업체 · 신용카드 현금화 24시간 3분 입금`,
    description: SITE_CONFIG.description,
    images: ['/images/cards/세리카드.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <head>
        <GoogleTagManagerHead />
      </head>
      <body className="font-sans antialiased">
        <GoogleTagManagerBody />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
