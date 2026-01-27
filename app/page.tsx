import Hero from '@/components/home/Hero'
import Strengths from '@/components/home/Strengths'
import Service from '@/components/home/Service'
import Process from '@/components/home/Process'
import Notice from '@/components/home/Notice'
import LiveStatus from '@/components/home/LiveStatus'
import StatsReviews from '@/components/home/StatsReviews'
import FAQ from '@/components/home/FAQ'
import CTASection from '@/components/common/CTASection'
import { HomePageJsonLd } from '@/components/seo/JsonLd'

export default function HomePage() {
  return (
    <>
      <HomePageJsonLd />
      <Hero />
      <Strengths />
      <Service />
      <Process />
      <Notice />
      <LiveStatus />
      <StatsReviews />
      <FAQ />
      <CTASection />
    </>
  )
}
