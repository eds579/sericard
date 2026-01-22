'use client'

import { Phone } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      <a
        href={SITE_CONFIG.phoneTel}
        className="flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors animate-pulse hover:animate-none"
        aria-label="전화 상담"
      >
        <Phone className="w-7 h-7" />
      </a>
    </div>
  )
}
