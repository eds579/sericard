import { Zap, Clock, Shield, BadgePercent, Headphones, FileCheck } from 'lucide-react'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'

const benefits = [
  {
    icon: Zap,
    title: '빠른 처리 속도',
    description: '복잡한 서류 없이 간단한 절차로 최대 3분 이내 입금됩니다.',
  },
  {
    icon: Clock,
    title: '24시간 이용 가능',
    description: '주말, 공휴일 관계없이 언제든지 상담 및 이용이 가능합니다.',
  },
  {
    icon: Shield,
    title: '안전한 거래',
    description: '검증된 시스템으로 안전하게 거래하며, 개인정보를 철저히 보호합니다.',
  },
  {
    icon: BadgePercent,
    title: '합리적인 수수료',
    description: '업계 최저 수수료를 제공하며, 숨겨진 비용이 없습니다.',
  },
  {
    icon: Headphones,
    title: '친절한 상담',
    description: '전문 상담원이 친절하고 자세하게 안내해 드립니다.',
  },
  {
    icon: FileCheck,
    title: '간편한 절차',
    description: '복잡한 서류 없이 전화 한 통으로 간편하게 진행됩니다.',
  },
]

export default function Benefits() {
  return (
    <Section bgColor="gray">
      <Container>
        <SectionTitle
          title="세리카드 카드 현금화의 장점"
          subtitle="왜 세리카드를 선택해야 할까요?"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
