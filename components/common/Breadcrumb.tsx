import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

export type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbProps = {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1 text-sm text-gray-500 mb-6 overflow-x-auto">
      {/* 홈 */}
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-primary-600 transition-colors flex-shrink-0"
      >
        <Home className="w-4 h-4" />
        <span className="sr-only">홈</span>
      </Link>

      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1 flex-shrink-0">
          <ChevronRight className="w-4 h-4 text-gray-300" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-primary-600 transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium whitespace-nowrap">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
