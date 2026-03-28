import Link from 'next/link'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'

export default function Caution() {
  return (
    <Section bgColor="gray">
      <Container>
        <SectionTitle
          title="카드깡 이용 시 주의사항"
          subtitle="안전한 이용을 위해 꼭 확인하세요"
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* 안전한 업체 선택 기준 */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">안전한 업체 선택 기준</h3>
            <div className="bg-white rounded-xl p-6 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                카드깡을 안전하게 이용하려면 카드깡업체(신용카드 현금화 업체) 선택이 가장 중요합니다.
                세리카드가 수많은 상담 경험을 통해 정리한 3가지 핵심 기준만 확인해도 대부분의 위험을 피할 수 있습니다.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">선입금 요구 여부</p>
                    <p className="text-gray-600 text-sm leading-relaxed">어떤 명목이든 선입금을 요구하는 업체는 사기입니다. 수수료, 보증금, 인증 비용 등 명목과 관계없이 먼저 돈을 보내라고 하면 이용하지 마세요.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">수수료 투명성</p>
                    <p className="text-gray-600 text-sm leading-relaxed">상담 단계에서 정확한 수수료와 실제 입금액을 명확하게 안내하는 업체를 선택하세요. 수수료가 불분명하거나 나중에 추가 비용을 요구할 수 있는 곳은 피해야 합니다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">상담 품질과 연락 가능성</p>
                    <p className="text-gray-600 text-sm leading-relaxed">전화 상담이 친절하고 구체적인 업체, 그리고 이용 후에도 연락이 되는 업체가 신뢰할 수 있습니다.</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 pt-2">
                더 자세한 업체 선택 기준은{' '}
                <Link href="/blog/card-cashout/카드깡-업체" className="text-primary-600 hover:underline">카드깡 업체 선택 가이드</Link>에서 확인하세요.
                카드깡 사기 유형과 예방법이 궁금하시다면{' '}
                <Link href="/blog/card-cashout/카드깡-사기" className="text-primary-600 hover:underline">카드깡 사기 유형과 예방법 총정리</Link>를 참고하시고,
                이용 전{' '}
                <Link href="/blog/card-cashout/카드깡-안전" className="text-primary-600 hover:underline">카드깡 안전하게 이용하는 5가지 체크리스트</Link>도 함께 확인해 보시는 것을 권장합니다.
              </p>
            </div>
          </div>

          {/* 신용등급에 미치는 영향 */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">신용등급에 미치는 영향</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed mb-3">
                카드깡은 신용등급에 직접적인 영향을 미치지 않습니다. 현금서비스와 달리 카드사의 현금 대출 기록이 남지 않기 때문입니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                다만 카드 대금을 연체하거나, 카드 한도를 과도하게 사용하면 신용등급에 간접적인 영향을 줄 수 있으므로
                무리하지 않는 범위에서 이용하는 것이 중요합니다.
              </p>
              <p className="text-sm text-gray-500">
                카드깡과 신용등급의 관계에 대한 상세 내용은{' '}
                <Link href="/blog/card-cashout/카드깡-신용등급" className="text-primary-600 hover:underline">카드깡이 신용등급에 미치는 영향</Link>에서 확인하실 수 있습니다.
              </p>
            </div>
          </div>

          {/* 법적 사항 안내 */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">법적 사항 안내</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed mb-3">
                카드깡 관련 법적 규제는 <strong>불법으로 운영되는 업체</strong>를 대상으로 합니다.
                조직적으로 허위 매출을 발생시키거나, 가맹점 명의를 불법 대여하는 업체가 처벌 대상이며,
                서비스를 이용하는 개인이 처벌받는 사례는 현실적으로 거의 없습니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                안전하게 이용하기 위해서는 합법적인 절차로 운영되는 신뢰할 수 있는 업체를 선택하는 것이 가장 중요합니다.
                세리카드는 투명한 절차와 안전한 시스템으로 서비스를 운영하며, 고객님의 개인정보 보호를 철저히 지키고 있습니다.
              </p>
              <p className="text-sm text-gray-500">
                법적 사항에 대해 더 알고 싶다면{' '}
                <Link href="/blog/card-cashout/카드깡-불법" className="text-primary-600 hover:underline">카드깡 불법인가요? 이용자가 알아야 할 법적 사항</Link>과{' '}
                <Link href="/blog/card-cashout/카드깡-처벌" className="text-primary-600 hover:underline">카드깡 처벌 사례와 법적 리스크 정리</Link>를 참고하세요.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
