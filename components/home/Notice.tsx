import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'

const safetyChecks = [
  '정확한 수수료 사전 안내',
  '선입금 절대 요구 없음',
  '개인정보 수집 최소화',
  '투명한 거래 절차',
]

const warnings = [
  '선입금을 요구하는 업체',
  '과도한 개인정보 요구',
  '비정상적으로 낮은 수수료',
  '연락 두절 또는 불명확한 안내',
]

export default function Notice() {
  return (
    <Section>
      <Container>
        <SectionTitle
          title="안전한 거래를 위한 안내"
          subtitle="세리카드는 고객님의 안전한 거래를 최우선으로 합니다"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Safe Signs */}
          <div className="bg-green-50 rounded-2xl p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                세리카드 안전 거래 원칙
              </h3>
            </div>
            <ul className="space-y-4">
              {safetyChecks.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Warning Signs */}
          <div className="bg-red-50 rounded-2xl p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                이런 업체는 주의하세요
              </h3>
            </div>
            <ul className="space-y-4">
              {warnings.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 bg-primary-600 rounded-2xl p-6 lg:p-8 text-center">
          <p className="text-white text-lg font-medium">
            세리카드는 <span className="font-bold">선입금을 절대 요구하지 않습니다.</span>
            <br className="hidden sm:block" />
            안전하고 투명한 거래를 약속드립니다.
          </p>
        </div>
      </Container>
    </Section>
  )
}
