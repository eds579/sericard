import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Container from '@/components/common/Container'
import BlogHero from '@/components/blog/BlogHero'
import BlogContent from '@/components/blog/BlogContent'
import BlogTOC from '@/components/blog/BlogTOC'
import BlogNavigation from '@/components/blog/BlogNavigation'
import CTASection from '@/components/common/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'
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

  // JSON-LD 데이터
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/blog/${post.categorySlug}/${post.slug}`,
    },
    ...(post.image && { image: `${SITE_CONFIG.url}${post.image}` }),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '홈',
        item: SITE_CONFIG.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '블로그',
        item: `${SITE_CONFIG.url}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: getCategoryName(post.categorySlug),
        item: `${SITE_CONFIG.url}/blog/${post.categorySlug}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: post.title,
        item: `${SITE_CONFIG.url}/blog/${post.categorySlug}/${post.slug}`,
      },
    ],
  }

  return (
    <>
      {/* JSON-LD */}
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

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
