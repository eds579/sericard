import { SITE_CONFIG, FAQ_ITEMS } from '@/lib/constants'
import { PAGE_META } from '@/lib/pages'
import { CategoryMeta } from '@/lib/blog'

// 공통 날짜 상수
const DATE_PUBLISHED = '2026-01-27'
const DATE_MODIFIED = '2026-02-04'

// @id 상수
const IDS = {
  organization: `${SITE_CONFIG.url}/#organization`,
  website: `${SITE_CONFIG.url}/#website`,
  webpage: (path: string) => `${SITE_CONFIG.url}${path}/#webpage`,
  faq: `${SITE_CONFIG.url}/#faq`,
  service: `${SITE_CONFIG.url}${PAGE_META.cardCashout.path}/#service`,
  breadcrumb: (path: string) => `${SITE_CONFIG.url}${path}/#breadcrumb`,
  article: (path: string) => `${SITE_CONFIG.url}${path}/#article`,
}

// 공통 BreadcrumbList 생성 함수
function createBreadcrumbList(path: string, items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': IDS.breadcrumb(path),
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.path}`,
    })),
  }
}

// 홈페이지용 JSON-LD (Organization, WebSite, WebPage, FAQPage)
export function HomePageJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. Organization (확장)
      {
        '@type': 'Organization',
        '@id': IDS.organization,
        name: SITE_CONFIG.name,
        legalName: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        description: SITE_CONFIG.description,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '논현동 199-2',
          addressLocality: '강남구',
          addressRegion: '서울특별시',
          postalCode: '06120',
          addressCountry: 'KR',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: '고객 지원',
          email: 'support@sericard.com',
          telephone: '+82-10-7715-1404',
          availableLanguage: ['ko'],
        },
        slogan: '24시간 3분 내 현금 입금, 믿을 수 있는 카드 현금화 업체 세리카드',
        knowsAbout: [
          { '@type': 'Thing', name: '카드깡' },
          { '@type': 'Thing', name: '카드 현금화' },
          { '@type': 'Thing', name: '신용카드 현금화' },
        ],
      },
      // 2. WebSite (확장)
      {
        '@type': 'WebSite',
        '@id': IDS.website,
        url: SITE_CONFIG.url,
        name: SITE_CONFIG.name,
        alternateName: [
          '세리카드 | 카드깡 업체 · 신용카드 현금화 24시간 3분 입금',
          'sericard',
          'sericard.com',
        ],
        publisher: {
          '@type': 'Organization',
          '@id': IDS.organization,
        },
        inLanguage: 'ko',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_CONFIG.url}/?s={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      // 3. WebPage (확장)
      {
        '@type': 'WebPage',
        '@id': IDS.webpage(''),
        url: SITE_CONFIG.url,
        name: '세리카드 | 카드깡 업체 · 신용카드 현금화 24시간 3분 입금',
        description: SITE_CONFIG.description,
        inLanguage: 'ko',
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
        publisher: {
          '@type': 'Organization',
          '@id': IDS.organization,
        },
        isPartOf: {
          '@type': 'WebSite',
          '@id': IDS.website,
        },
        mainEntity: {
          '@type': 'Organization',
          '@id': IDS.organization,
        },
      },
      // 4. FAQPage
      {
        '@type': 'FAQPage',
        '@id': IDS.faq,
        mainEntity: FAQ_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// 허브 페이지용 JSON-LD (WebPage, Service, BreadcrumbList)
export function HubPageJsonLd() {
  const page = PAGE_META.cardCashout

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. WebPage (확장)
      {
        '@type': 'WebPage',
        '@id': IDS.webpage(page.path),
        url: `${SITE_CONFIG.url}${page.path}`,
        name: `${page.title} | ${SITE_CONFIG.name}`,
        description: page.description,
        inLanguage: 'ko',
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
        isPartOf: {
          '@type': 'WebSite',
          '@id': IDS.website,
        },
        publisher: {
          '@type': 'Organization',
          '@id': IDS.organization,
        },
        mainEntity: {
          '@type': 'Service',
          '@id': IDS.service,
        },
        about: {
          '@type': 'Thing',
          name: '카드깡',
        },
        mentions: [
          { '@type': 'Thing', name: '카드 현금화' },
          { '@type': 'Thing', name: '신용카드 현금화' },
          { '@type': 'Thing', name: '카드현금화' },
        ],
      },
      // 2. Service (확장)
      {
        '@type': 'Service',
        '@id': IDS.service,
        url: `${SITE_CONFIG.url}${page.path}`,
        name: '카드깡',
        alternateName: ['카드현금화', '신용카드현금화', '카드 현금화', '신용카드 현금화'],
        serviceType: '카드깡 서비스',
        description: '카드깡(신용카드 현금화) 서비스. 24시간 365일 운영, 최대 3분 이내 입금.',
        provider: {
          '@type': 'Organization',
          '@id': IDS.organization,
        },
        areaServed: {
          '@type': 'Country',
          name: 'KR',
        },
        audience: {
          '@type': 'Audience',
          audienceType: '급전이 필요한 신용카드 소지자',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: '카드 현금화 서비스 절차',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: '본인 확인' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: '카드 결제' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: '현금 입금' },
            },
          ],
        },
      },
      // 3. BreadcrumbList
      createBreadcrumbList(page.path, [
        { name: PAGE_META.home.breadcrumbLabel, path: '' },
        { name: '카드깡', path: page.path },
      ]),
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// 회사 소개 페이지용 JSON-LD (AboutPage, BreadcrumbList)
export function AboutPageJsonLd() {
  const page = PAGE_META.aboutUs

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': IDS.webpage(page.path),
        url: `${SITE_CONFIG.url}${page.path}`,
        name: `${page.title} | ${SITE_CONFIG.name}`,
        description: page.description,
        inLanguage: 'ko',
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
        publisher: {
          '@type': 'Organization',
          '@id': IDS.organization,
        },
        isPartOf: {
          '@type': 'WebSite',
          '@id': IDS.website,
        },
        mainEntity: {
          '@type': 'Organization',
          '@id': IDS.organization,
        },
        about: {
          '@type': 'Organization',
          '@id': IDS.organization,
        },
      },
      createBreadcrumbList(page.path, [
        { name: PAGE_META.home.breadcrumbLabel, path: '' },
        { name: page.breadcrumbLabel, path: page.path },
      ]),
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// 문의하기 페이지용 JSON-LD (ContactPage, BreadcrumbList)
export function ContactPageJsonLd() {
  const page = PAGE_META.contact

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': IDS.webpage(page.path),
        url: `${SITE_CONFIG.url}${page.path}`,
        name: `${page.title} | ${SITE_CONFIG.name}`,
        description: page.description,
        inLanguage: 'ko',
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
        publisher: {
          '@type': 'Organization',
          '@id': IDS.organization,
        },
        isPartOf: {
          '@type': 'WebSite',
          '@id': IDS.website,
        },
      },
      createBreadcrumbList(page.path, [
        { name: PAGE_META.home.breadcrumbLabel, path: '' },
        { name: page.breadcrumbLabel, path: page.path },
      ]),
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// 블로그 메인 페이지용 JSON-LD (WebPage, BreadcrumbList)
export function BlogMainJsonLd() {
  const page = PAGE_META.blog

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': IDS.webpage('/blog'),
        url: `${SITE_CONFIG.url}/blog`,
        name: `카드깡 · 카드 현금화 정보 블로그 | ${SITE_CONFIG.name}`,
        description: '카드깡, 신용카드 현금화에 대한 모든 정보를 제공합니다. 카드 현금화 방법, 수수료, 안전한 이용법까지 세리카드 블로그에서 확인하세요.',
        inLanguage: 'ko',
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
        publisher: {
          '@type': 'Organization',
          '@id': IDS.organization,
        },
        isPartOf: {
          '@type': 'WebSite',
          '@id': IDS.website,
        },
      },
      createBreadcrumbList('/blog', [
        { name: PAGE_META.home.breadcrumbLabel, path: '' },
        { name: page.breadcrumbLabel, path: '/blog' },
      ]),
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// 블로그 카테고리(서브) 페이지용 JSON-LD (WebPage, BreadcrumbList)
type BlogCategoryJsonLdProps = {
  categorySlug: string
  categoryMeta: CategoryMeta
}

export function BlogCategoryJsonLd({ categorySlug, categoryMeta }: BlogCategoryJsonLdProps) {
  const categoryPath = `/blog/${categorySlug}`

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': IDS.webpage(categoryPath),
        url: `${SITE_CONFIG.url}${categoryPath}`,
        name: `${categoryMeta.title} | ${SITE_CONFIG.name}`,
        description: categoryMeta.description,
        inLanguage: 'ko',
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
        publisher: {
          '@type': 'Organization',
          '@id': IDS.organization,
        },
        isPartOf: {
          '@type': 'WebSite',
          '@id': IDS.website,
        },
      },
      createBreadcrumbList(categoryPath, [
        { name: PAGE_META.home.breadcrumbLabel, path: '' },
        { name: PAGE_META.blog.breadcrumbLabel, path: '/blog' },
        { name: categoryMeta.h1, path: categoryPath },
      ]),
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// 블로그 콘텐츠(포스트) 페이지용 JSON-LD (WebPage, Article, BreadcrumbList)
type BlogPostJsonLdProps = {
  title: string
  description: string
  slug: string
  categorySlug: string
  categoryName: string
  datePublished: string
  dateModified: string
  image?: string
}

export function BlogPostJsonLd({
  title,
  description,
  slug,
  categorySlug,
  categoryName,
  datePublished,
  dateModified,
  image,
}: BlogPostJsonLdProps) {
  const postPath = `/blog/${categorySlug}/${slug}`
  const postUrl = `${SITE_CONFIG.url}${postPath}`

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. WebPage
      {
        '@type': 'WebPage',
        '@id': IDS.webpage(postPath),
        url: postUrl,
        name: `${title} | ${SITE_CONFIG.name}`,
        description: description,
        inLanguage: 'ko',
        datePublished: datePublished,
        dateModified: dateModified,
        publisher: {
          '@type': 'Organization',
          '@id': IDS.organization,
        },
        isPartOf: {
          '@type': 'WebSite',
          '@id': IDS.website,
        },
        mainEntity: {
          '@type': 'Article',
          '@id': IDS.article(postPath),
        },
      },
      // 2. Article
      {
        '@type': 'Article',
        '@id': IDS.article(postPath),
        url: postUrl,
        headline: title,
        description: description,
        datePublished: datePublished,
        dateModified: dateModified,
        articleSection: categoryName,
        author: {
          '@type': 'Organization',
          '@id': IDS.organization,
        },
        publisher: {
          '@type': 'Organization',
          '@id': IDS.organization,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': IDS.webpage(postPath),
        },
        ...(image && { image: `${SITE_CONFIG.url}${image}` }),
      },
      // 3. BreadcrumbList
      createBreadcrumbList(postPath, [
        { name: PAGE_META.home.breadcrumbLabel, path: '' },
        { name: PAGE_META.blog.breadcrumbLabel, path: '/blog' },
        { name: categoryName, path: `/blog/${categorySlug}` },
        { name: title, path: postPath },
      ]),
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// 범용 JSON-LD 컴포넌트 (기타 페이지에서 사용)
type JsonLdProps = {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
