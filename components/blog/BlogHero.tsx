import { Calendar, Clock, User, Tag } from 'lucide-react'
import Container from '@/components/common/Container'
import Breadcrumb, { BreadcrumbItem } from '@/components/common/Breadcrumb'
import type { BlogPost } from '@/lib/blog'

type BlogHeroProps = {
  post: BlogPost
  breadcrumbItems?: BreadcrumbItem[]
}

export default function BlogHero({ post, breadcrumbItems }: BlogHeroProps) {
  return (
    <section className="pt-16 lg:pt-20 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
      <Container>
        <div className="max-w-3xl py-8 lg:py-12">
          {/* 브레드크럼 */}
          {breadcrumbItems && (
            <div className="mb-6">
              <Breadcrumb items={breadcrumbItems} />
            </div>
          )}

          {/* 카테고리 */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
              <Tag className="w-4 h-4" />
              {post.category}
            </span>
          </div>

          {/* 제목 */}
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
            {post.title}
          </h1>

          {/* 요약 */}
          <p className="mt-4 text-lg lg:text-xl text-gray-600">
            {post.excerpt}
          </p>

          {/* 메타 정보 */}
          <div className="mt-6 flex flex-wrap items-center gap-4 lg:gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readingTime}분 읽기
            </span>
          </div>

          {/* 태그 */}
          {post.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
