import Link from 'next/link'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'

export default function Fee() {
  return (
    <Section>
      <Container>
        <SectionTitle
          title="카드깡 수수료 안내"
          subtitle="투명하고 합리적인 수수료를 안내해 드립니다"
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* 수수료 결정 요소 */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">수수료 결정 요소</h3>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed mb-6">
                일반적인 카드깡수수료는 <strong>10~13% 수준</strong>이며, 아래 요소에 따라 달라질 수 있습니다.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-3 font-semibold text-gray-700 rounded-tl-lg w-1/3">요소</th>
                      <th className="text-left p-3 font-semibold text-gray-700 rounded-tr-lg">설명</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="p-3 text-gray-600">카드 종류</td>
                      <td className="p-3 text-gray-800">카드사 및 카드 등급에 따라 차이</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-3 text-gray-600">결제 금액</td>
                      <td className="p-3 text-gray-800">금액 구간에 따라 수수료율 변동</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-gray-600">이용 시간대</td>
                      <td className="p-3 text-gray-800">영업시간, 주말/공휴일 등</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 leading-relaxed">
                세리카드는 이 범위 내에서도 업계 최저 수수료를 제공하며, 상담 시 고객님의 조건에 맞는 정확한
                카드현금화 수수료를 사전에 안내해 드립니다. 숨겨진 비용 없이 투명하게 안내하는 것이 세리카드의 원칙입니다.
              </p>
            </div>
          </div>

          {/* 수수료를 낮추는 방법 */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">수수료를 낮추는 방법</h3>
            <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                카드깡 수수료를 절약하기 위해 알아두면 좋은 팁을 안내해 드립니다.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">금액 구간 확인하기</p>
                    <p className="text-gray-600 text-sm leading-relaxed">일반적으로 결제 금액이 클수록 수수료율이 낮아지는 경향이 있습니다. 상담 시 금액 구간별 수수료를 미리 확인해 보세요.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">수수료 사전 비교하기</p>
                    <p className="text-gray-600 text-sm leading-relaxed">여러 카드깡업체의 수수료를 비교한 뒤 이용하면 불필요한 비용을 줄일 수 있습니다. 단, 비정상적으로 낮은 수수료를 제시하는 업체는 추가 비용을 나중에 요구할 수 있으니 주의가 필요합니다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">신뢰할 수 있는 업체 이용하기</p>
                    <p className="text-gray-600 text-sm leading-relaxed">수수료뿐 아니라 안전성, 처리 속도, 투명한 안내를 종합적으로 고려하여 업체를 선택하는 것이 중요합니다.</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 pt-2">
                카드깡 수수료의 시세와 절약법에 대한 더 자세한 내용은{' '}
                <Link href="/blog/card-cashout/카드깡-수수료" className="text-primary-600 hover:underline">카드깡 수수료 2026년 시세 총정리</Link>에서 확인하실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
