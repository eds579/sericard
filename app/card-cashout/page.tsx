import HubHero from '@/components/hub/HubHero'
import Definition from '@/components/hub/Definition'
import Benefits from '@/components/hub/Benefits'
import CardList from '@/components/hub/CardList'
import Process from '@/components/home/Process'
import Safety from '@/components/hub/Safety'
import RelatedPosts from '@/components/hub/RelatedPosts'
import CTASection from '@/components/common/CTASection'
import { HubPageJsonLd } from '@/components/seo/JsonLd'
import { generatePageMetadata } from '@/lib/metadata'
import { PAGE_META } from '@/lib/pages'

export const metadata = generatePageMetadata(PAGE_META.cardCashout)

export default function CardCashoutPage() {
  return (
    <>
      <HubPageJsonLd />
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
