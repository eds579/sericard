import { SITE_CONFIG, FAQ_ITEMS } from '@/lib/constants'
import { PAGE_META } from '@/lib/pages'

// @id 상수
const IDS = {
  organization: `${SITE_CONFIG.url}/#organization`,
  website: `${SITE_CONFIG.url}/#website`,
  webpage: (path: string) => `${SITE_CONFIG.url}${path}#webpage`,
  faq: `${SITE_CONFIG.url}/#faq`,
  service: `${SITE_CONFIG.url}${PAGE_META.cardCashout.path}#service`,
  breadcrumb: (path: string) => `${SITE_CONFIG.url}${path}#breadcrumb`,
}

// 공통 BreadcrumbList 생성 함수
function createBreadcrumbList(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': IDS.breadcrumb(items[items.length - 1]?.path || ''),
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
  const page = PAGE_META.home

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': IDS.organization,
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        telephone: SITE_CONFIG.phone,
        description: SITE_CONFIG.description,
        areaServed: {
          '@type': 'Country',
          name: 'South Korea',
        },
        serviceType: '카드 현금화',
      },
      {
        '@type': 'WebSite',
        '@id': IDS.website,
        url: SITE_CONFIG.url,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        publisher: { '@id': IDS.organization },
        inLanguage: 'ko',
      },
      {
        '@type': 'WebPage',
        '@id': IDS.webpage(''),
        url: SITE_CONFIG.url,
        name: `${SITE_CONFIG.name} | 카드 현금화 24시간 3분 입금`,
        description: page.description,
        isPartOf: { '@id': IDS.website },
        about: { '@id': IDS.organization },
        mainEntity: { '@id': IDS.faq },
        inLanguage: 'ko',
      },
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
      {
        '@type': 'WebPage',
        '@id': IDS.webpage(page.path),
        url: `${SITE_CONFIG.url}${page.path}`,
        name: page.title,
        description: page.description,
        isPartOf: { '@id': IDS.website },
        mainEntity: { '@id': IDS.service },
        inLanguage: 'ko',
      },
      {
        '@type': 'Service',
        '@id': IDS.service,
        name: '카드 현금화',
        description: '신용카드 현금화 서비스. 24시간 365일 운영, 최대 3분 이내 입금.',
        provider: { '@id': IDS.organization },
        areaServed: {
          '@type': 'Country',
          name: 'South Korea',
        },
        availableChannel: {
          '@type': 'ServiceChannel',
          servicePhone: SITE_CONFIG.phone,
          availableLanguage: 'Korean',
        },
      },
      createBreadcrumbList([
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
        name: page.title,
        description: page.description,
        isPartOf: { '@id': IDS.website },
        about: { '@id': IDS.organization },
        inLanguage: 'ko',
      },
      createBreadcrumbList([
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
        name: page.title,
        description: page.description,
        isPartOf: { '@id': IDS.website },
        about: { '@id': IDS.organization },
        inLanguage: 'ko',
      },
      createBreadcrumbList([
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
