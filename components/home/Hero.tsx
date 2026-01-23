import { MessageCircle, Phone, Clock, Zap, Shield } from 'lucide-react'
import { SITE_CONFIG, SERVICE_INFO } from '@/lib/constants'
import Container from '@/components/common/Container'

export default function Hero() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>{SERVICE_INFO.operatingHours} 상담 가능</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            신용카드 현금화
            <br />
            <span className="text-primary-200">3분 안에 입금</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg lg:text-xl text-primary-100 max-w-2xl mx-auto">
            업계 최저 수수료, 24시간 365일 운영
            <br className="hidden sm:block" />
            세리카드와 함께라면 안전하고 빠릅니다
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE_CONFIG.phoneSms}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 font-bold text-xl rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <MessageCircle className="w-6 h-6" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
            <a
              href={SITE_CONFIG.phoneTel}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-700 text-white font-bold text-xl rounded-xl hover:bg-primary-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <Phone className="w-6 h-6" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
          <p className="mt-4 text-primary-200 text-sm">
            문자 또는 전화 한 통이면 끝! 지금 바로 상담하세요
          </p>

          {/* Trust Badges */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <Clock className="w-6 h-6 text-primary-200" />
              <span className="text-white font-semibold">24시간</span>
              <span className="text-primary-200 text-sm">연중무휴</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <Zap className="w-6 h-6 text-primary-200" />
              <span className="text-white font-semibold">3분 입금</span>
              <span className="text-primary-200 text-sm">빠른 처리</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <Shield className="w-6 h-6 text-primary-200" />
              <span className="text-white font-semibold">안전 거래</span>
              <span className="text-primary-200 text-sm">검증된 시스템</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <span className="text-2xl font-bold text-primary-200">%</span>
              <span className="text-white font-semibold">최저 수수료</span>
              <span className="text-primary-200 text-sm">업계 최저</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
