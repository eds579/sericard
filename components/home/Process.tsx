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

export default function Process() {
  return (
    <Section bgColor="gray">
      <Container>
        <SectionTitle
          title="간편한 4단계 이용 절차"
          subtitle="복잡한 절차 없이 빠르게 진행됩니다"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {PROCESS_STEPS.map((item, index) => {
            const Icon = iconMap[item.icon]
            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-sm"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-6 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>

                {/* Arrow for Desktop */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
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
      </Container>
    </Section>
  )
}
