import { CreditCard, Banknote, ArrowRight } from 'lucide-react'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'

export default function Definition() {
  return (
    <Section>
      <Container>
        <SectionTitle
          title="카드 현금화란 무엇인가요?"
          subtitle="신용카드 현금화의 개념과 원리를 쉽게 설명해 드립니다"
        />

        <div className="max-w-4xl mx-auto">
          {/* Main Definition */}
          <div className="bg-primary-50 rounded-2xl p-8 lg:p-12 mb-12">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              <strong className="text-primary-600">카드 현금화</strong>란 신용카드의 결제 한도를 활용하여
              현금을 확보하는 금융 서비스입니다. 급하게 현금이 필요할 때, 복잡한 대출 심사 없이
              신용카드만으로 빠르게 현금을 마련할 수 있습니다.
            </p>
          </div>

          {/* Visual Explanation */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-12 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mb-4">
                <CreditCard className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900">신용카드 결제</h3>
              <p className="text-gray-600 text-sm mt-1">카드 한도 내 결제</p>
            </div>

            <ArrowRight className="w-8 h-8 text-primary-400 rotate-90 md:rotate-0" />

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                <Banknote className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900">현금 입금</h3>
              <p className="text-gray-600 text-sm mt-1">3분 이내 입금</p>
            </div>
          </div>

          {/* Key Points */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">신용카드 현금화의 특징</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>별도의 대출 심사가 필요 없습니다</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>신용카드 한도 내에서 이용 가능합니다</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>빠른 처리로 급한 자금 필요 시 유용합니다</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">이런 분들께 추천합니다</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>급하게 현금이 필요하신 분</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>대출 심사가 어려우신 분</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>빠른 처리를 원하시는 분</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
