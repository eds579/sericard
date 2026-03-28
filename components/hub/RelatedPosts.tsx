import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'

const categories = [
  {
    label: '카드깡 기본 가이드',
    posts: [
      { title: '카드깡이란? 뜻과 개념 완벽 정리', href: '/blog/card-cashout/카드깡이란' },
      { title: '신용카드 현금화 뜻과 구조 총정리', href: '/blog/card-cashout/신용카드현금화-뜻' },
      { title: '카드 현금화란? 원리부터 이해하기', href: '/blog/card-cashout/카드현금화란' },
    ],
  },
  {
    label: '이용 방법',
    posts: [
      { title: '카드 현금화 방법 5가지 총정리', href: '/blog/card-cashout/카드현금화-방법' },
      { title: '카드깡 하는법: 초보자를 위한 단계별 가이드', href: '/blog/card-cashout/카드깡-하는법' },
    ],
  },
  {
    label: '수수료·비용',
    posts: [
      { title: '카드깡 수수료 2026년 시세 총정리', href: '/blog/card-cashout/카드깡-수수료' },
      { title: '카드깡 vs 현금서비스: 어떤 게 유리할까?', href: '/blog/card-cashout/카드깡-vs-현금서비스' },
    ],
  },
  {
    label: '안전·주의사항',
    posts: [
      { title: '카드깡 사기 유형과 예방법 총정리', href: '/blog/card-cashout/카드깡-사기' },
      { title: '카드깡 안전하게 이용하는 5가지 체크리스트', href: '/blog/card-cashout/카드깡-안전' },
      { title: '카드깡이 신용등급에 미치는 영향', href: '/blog/card-cashout/카드깡-신용등급' },
    ],
  },
  {
    label: '업체 선택·법적 안내',
    posts: [
      { title: '카드깡 업체 선택 가이드: 안전한 업체 고르는 5가지 기준', href: '/blog/card-cashout/카드깡-업체' },
      { title: '카드깡 불법인가요? 이용자가 알아야 할 법적 사항', href: '/blog/card-cashout/카드깡-불법' },
      { title: '카드깡 처벌 사례와 법적 리스크 정리', href: '/blog/card-cashout/카드깡-처벌' },
    ],
  },
  {
    label: '카드사별 안내',
    posts: [
      { title: '신한카드 카드깡 이용 가이드', href: '/blog/card-cashout/신한카드깡' },
      { title: '삼성카드 카드깡 이용 가이드', href: '/blog/card-cashout/삼성카드깡' },
    ],
  },
]

export default function RelatedPosts() {
  return (
    <Section>
      <Container>
        <SectionTitle
          title="카드깡 더 알아보기"
          subtitle="카드깡에 대해 더 궁금한 점이 있다면 아래 가이드를 확인해 보세요"
        />

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.label} className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="text-sm font-bold text-primary-600 mb-3">{category.label}</p>
              <ul className="space-y-2">
                {category.posts.map((post) => (
                  <li key={post.href}>
                    <Link
                      href={post.href}
                      className="group flex items-start gap-2 text-sm text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-gray-400 group-hover:text-primary-500 transition-colors" />
                      <span>{post.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
