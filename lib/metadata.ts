import { Metadata } from 'next'
import { SITE_CONFIG } from './constants'

type PageMetadataProps = {
  title?: string
  description?: string
  path?: string
  noIndex?: boolean
}

export function generatePageMetadata({
  title,
  description,
  path = '',
  noIndex = false,
}: PageMetadataProps): Metadata {
  const fullTitle = title ? `${title} | ${SITE_CONFIG.name}` : `${SITE_CONFIG.name} | 카드 현금화 24시간 3분 입금`
  const fullDescription = description || SITE_CONFIG.description
  const url = `${SITE_CONFIG.url}${path}`

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: ['카드 현금화', '신용카드 현금화', '세리카드', '카드깡', '현금화'],
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
      title: fullTitle,
      description: fullDescription,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
    },
  }
}
