'use client'

import { useEffect, useState, useRef } from 'react'
import { Star, Quote } from 'lucide-react'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'

const stats = [
  { label: '누적 상담', value: 50000, suffix: '건+', prefix: '' },
  { label: '고객 만족도', value: 98, suffix: '%', prefix: '' },
  { label: '평균 입금 시간', value: 3, suffix: '분', prefix: '' },
  { label: '운영 기간', value: 5, suffix: '년+', prefix: '' },
]

const reviews = [
  {
    name: '김**',
    rating: 5,
    content: '급하게 돈이 필요했는데 정말 3분만에 입금됐어요. 수수료도 다른 곳보다 저렴하고 친절하게 안내해주셔서 좋았습니다.',
  },
  {
    name: '이**',
    rating: 5,
    content: '처음 이용해봤는데 절차가 간단하고 빨라서 좋았어요. 다음에도 필요하면 세리카드 이용할게요.',
  },
  {
    name: '박**',
    rating: 5,
    content: '주말 새벽에 연락했는데도 바로 처리해주셔서 감사합니다. 24시간 운영이 진짜였네요.',
  },
]

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const increment = end / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return { count, countRef }
}

function StatItem({ stat }: { stat: typeof stats[0] }) {
  const { count, countRef } = useCountUp(stat.value)

  return (
    <div ref={countRef} className="text-center">
      <div className="text-4xl lg:text-5xl font-bold text-primary-600">
        {stat.prefix}{count.toLocaleString()}{stat.suffix}
      </div>
      <div className="mt-2 text-gray-600 font-medium">{stat.label}</div>
    </div>
  )
}

export default function StatsReviews() {
  return (
    <Section>
      <Container>
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16 lg:mb-24">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} />
          ))}
        </div>

        {/* Reviews */}
        <SectionTitle
          title="고객 후기"
          subtitle="세리카드를 이용해주신 고객님들의 생생한 후기"
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 lg:p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-100" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-4">
                &ldquo;{review.content}&rdquo;
              </p>

              {/* Name */}
              <div className="text-gray-900 font-semibold">
                {review.name} 고객님
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
