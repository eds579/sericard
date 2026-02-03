import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import BlogCard from '@/components/blog/BlogCard'
import CategoryFilter from '@/components/blog/CategoryFilter'
import CTASection from '@/components/common/CTASection'
import {
  getPostsByCategory,
  getPostCount,
  getAllCategorySlugs,
  getCategoryMeta,
} from '@/lib/blog'
import { SITE_CONFIG } from '@/lib/constants'

type Props = {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  const categorySlugs = getAllCategorySlugs()
  return categorySlugs.map((category) => ({ category }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const categoryMeta = getCategoryMeta(category)

  return {
    title: categoryMeta.title,
    description: categoryMeta.description,
    openGraph: {
      title: `${categoryMeta.title} | ${SITE_CONFIG.name}`,
      description: categoryMeta.description,
      type: 'website',
    },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const validCategories = getAllCategorySlugs()

  if (!validCategories.includes(category)) {
    notFound()
  }

  const posts = getPostsByCategory(category)
  const totalCount = getPostCount()
  const categoryMeta = getCategoryMeta(category)

  return (
    <>
      {/* 헤더 섹션 */}
      <Section bgColor="gray">
        <Container>
          <SectionTitle
            title={categoryMeta.h1}
            subtitle={categoryMeta.h1Description}
            as="h1"
          />

          {/* 카테고리 필터 */}
          <div className="flex justify-center">
            <CategoryFilter activeCategory={category} totalCount={totalCount} />
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
              <p className="text-gray-500 text-lg">
                이 카테고리에 작성된 글이 없습니다.
              </p>
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
