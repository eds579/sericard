import Link from 'next/link'
import { Phone, UserCheck, CreditCard, Banknote, LucideIcon } from 'lucide-react'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import { PROCESS_STEPS } from '@/lib/constants'

const iconMap: Record<string, LucideIcon> = {
  Phone,
  UserCheck,
  CreditCard,
  Banknote,
}

export default function Process({ showLinks = false }: { showLinks?: boolean }) {
  return (
    <Section bgColor="gray">
      <Container>
        <SectionTitle
          title="간편한 4단계 이용 절차"
          subtitle="복잡한 절차 없이 빠르게 진행됩니다"
        />

        <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
          {PROCESS_STEPS.map((item, index) => {
            const Icon = iconMap[item.icon]
            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-sm w-full sm:w-[calc(50%-12px)] lg:w-[225px]"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-6 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>

                {/* Arrow for Desktop */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                    <div className="w-4 h-4 border-t-2 border-r-2 border-primary-300 rotate-45"></div>
                  </div>
                )}

                <div className="mt-4">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="inline-flex items-center gap-2 px-6 py-3 bg-primary-100 text-primary-700 rounded-full font-medium">
            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
            전체 과정 최대 3분 소요
          </p>
        </div>

        {showLinks && (
          <div className="mt-8 text-center text-sm text-gray-500 space-y-1">
            <p>
              카드깡 이용 방법을 더 자세히 알고 싶다면{' '}
              <Link href="/blog/card-cashout/카드깡-하는법" className="text-primary-600 hover:underline">카드깡 하는법: 초보자를 위한 단계별 가이드</Link>를 참고하세요.
            </p>
            <p>
              다양한 카드현금화방법이 궁금하시다면{' '}
              <Link href="/blog/card-cashout/카드현금화-방법" className="text-primary-600 hover:underline">카드 현금화 방법 5가지 총정리</Link>에서 확인하실 수 있습니다.
            </p>
          </div>
        )}
      </Container>
    </Section>
  )
}
