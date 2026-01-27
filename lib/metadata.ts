import { Metadata } from 'next'
import { SITE_CONFIG } from './constants'

type PageMetadataProps = {
  title?: string
  description?: string
  keywords?: string[]
  path?: string
  noIndex?: boolean
}

const DEFAULT_OG_IMAGE = '/images/cards/세리카드.png'

export function generatePageMetadata({
  title,
  description,
  keywords,
  path = '',
  noIndex = false,
}: PageMetadataProps): Metadata {
  const fullDescription = description || SITE_CONFIG.description
  const url = `${SITE_CONFIG.url}${path}`
  const defaultKeywords = ['카드 현금화', '신용카드 현금화', '세리카드', '카드깡', '현금화']

  return {
    title: title, // title.template이 적용됨
    description: fullDescription,
    keywords: keywords || defaultKeywords,
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'ko_KR',
      url: url,
      siteName: SITE_CONFIG.name,
      title: title,
      description: fullDescription,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} - 카드 현금화 전문 서비스`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: fullDescription,
      images: [DEFAULT_OG_IMAGE],
    },
  }
}
