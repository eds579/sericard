import { Shield, CheckCircle, AlertTriangle } from 'lucide-react'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'

const safetyTips = [
  '선입금을 요구하는 업체는 피하세요',
  '과도한 개인정보를 요구하는 업체는 주의하세요',
  '비정상적으로 낮은 수수료를 제시하는 업체는 의심하세요',
  '거래 전 수수료와 절차를 명확히 확인하세요',
]

export default function Safety() {
  return (
    <Section bgColor="gray">
      <Container>
        <SectionTitle
          title="안전한 카드 현금화를 위한 가이드"
          subtitle="세리카드와 함께 안전하게 이용하세요"
        />

        <div className="max-w-4xl mx-auto">
          {/* Safety Promise */}
          <div className="bg-primary-600 rounded-2xl p-8 lg:p-10 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  세리카드의 약속
                </h3>
                <p className="text-primary-100 leading-relaxed">
                  세리카드는 선입금을 절대 요구하지 않습니다. 투명한 수수료 안내와
                  안전한 거래 절차로 고객님의 신뢰에 보답합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Safety Tips */}
          <div className="bg-white rounded-2xl p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-yellow-500" />
              <h3 className="text-xl font-bold text-gray-900">
                안전한 이용을 위한 체크리스트
              </h3>
            </div>

            <div className="space-y-4">
              {safetyTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
