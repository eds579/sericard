import { Metadata } from 'next'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import BlogCard from '@/components/blog/BlogCard'
import CategoryFilter from '@/components/blog/CategoryFilter'
import CTASection from '@/components/common/CTASection'
import { getAllPosts, getPostCount } from '@/lib/blog'
import { SITE_CONFIG } from '@/lib/constants'

const pageTitle = '카드깡 · 카드 현금화 정보 블로그'
const pageDescription = '카드깡, 신용카드 현금화에 대한 모든 정보를 제공합니다. 카드 현금화 방법, 수수료, 안전한 이용법까지 세리카드 블로그에서 확인하세요.'
const pageUrl = `${SITE_CONFIG.url}/blog`

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `${pageTitle} | ${SITE_CONFIG.name}`,
    description: pageDescription,
    type: 'website',
    url: pageUrl,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${pageTitle} | ${SITE_CONFIG.name}`,
    description: pageDescription,
  },
}

export default function BlogPage() {
  const posts = getAllPosts()
  const totalCount = getPostCount()

  return (
    <>
      {/* 헤더 섹션 */}
      <Section bgColor="gray">
        <Container>
          <SectionTitle
            title="카드 현금화 정보 블로그"
            subtitle="카드깡과 신용카드 현금화에 대해 궁금하셨나요? 세리카드 블로그에서 카드 현금화의 개념부터 안전한 이용 방법, 수수료 정보까지 모든 것을 알려드립니다."
            as="h1"
          />

          {/* 카테고리 필터 */}
          <div className="flex justify-center">
            <CategoryFilter totalCount={totalCount} />
          </div>
        </Container>
      </Section>

      {/* 포스트 목록 */}
      <Section>
        <Container>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">아직 작성된 글이 없습니다.</p>
            </div>
          )}
        </Container>
      </Section>

      {/* CTA */}
      <CTASection
        title="카드 현금화 상담받기"
        subtitle="궁금한 점이 있으시면 언제든지 연락 주세요"
      />
    </>
  )
}
