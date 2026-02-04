import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Container from '@/components/common/Container'
import BlogHero from '@/components/blog/BlogHero'
import BlogContent from '@/components/blog/BlogContent'
import BlogTOC from '@/components/blog/BlogTOC'
import BlogNavigation from '@/components/blog/BlogNavigation'
import CTASection from '@/components/common/CTASection'
import { BlogPostJsonLd } from '@/components/seo/JsonLd'
import {
  getPostBySlug,
  getAdjacentPosts,
  getAllPostSlugs,
  extractHeadings,
  getCategoryName,
} from '@/lib/blog'
import { SITE_CONFIG } from '@/lib/constants'

type Props = {
  params: Promise<{ category: string; slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params
  const post = getPostBySlug(category, slug)

  if (!post) {
    return {
      title: '글을 찾을 수 없습니다',
    }
  }

  const pageUrl = `${SITE_CONFIG.url}/blog/${category}/${slug}`
  const fullTitle = `${post.title} | ${SITE_CONFIG.name}`

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: fullTitle,
      description: post.excerpt,
      type: 'article',
      url: pageUrl,
      siteName: SITE_CONFIG.name,
      publishedTime: post.date,
      modifiedTime: '2026-02-04',
      authors: [post.author],
      images: post.image ? [post.image] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { category, slug } = await params
  const post = getPostBySlug(category, slug)

  if (!post) {
    notFound()
  }

  const { prev, next } = getAdjacentPosts(category, slug)
  const headings = extractHeadings(post.content)

  return (
    <>
      {/* JSON-LD */}
      <BlogPostJsonLd
        title={post.title}
        description={post.excerpt}
        slug={post.slug}
        categorySlug={post.categorySlug}
        categoryName={getCategoryName(post.categorySlug)}
        datePublished={post.date}
        image={post.image}
      />

      {/* 히어로 섹션 (브레드크럼 포함) */}
      <BlogHero
        post={post}
        breadcrumbItems={[
          { label: '블로그', href: '/blog' },
          { label: getCategoryName(post.categorySlug), href: `/blog/${post.categorySlug}` },
          { label: post.title },
        ]}
      />

      {/* 목차 (화면 오른쪽 고정) */}
      <div className="hidden xl:block">
        <BlogTOC headings={headings} />
      </div>

      {/* 본문 섹션 */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="max-w-3xl">
            <BlogContent content={post.content} />

            {/* 이전/다음 네비게이션 */}
            <div className="mt-12">
              <BlogNavigation prevPost={prev} nextPost={next} />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection
        title="카드 현금화 상담받기"
        subtitle="세리카드의 전문 상담원이 친절하게 안내해 드립니다"
      />
    </>
  )
}
