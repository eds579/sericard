import { Metadata } from 'next'
import HubHero from '@/components/hub/HubHero'
import Definition from '@/components/hub/Definition'
import Benefits from '@/components/hub/Benefits'
import CardList from '@/components/hub/CardList'
import Process from '@/components/home/Process'
import Safety from '@/components/hub/Safety'
import RelatedPosts from '@/components/hub/RelatedPosts'
import CTASection from '@/components/common/CTASection'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: '카드 현금화 | 신용카드 현금화 방법 총정리 - 세리카드',
  description: '카드 현금화란? 신용카드 현금화의 모든 것을 알려드립니다. 안전한 이용 방법, 수수료, 주의사항까지 세리카드에서 확인하세요. 24시간 365일 상담 가능.',
  keywords: ['카드 현금화', '신용카드 현금화', '카드 현금화 방법', '카드 현금화 수수료', '안전한 카드 현금화'],
  alternates: {
    canonical: `${SITE_CONFIG.url}/card-cashout`,
  },
  openGraph: {
    title: '카드 현금화 | 신용카드 현금화 방법 총정리 - 세리카드',
    description: '카드 현금화란? 신용카드 현금화의 모든 것을 알려드립니다. 안전한 이용 방법, 수수료, 주의사항까지.',
    url: `${SITE_CONFIG.url}/card-cashout`,
  },
}

export default function CardCashoutPage() {
  return (
    <>
      <HubHero />
      <Definition />
      <Benefits />
      <CardList />
      <Process />
      <Safety />
      <RelatedPosts />
      <CTASection
        title="카드 현금화, 세리카드와 함께하세요"
        subtitle="24시간 365일 친절하게 상담해 드립니다"
      />
    </>
  )
}
