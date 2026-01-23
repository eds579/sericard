import { Phone, MessageCircle } from 'lucide-react'
import { SITE_CONFIG, SERVICE_INFO } from '@/lib/constants'
import Container from './Container'

type CTASectionProps = {
  title?: string
  subtitle?: string
}

export default function CTASection({
  title = '지금 바로 상담받으세요',
  subtitle = '24시간 365일 친절하게 상담해 드립니다'
}: CTASectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-primary-600">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            {title}
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE_CONFIG.phoneSms}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 font-bold text-xl rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
            <a
              href={SITE_CONFIG.phoneTel}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-700 text-white font-bold text-xl rounded-xl hover:bg-primary-800 transition-colors shadow-lg"
            >
              <Phone className="w-6 h-6" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-primary-100">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              {SERVICE_INFO.operatingHours}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              {SERVICE_INFO.depositTime} 입금
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              {SERVICE_INFO.feePolicy}
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}
