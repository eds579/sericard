import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, Tag } from 'lucide-react'
import type { BlogPost } from '@/lib/blog'

type BlogCardProps = {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <Link href={`/blog/${post.categorySlug}/${post.slug}`}>
        {/* 이미지 - 모바일에서 숨김 */}
        <div className="hidden md:block relative aspect-[16/9] bg-gray-100">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-700">
              <span className="text-white text-4xl font-bold opacity-30">
                {post.title.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* 콘텐츠 */}
        <div className="p-5">
          {/* 카테고리 */}
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
          </div>

          {/* 제목 */}
          <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-primary-600 transition-colors">
            {post.title}
          </h2>

          {/* 요약 */}
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
            {post.excerpt}
          </p>

          {/* 메타 정보 */}
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.date).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}분
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
