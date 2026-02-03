import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { PAGE_META } from '@/lib/pages'
import { getAllPosts, getAllCategorySlugs } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url

  // 기존 페이지들
  const staticPages = Object.values(PAGE_META).map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.sitemapChangeFreq,
    priority: page.sitemapPriority,
  }))

  // 블로그 메인 페이지
  const blogMainPage = {
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }

  // 블로그 카테고리 페이지들
  const categoryPages = getAllCategorySlugs().map((category) => ({
    url: `${baseUrl}/blog/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // 블로그 포스트들
  const blogPosts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.categorySlug}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...staticPages,
    blogMainPage,
    ...categoryPages,
    ...blogPosts,
  ]
}
