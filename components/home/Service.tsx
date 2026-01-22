import { CreditCard, Banknote, CheckCircle } from 'lucide-react'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'

const features = [
  '모든 신용카드 이용 가능',
  '간편한 4단계 절차',
  '수수료 사전 안내',
  '안전한 거래 보장',
]

export default function Service() {
  return (
    <Section>
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <SectionTitle
              title="신용카드 현금화 서비스"
              subtitle="세리카드는 신용카드 한도를 활용하여 현금을 확보할 수 있는 서비스를 제공합니다"
              align="left"
            />

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-gray-600 leading-relaxed">
              급하게 현금이 필요할 때, 복잡한 대출 심사 없이 신용카드만 있으면 됩니다.
              세리카드는 빠르고 안전한 처리로 고객님의 금전적 어려움을 해결해 드립니다.
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-3xl p-8 lg:p-12">
              <div className="flex items-center justify-center gap-8">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <CreditCard className="w-12 h-12 text-primary-600" />
                  </div>
                  <span className="text-gray-700 font-medium">신용카드</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  </div>
                  <span className="text-primary-600 font-bold text-lg">3분</span>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <Banknote className="w-12 h-12 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">현금 입금</span>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-200 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
