import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'

// 추후 블로그 데이터로 대체
const posts = [
  {
    title: '카드 현금화 방법 총정리',
    description: '카드 현금화의 다양한 방법과 절차를 상세히 알아봅니다.',
    href: '/blog/card-cashout-method',
  },
  {
    title: '카드 현금화 수수료 안내',
    description: '카드 현금화 시 발생하는 수수료와 비용에 대해 설명합니다.',
    href: '/blog/card-cashout-fee',
  },
  {
    title: '안전한 카드 현금화 업체 선택법',
    description: '믿을 수 있는 카드 현금화 업체를 선택하는 방법을 안내합니다.',
    href: '/blog/card-cashout-safe',
  },
]

export default function RelatedPosts() {
  // 블로그가 아직 없으므로 일단 숨김 처리
  const showPosts = false

  if (!showPosts) {
    return null
  }

  return (
    <Section>
      <Container>
        <SectionTitle
          title="관련 글"
          subtitle="카드 현금화에 대해 더 알아보세요"
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, index) => (
            <Link
              key={index}
              href={post.href}
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {post.description}
              </p>
              <span className="inline-flex items-center gap-1 text-primary-600 text-sm font-medium">
                자세히 보기
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  )
}
