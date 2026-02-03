import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { BlogPost } from '@/lib/blog'

type BlogNavigationProps = {
  prevPost: BlogPost | null
  nextPost: BlogPost | null
}

export default function BlogNavigation({ prevPost, nextPost }: BlogNavigationProps) {
  if (!prevPost && !nextPost) {
    return null
  }

  return (
    <nav className="border-t border-gray-200 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 이전 글 */}
        <div>
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.categorySlug}/${prevPost.slug}`}
              className="group flex items-start gap-3 p-4 rounded-xl border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mt-0.5 text-gray-400 group-hover:text-primary-600 flex-shrink-0" />
              <div className="min-w-0">
                <span className="text-xs text-gray-500 block mb-1">이전 글</span>
                <span className="text-sm font-medium text-gray-900 group-hover:text-primary-700 line-clamp-2">
                  {prevPost.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* 다음 글 */}
        <div>
          {nextPost ? (
            <Link
              href={`/blog/${nextPost.categorySlug}/${nextPost.slug}`}
              className="group flex items-start gap-3 p-4 rounded-xl border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors text-right"
            >
              <div className="min-w-0 flex-1">
                <span className="text-xs text-gray-500 block mb-1">다음 글</span>
                <span className="text-sm font-medium text-gray-900 group-hover:text-primary-700 line-clamp-2">
                  {nextPost.title}
                </span>
              </div>
              <ChevronRight className="w-5 h-5 mt-0.5 text-gray-400 group-hover:text-primary-600 flex-shrink-0" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </nav>
  )
}
