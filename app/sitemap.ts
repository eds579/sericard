import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { PAGE_META } from '@/lib/pages'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url

  return Object.values(PAGE_META).map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.sitemapChangeFreq,
    priority: page.sitemapPriority,
  }))
}
