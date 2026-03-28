import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import { getPostsByCategory } from '@/lib/blog'

export default function BlogGuide() {
  const posts = getPostsByCategory('card-cashout').slice(0, 6)

  if (posts.length === 0) return null

  return (
    <Section>
      <Container>
        <SectionTitle
          title="카드깡 관련 가이드"
          subtitle="카드깡에 대해 더 알고 싶다면 세리카드의 가이드를 확인해 보세요"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.categorySlug}/${post.slug}`}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors leading-snug mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog/card-cashout"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary-600 text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-colors"
          >
            전체 보기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </Section>
  )
}
