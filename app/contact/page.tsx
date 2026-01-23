import { Metadata } from 'next'
import { Phone, Clock, MessageCircle, MapPin } from 'lucide-react'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import { SITE_CONFIG, SERVICE_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '문의하기 - 세리카드',
  description: '세리카드 문의하기. 24시간 365일 상담 가능합니다. 전화: 010-7715-1404. 카드 현금화 관련 문의를 친절하게 안내해 드립니다.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
}

const contactInfo = [
  {
    icon: Phone,
    title: '전화 상담',
    content: SITE_CONFIG.phoneDisplay,
    description: '전화로 바로 상담받으세요',
    action: {
      label: '전화하기',
      href: SITE_CONFIG.phoneTel,
    },
  },
  {
    icon: Clock,
    title: '상담 가능 시간',
    content: SERVICE_INFO.operatingHours,
    description: '연중무휴 상담 가능합니다',
    action: null,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              문의하기
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              궁금한 점이 있으시면 언제든지 연락 주세요.
              <br className="hidden sm:block" />
              24시간 365일 친절하게 상담해 드립니다.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Info */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl p-8"
                  >
                    <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary-600" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                      {info.title}
                    </h2>
                    <p className="text-2xl font-bold text-primary-600 mb-2">
                      {info.content}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {info.description}
                    </p>
                    {info.action && (
                      <a
                        href={info.action.href}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        {info.action.label}
                      </a>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Main CTA */}
            <div className="bg-primary-600 rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                지금 바로 상담받으세요
              </h2>
              <p className="text-primary-100 mb-8">
                문자 또는 전화 한 통이면 됩니다. 친절하게 안내해 드립니다.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={SITE_CONFIG.phoneSms}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary-600 font-bold text-2xl rounded-xl hover:bg-gray-100 transition-colors shadow-xl"
                >
                  <MessageCircle className="w-8 h-8" />
                  {SITE_CONFIG.phoneDisplay}
                </a>
                <a
                  href={SITE_CONFIG.phoneTel}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-primary-700 text-white font-bold text-2xl rounded-xl hover:bg-primary-800 transition-colors shadow-xl"
                >
                  <Phone className="w-8 h-8" />
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-primary-100">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  {SERVICE_INFO.operatingHours}
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  {SERVICE_INFO.depositTime} 입금
                </span>
              </div>
            </div>

            {/* Notice */}
            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <p className="text-yellow-800 text-center">
                <strong>안내:</strong> 세리카드는 선입금을 절대 요구하지 않습니다.
                선입금을 요구하는 경우 사기를 의심하시고 즉시 상담을 종료해 주세요.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
