import Link from 'next/link'
import { CreditCard } from 'lucide-react'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import { CARD_COMPANIES } from '@/lib/constants'

export default function CardList() {
  return (
    <Section>
      <Container>
        <SectionTitle
          title="이용 가능한 카드사"
          subtitle="대부분의 신용카드를 이용하실 수 있습니다"
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:gap-6">
            {CARD_COMPANIES.map((card, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-primary-300 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CreditCard className="w-6 h-6 text-gray-600" />
                </div>
                <span className="text-gray-900 font-semibold">{card.name}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-gray-500">
            위 카드사 외에도 대부분의 신용카드를 이용하실 수 있습니다.
            <br />
            자세한 내용은 전화 상담을 통해 확인해 주세요.
          </p>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-3">카드사별 카드깡 이용 안내</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/blog/card-cashout/신한카드깡" className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-primary-300 hover:text-primary-600 transition-colors">
                신한카드 카드깡 이용 가이드
              </Link>
              <Link href="/blog/card-cashout/삼성카드깡" className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-primary-300 hover:text-primary-600 transition-colors">
                삼성카드 카드깡 이용 가이드
              </Link>
              <Link href="/blog/card-cashout/국민카드깡" className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-primary-300 hover:text-primary-600 transition-colors">
                국민카드 카드깡 이용 가이드
              </Link>
              <Link href="/blog/card-cashout/현대카드깡" className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-primary-300 hover:text-primary-600 transition-colors">
                현대카드 카드깡 이용 가이드
              </Link>
              <Link href="/blog/card-cashout/우리카드깡" className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-primary-300 hover:text-primary-600 transition-colors">
                우리카드 카드깡 이용 가이드
              </Link>
              <Link href="/blog/card-cashout/농협카드깡" className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-primary-300 hover:text-primary-600 transition-colors">
                농협카드 카드깡 이용 가이드
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
