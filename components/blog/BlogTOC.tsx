'use client'

import { useEffect, useState } from 'react'
import { List } from 'lucide-react'
import type { Heading } from '@/lib/blog'

type BlogTOCProps = {
  headings: Heading[]
}

export default function BlogTOC({ headings }: BlogTOCProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0,
      }
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [headings])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  if (headings.length === 0) {
    return null
  }

  return (
    <nav className="fixed top-32 right-8 xl:right-[calc((100vw-1280px)/2+16px)] w-64 p-4 bg-gray-50 rounded-xl border border-gray-100 max-h-[calc(100vh-160px)] overflow-y-auto">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
        <List className="w-5 h-5 text-gray-600" />
        <span className="font-semibold text-gray-900">목차</span>
      </div>

      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
          >
            <button
              onClick={() => handleClick(heading.id)}
              className={`text-left text-sm transition-colors hover:text-primary-600 ${
                activeId === heading.id
                  ? 'text-primary-600 font-medium'
                  : 'text-gray-600'
              }`}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
