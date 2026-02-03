import Image from 'next/image'
import Link from 'next/link'
import type { MDXComponents as MDXComponentsType } from 'mdx/types'

// 커스텀 이미지 컴포넌트
function CustomImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { src, alt, ...rest } = props

  if (!src) return null

  // 외부 이미지인 경우 일반 img 태그 사용
  if (src.startsWith('http')) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt || ''}
        className="rounded-xl shadow-md"
        {...rest}
      />
    )
  }

  // 내부 이미지는 Next.js Image 사용
  return (
    <span className="block relative w-full aspect-video my-6">
      <Image
        src={src}
        alt={alt || ''}
        fill
        className="object-cover rounded-xl shadow-md"
        sizes="(max-width: 768px) 100vw, 800px"
      />
    </span>
  )
}

// 커스텀 링크 컴포넌트
function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { href, children, ...rest } = props

  // 외부 링크인 경우
  if (href?.startsWith('http')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-600 hover:underline"
        {...rest}
      >
        {children}
      </a>
    )
  }

  // 내부 링크는 Next.js Link 사용
  return (
    <Link href={href || '#'} className="text-primary-600 hover:underline" {...rest}>
      {children}
    </Link>
  )
}

// Heading ID 생성
function generateId(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, '')
    .replace(/\s+/g, '-')
}

// 커스텀 헤딩 컴포넌트
function CustomH2({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  const id = generateId(children?.toString() || '')
  return (
    <h2 id={id} {...props}>
      {children}
    </h2>
  )
}

function CustomH3({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  const id = generateId(children?.toString() || '')
  return (
    <h3 id={id} {...props}>
      {children}
    </h3>
  )
}

// 콜아웃 박스 컴포넌트
function Callout({ type = 'info', children }: { type?: 'info' | 'warning' | 'tip'; children: React.ReactNode }) {
  const styles = {
    info: 'bg-blue-50 border-blue-500 text-blue-800',
    warning: 'bg-amber-50 border-amber-500 text-amber-800',
    tip: 'bg-green-50 border-green-500 text-green-800',
  }

  return (
    <div className={`p-4 my-6 border-l-4 rounded-r-lg ${styles[type]}`}>
      {children}
    </div>
  )
}

const MDXComponents: MDXComponentsType = {
  img: CustomImage,
  a: CustomLink,
  h2: CustomH2,
  h3: CustomH3,
  Callout,
}

export default MDXComponents
