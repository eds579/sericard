// 페이지별 메타데이터 중앙 관리
// 메타데이터(title, description)와 JSON-LD가 동일한 소스를 참조하도록 함

export type PageMeta = {
  title: string
  description: string
  path: string
  keywords?: string[]
  breadcrumbLabel: string   // 브레드크럼에 표시될 이름
  sitemapPriority: number
  sitemapChangeFreq: 'daily' | 'weekly' | 'monthly' | 'yearly'
}

export const PAGE_META = {
  home: {
    title: '', // 홈은 layout.tsx의 default title 사용
    description: '신용카드 현금화 전문 세리카드. 24시간 365일 운영, 카드깡 업계 최저 수수료, 최대 3분 이내 현금 입금.',
    path: '',
    breadcrumbLabel: '홈',
    sitemapPriority: 1,
    sitemapChangeFreq: 'weekly',
  },
  cardCashout: {
    title: '카드 현금화 - 신용카드 현금화 방법 총정리',
    description: '카드 현금화란? 신용카드 현금화의 모든 것을 알려드립니다. 안전한 카드깡 이용 방법, 수수료, 주의사항까지 세리카드에서 확인하세요. 24시간 365일 상담 가능.',
    path: '/card-cashout',
    keywords: ['카드 현금화', '신용카드 현금화', '카드 현금화 방법', '카드 현금화 수수료', '안전한 카드 현금화'],
    breadcrumbLabel: '카드 현금화',
    sitemapPriority: 0.9,
    sitemapChangeFreq: 'weekly',
  },
  aboutUs: {
    title: '회사 소개',
    description: '세리카드는 고객 신뢰를 최우선으로 하는 카드 현금화 전문 서비스 업체입니다. 24시간 365일 운영, 카드깡 업계 최저 수수료, 최대 3분 내 현금화 완료.',
    path: '/about-us',
    breadcrumbLabel: '회사 소개',
    sitemapPriority: 0.7,
    sitemapChangeFreq: 'monthly',
  },
  contact: {
    title: '문의하기',
    description: '세리카드 문의하기. 24시간 365일 상담 가능합니다. 전화: 010-7715-1404. 카드 현금화 관련 문의를 친절하게 안내해 드립니다.',
    path: '/contact',
    breadcrumbLabel: '문의하기',
    sitemapPriority: 0.8,
    sitemapChangeFreq: 'monthly',
  },
} as const satisfies Record<string, PageMeta>
