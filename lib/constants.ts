export const SITE_CONFIG = {
  name: '세리카드',
  nameEn: 'Sericard',
  domain: 'sericard.com',
  url: 'https://sericard.com',
  phone: '010-7715-1404',
  phoneDisplay: '010-7715-1404',
  phoneTel: 'tel:010-7715-1404',
  phoneSms: 'sms:010-7715-1404',
  description: '신용카드 현금화 전문 세리카드. 24시간 365일 운영, 업계 최저 수수료, 최대 3분 이내 입금.',
} as const

export const SERVICE_INFO = {
  operatingHours: '24시간 365일',
  depositTime: '최대 3분 이내',
  feePolicy: '업계 최저 수수료',
} as const

export const CARD_COMPANIES = [
  { name: '국민', logo: '/images/cards/kb.png' },
  { name: '신한', logo: '/images/cards/shinhan.png' },
  { name: '롯데', logo: '/images/cards/lotte.png' },
  { name: '외환', logo: '/images/cards/keb.png' },
  { name: '하나', logo: '/images/cards/hana.png' },
  { name: '현대', logo: '/images/cards/hyundai.png' },
  { name: '삼성', logo: '/images/cards/samsung.png' },
  { name: 'BC', logo: '/images/cards/bc.png' },
  { name: '농협', logo: '/images/cards/nh.png' },
  { name: '우리', logo: '/images/cards/woori.png' },
] as const

export const PROCESS_STEPS = [
  {
    step: 1,
    title: '상담 신청',
    description: '전화로 간편하게 상담 신청',
    icon: 'Phone'
  },
  {
    step: 2,
    title: '본인 확인',
    description: '간단한 본인 확인 절차',
    icon: 'UserCheck'
  },
  {
    step: 3,
    title: '결제',
    description: '안전한 카드 결제 진행',
    icon: 'CreditCard'
  },
  {
    step: 4,
    title: '입금',
    description: '최대 3분 이내 입금 완료',
    icon: 'Banknote'
  },
] as const

export const NAV_ITEMS = [
  { label: '홈', href: '/' },
  { label: '카드 현금화', href: '/card-cashout' },
  { label: '회사 소개', href: '/about-us' },
  { label: '문의하기', href: '/contact' },
] as const

export const STRENGTHS = [
  {
    title: '24시간 운영',
    description: '연중무휴 24시간 상담 가능',
    icon: 'Clock',
  },
  {
    title: '3분 입금',
    description: '업계 최고 속도 입금',
    icon: 'Zap',
  },
  {
    title: '최저 수수료',
    description: '업계 최저 수수료 보장',
    icon: 'BadgePercent',
  },
  {
    title: '안전 거래',
    description: '검증된 안전한 거래 시스템',
    icon: 'Shield',
  },
] as const

export const FAQ_ITEMS = [
  {
    question: '카드 현금화란 무엇인가요?',
    answer: '카드 현금화는 신용카드의 결제 한도를 활용하여 현금을 확보하는 합법적인 금융 서비스입니다. 세리카드는 안전하고 투명한 절차로 서비스를 제공합니다.',
  },
  {
    question: '이용 가능한 카드는 어떤 것이 있나요?',
    answer: '국민, 신한, 롯데, 외환, 하나, 현대, 삼성, BC, 농협, 우리 카드 등 대부분의 신용카드를 이용하실 수 있습니다.',
  },
  {
    question: '입금까지 얼마나 걸리나요?',
    answer: '본인 확인 및 결제 완료 후 최대 3분 이내에 입금됩니다. 세리카드는 업계 최고 수준의 빠른 처리 속도를 자랑합니다.',
  },
  {
    question: '수수료는 얼마인가요?',
    answer: '세리카드는 업계 최저 수수료를 제공합니다. 정확한 수수료는 상담을 통해 안내받으실 수 있습니다.',
  },
  {
    question: '상담 가능 시간은 언제인가요?',
    answer: '세리카드는 24시간 365일 운영됩니다. 언제든지 전화 주시면 친절하게 상담해 드립니다.',
  },
] as const
