import { Shield, Users, Clock, Award } from 'lucide-react'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import CTASection from '@/components/common/CTASection'
import { AboutPageJsonLd } from '@/components/seo/JsonLd'
import { generatePageMetadata } from '@/lib/metadata'
import { PAGE_META } from '@/lib/pages'

export const metadata = generatePageMetadata(PAGE_META.aboutUs)

const values = [
  {
    icon: Shield,
    title: '신뢰',
    description: '고객님의 신뢰를 최우선으로 생각합니다. 투명한 거래와 정직한 서비스를 약속드립니다.',
  },
  {
    icon: Users,
    title: '고객 중심',
    description: '고객님의 입장에서 생각하고 행동합니다. 친절하고 신속한 서비스를 제공합니다.',
  },
  {
    icon: Clock,
    title: '신속',
    description: '급한 자금이 필요할 때 빠르게 도움드립니다. 최대 3분 이내 입금을 약속합니다.',
  },
  {
    icon: Award,
    title: '전문성',
    description: '오랜 경험과 노하우를 바탕으로 최고의 서비스를 제공합니다.',
  },
]

export default function AboutUsPage() {
  return (
    <>
      <AboutPageJsonLd />
      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              세리카드 소개
            </h1>
            <p className="mt-6 text-lg text-primary-100 leading-relaxed">
              고객 신뢰를 최우선으로 하는 카드 현금화 전문 서비스입니다.
              <br className="hidden sm:block" />
              빠르고 안전한 서비스로 고객님의 금전적 어려움을 해결해 드립니다.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="우리의 미션"
              subtitle="세리카드가 추구하는 가치"
            />
            <p className="text-lg text-gray-600 leading-relaxed">
              세리카드는 급하게 현금이 필요한 분들에게 빠르고 안전한 서비스를 제공하여
              금전적 어려움을 해결해 드리는 것을 미션으로 합니다.
              <br /><br />
              복잡한 절차 없이, 신뢰할 수 있는 파트너로서
              고객님의 곁에서 함께하겠습니다.
            </p>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section bgColor="gray">
        <Container>
          <SectionTitle
            title="핵심 가치"
            subtitle="세리카드가 중요하게 생각하는 것들"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 lg:p-8 text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Promise */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-primary-600 rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                세리카드의 약속
              </h2>
              <p className="text-primary-100 text-lg leading-relaxed">
                세리카드는 선입금을 절대 요구하지 않습니다.
                <br />
                투명한 수수료 안내와 안전한 거래로 고객님의 신뢰에 보답합니다.
                <br />
                24시간 365일, 언제나 고객님 곁에 있겠습니다.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
