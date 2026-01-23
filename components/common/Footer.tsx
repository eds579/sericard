import Link from 'next/link'
import { Phone, MessageCircle } from 'lucide-react'
import { SITE_CONFIG, NAV_ITEMS, SERVICE_INFO } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-white">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              {SITE_CONFIG.description}
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={SITE_CONFIG.phoneSms}
                className="inline-flex items-center gap-2 text-xl font-bold text-white hover:text-primary-400 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={SITE_CONFIG.phoneTel}
                className="flex items-center gap-2 text-xl font-bold text-white hover:text-primary-400 transition-colors"
              >
                <Phone className="w-6 h-6" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>
              <p className="text-sm text-gray-400">
                {SERVICE_INFO.operatingHours} 상담 가능
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">바로가기</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">서비스 안내</h3>
            <ul className="space-y-3 text-gray-400">
              <li>운영시간: {SERVICE_INFO.operatingHours}</li>
              <li>입금시간: {SERVICE_INFO.depositTime}</li>
              <li>수수료: {SERVICE_INFO.feePolicy}</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
