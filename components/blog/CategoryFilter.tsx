import Link from 'next/link'
import { getAllCategorySlugs, getCategoryName, getCategoryPostCounts } from '@/lib/blog'

type CategoryFilterProps = {
  activeCategory?: string  // slug 형태
  totalCount: number
}

export default function CategoryFilter({ activeCategory, totalCount }: CategoryFilterProps) {
  const categorySlugs = getAllCategorySlugs()
  const categoryCounts = getCategoryPostCounts()

  return (
    <div className="flex flex-wrap gap-2">
      {/* 전체 */}
      <Link
        href="/blog"
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          !activeCategory
            ? 'bg-primary-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        전체
        <span className={`px-1.5 py-0.5 rounded-full text-xs ${
          !activeCategory ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-600'
        }`}>
          {totalCount}
        </span>
      </Link>

      {/* 카테고리들 */}
      {categorySlugs.map((slug) => {
        const isActive = activeCategory === slug
        const count = categoryCounts[slug] || 0

        return (
          <Link
            key={slug}
            href={`/blog/${slug}`}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isActive
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {getCategoryName(slug)}
            <span className={`px-1.5 py-0.5 rounded-full text-xs ${
              isActive ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              {count}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
