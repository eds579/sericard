import { Clock, Zap, BadgePercent, Shield, LucideIcon } from 'lucide-react'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'

const iconMap: Record<string, LucideIcon> = {
  Clock,
  Zap,
  BadgePercent,
  Shield,
}

const strengths = [
  {
    title: '24시간 365일',
    description: '언제든지 상담 가능합니다. 주말, 공휴일 관계없이 항상 열려있습니다.',
    icon: 'Clock',
    color: 'bg-blue-500',
  },
  {
    title: '3분 안에 입금',
    description: '업계 최고 속도! 본인 확인 후 최대 3분 이내 입금해 드립니다.',
    icon: 'Zap',
    color: 'bg-yellow-500',
  },
  {
    title: '최저 수수료',
    description: '투명하고 합리적인 수수료. 숨겨진 비용 없이 명확하게 안내합니다.',
    icon: 'BadgePercent',
    color: 'bg-green-500',
  },
  {
    title: '안전한 거래',
    description: '검증된 시스템으로 안전하게 거래합니다. 개인정보 보호를 철저히 합니다.',
    icon: 'Shield',
    color: 'bg-purple-500',
  },
]

export default function Strengths() {
  return (
    <Section bgColor="gray">
      <Container>
        <SectionTitle
          title="왜 세리카드인가요?"
          subtitle="고객님께 최고의 서비스를 약속드립니다"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {strengths.map((item, index) => {
            const Icon = iconMap[item.icon]
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
