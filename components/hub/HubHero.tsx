import { Phone, MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'
import Container from '@/components/common/Container'

export default function HubHero() {
  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            카드깡이란?
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-gray-300 leading-relaxed">
            카드깡에 대한 모든 것을 알려드립니다.
            <br className="hidden sm:block" />
            안전하고 빠른 신용카드현금화, 세리카드와 함께하세요.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE_CONFIG.phoneSms}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white font-bold text-xl rounded-xl hover:bg-primary-700 transition-all shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
            <a
              href={SITE_CONFIG.phoneTel}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-700 text-white font-bold text-xl rounded-xl hover:bg-gray-600 transition-all shadow-xl"
            >
              <Phone className="w-6 h-6" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
