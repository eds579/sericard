import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import MDXComponents from './MDXComponents'

type BlogContentProps = {
  content: string
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <article className="prose prose-lg prose-gray max-w-none
      prose-headings:scroll-mt-24
      prose-h2:text-2xl prose-h2:font-bold prose-h2:text-gray-900 prose-h2:mt-12 prose-h2:mb-4
      prose-h3:text-xl prose-h3:font-semibold prose-h3:text-gray-800 prose-h3:mt-8 prose-h3:mb-3
      prose-p:text-gray-700 prose-p:leading-relaxed
      prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline
      prose-strong:text-gray-900
      prose-ul:my-4 prose-ol:my-4
      prose-li:text-gray-700 prose-li:marker:text-primary-500
      prose-table:border-collapse prose-table:w-full
      prose-th:bg-gray-100 prose-th:border prose-th:border-gray-200 prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-semibold prose-th:text-gray-900
      prose-td:border prose-td:border-gray-200 prose-td:px-4 prose-td:py-2
      prose-blockquote:border-l-primary-500 prose-blockquote:bg-gray-50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:not-italic
      prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-primary-700 prose-code:before:content-none prose-code:after:content-none
      prose-pre:bg-gray-900 prose-pre:text-gray-100
      prose-img:rounded-xl prose-img:shadow-md
    ">
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
        components={MDXComponents}
      />
    </article>
  )
}
