import Link from 'next/link'
import { CreditCard, Banknote, ArrowRight } from 'lucide-react'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'

export default function Definition() {
  return (
    <Section>
      <Container>
        <SectionTitle
          title="카드깡이란 무엇인가요?"
          subtitle="카드깡의 개념과 원리를 쉽게 설명해 드립니다"
        />

        <div className="max-w-4xl mx-auto">
          {/* Main Definition */}
          <div className="bg-primary-50 rounded-2xl p-8 lg:p-12 mb-12">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              <strong className="text-primary-600">카드깡</strong>이란 신용카드의 결제 한도를 활용하여
              현금을 확보하는 서비스로, 카드현금화 또는 신용카드 현금화라고도 합니다. 급전이 필요하거나
              비상금을 마련해야 할 때, 복잡한 대출 심사 없이 신용카드만으로 당일 빠르게 현금을 확보할 수 있습니다.
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

          {/* H3: 원리와 구조 */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">카드깡의 원리와 구조</h3>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-gray-700 leading-relaxed">
              <p className="mb-3">
                세리카드가 다년간의 운영 경험을 통해 가장 많이 받는 질문이 &quot;카드깡이 정확히 어떤 구조인가요?&quot;입니다.
                카드깡은 신용카드의 쇼핑 한도를 활용하는 방식입니다. 현금서비스처럼 카드사에서 직접 돈을 빌리는 것이
                아니라, 카드 결제를 통해 현금을 확보하는 구조입니다. 카드현금화, 신용카드현금화라고도 불리며,
                별도의 대출 심사 없이 카드 한도 내에서 자유롭게 이용할 수 있다는 것이 가장 큰 장점입니다.
              </p>
              <p className="text-sm text-gray-500">
                카드깡의 뜻과 개념에 대해 더 자세히 알고 싶다면{' '}
                <Link href="/blog/card-cashout/카드깡이란" className="text-primary-600 hover:underline">카드깡이란? 뜻과 개념 완벽 정리</Link>를 참고하세요.
                신용카드 현금화의 구조와 원리가 궁금하시다면{' '}
                <Link href="/blog/card-cashout/신용카드현금화-뜻" className="text-primary-600 hover:underline">신용카드 현금화 뜻과 구조 총정리</Link>에서 확인하실 수 있습니다.
              </p>
            </div>
          </div>

          {/* H3: 현금서비스와 차이점 */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">카드깡과 현금서비스의 차이점</h3>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed mb-6">
                카드깡과 현금서비스는 모두 신용카드를 활용해 현금을 마련하는 방법이지만, 구조와 조건에서 차이가 있습니다.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-3 font-semibold text-gray-700 rounded-tl-lg">구분</th>
                      <th className="text-center p-3 font-semibold text-primary-600">카드깡</th>
                      <th className="text-center p-3 font-semibold text-gray-700 rounded-tr-lg">현금서비스</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="p-3 text-gray-600">심사</td>
                      <td className="p-3 text-center text-gray-800">별도 심사 없음</td>
                      <td className="p-3 text-center text-gray-800">카드사 심사 필요</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-3 text-gray-600">활용 한도</td>
                      <td className="p-3 text-center text-gray-800">쇼핑 한도</td>
                      <td className="p-3 text-center text-gray-800">현금서비스 한도 (별도)</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-gray-600">이자/비용</td>
                      <td className="p-3 text-center text-gray-800">수수료 1회 부담</td>
                      <td className="p-3 text-center text-gray-800">연 15~20% 이자 발생</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-3 text-gray-600">신용등급 영향</td>
                      <td className="p-3 text-center text-gray-800">직접적인 영향 없음</td>
                      <td className="p-3 text-center text-gray-800">이용 기록이 남을 수 있음</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-gray-600">입금 속도</td>
                      <td className="p-3 text-center text-gray-800">최대 3분 이내</td>
                      <td className="p-3 text-center text-gray-800">즉시~1영업일</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                두 서비스의 장단점에 대한 상세 비교는{' '}
                <Link href="/blog/card-cashout/카드깡-vs-현금서비스" className="text-primary-600 hover:underline">카드깡 vs 현금서비스: 어떤 게 유리할까?</Link>에서 확인하실 수 있습니다.
              </p>
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
                  <span>급전이 필요하거나 비상금을 마련해야 하는 분</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>대출 심사가 어렵거나 한도가 부족한 분</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>당일 빠른 처리를 원하시는 분</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
