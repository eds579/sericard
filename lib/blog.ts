import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// 블로그 콘텐츠 디렉토리
const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

// 카테고리 slug 매핑
const CATEGORY_MAP: Record<string, string> = {
  '카드현금화': 'card-cashout',
  '금융정보': 'finance-info',
}

const CATEGORY_REVERSE_MAP: Record<string, string> = {
  'card-cashout': '카드현금화',
  'finance-info': '금융정보',
}

// 카테고리별 SEO 메타데이터
export interface CategoryMeta {
  title: string
  description: string
  h1: string
  h1Description: string
}

const CATEGORY_META: Record<string, CategoryMeta> = {
  'card-cashout': {
    title: '신용카드 현금화 가이드 - 방법, 수수료, 주의사항 총정리',
    description: '신용카드 현금화의 모든 것을 정리했습니다. 카드깡 하는법, 수수료 비교, 안전한 업체 선택법까지. 카드 현금화 전 꼭 읽어보세요.',
    h1: '신용카드 현금화 가이드',
    h1Description: '신용카드 현금화, 어떻게 이용해야 할까요? 카드 현금화의 기본 개념부터 이용 방법, 수수료 구조, 안전하게 이용하는 방법까지 세리카드가 상세하게 안내해 드립니다.',
  },
  'finance-info': {
    title: '금융정보 - 신용관리, 대출, 금융 꿀팁',
    description: '신용점수 관리, 대출 정보, 금융 생활에 유용한 꿀팁을 제공합니다. 세리카드 블로그에서 확인하세요.',
    h1: '금융정보',
    h1Description: '신용점수 관리부터 대출 정보, 금융 생활에 유용한 꿀팁까지. 세리카드가 제공하는 금융정보를 확인하세요.',
  },
}

// 카테고리 메타데이터 가져오기
export function getCategoryMeta(slug: string): CategoryMeta {
  return CATEGORY_META[slug] || {
    title: getCategoryName(slug),
    description: `${getCategoryName(slug)} 관련 유용한 정보를 제공합니다.`,
    h1: getCategoryName(slug),
    h1Description: `${getCategoryName(slug)} 관련 유용한 정보를 제공합니다.`,
  }
}

// 타입 정의
export interface BlogPost {
  slug: string
  category: string        // 한글: "카드현금화"
  categorySlug: string    // URL용: "card-cashout"
  title: string
  excerpt: string
  date: string            // YYYY-MM-DD
  author: string
  tags: string[]
  image?: string
  content: string         // MDX raw content
  readingTime: number     // 읽기 시간 (분)
}

export interface Heading {
  id: string
  text: string
  level: number
}

// 카테고리 변환 함수
export function getCategorySlug(category: string): string {
  return CATEGORY_MAP[category] || category.toLowerCase().replace(/\s+/g, '-')
}

export function getCategoryName(slug: string): string {
  return CATEGORY_REVERSE_MAP[slug] || slug
}

export function getAllCategorySlugs(): string[] {
  return Object.values(CATEGORY_MAP)
}

// 읽기 시간 계산 (한글 기준 분당 500자)
export function calculateReadingTime(content: string): number {
  const charCount = content.replace(/\s/g, '').length
  const wordsPerMinute = 500
  const minutes = Math.ceil(charCount / wordsPerMinute)
  return Math.max(1, minutes)
}

// 모든 포스트 가져오기
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return []
  }

  const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.mdx'))

  const posts = files.map(file => {
    const filePath = path.join(BLOG_DIR, file)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    const slug = file.replace('.mdx', '')
    const category = data.category || '카드현금화'

    return {
      slug,
      category,
      categorySlug: getCategorySlug(category),
      title: data.title || '',
      excerpt: data.excerpt || '',
      date: data.date || '',
      author: data.author || '세리카드',
      tags: data.tags || [],
      image: data.image,
      content,
      readingTime: calculateReadingTime(content),
    }
  })

  // 날짜순 정렬 (최신순)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// 카테고리별 포스트 가져오기
export function getPostsByCategory(categorySlug: string): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.filter(post => post.categorySlug === categorySlug)
}

// 특정 포스트 가져오기
export function getPostBySlug(categorySlug: string, slug: string): BlogPost | null {
  const allPosts = getAllPosts()
  // URL 인코딩된 한글 slug 처리
  const decodedSlug = decodeURIComponent(slug)
  return allPosts.find(
    post => post.categorySlug === categorySlug && post.slug === decodedSlug
  ) || null
}

// 이전/다음 포스트 가져오기 (같은 카테고리 내)
export function getAdjacentPosts(categorySlug: string, slug: string): { prev: BlogPost | null; next: BlogPost | null } {
  const categoryPosts = getPostsByCategory(categorySlug)
  // URL 인코딩된 한글 slug 처리
  const decodedSlug = decodeURIComponent(slug)
  const currentIndex = categoryPosts.findIndex(post => post.slug === decodedSlug)

  if (currentIndex === -1) {
    return { prev: null, next: null }
  }

  return {
    prev: currentIndex < categoryPosts.length - 1 ? categoryPosts[currentIndex + 1] : null,
    next: currentIndex > 0 ? categoryPosts[currentIndex - 1] : null,
  }
}

// 모든 포스트 slug 가져오기 (정적 생성용)
export function getAllPostSlugs(): { category: string; slug: string }[] {
  const posts = getAllPosts()
  return posts.map(post => ({
    category: post.categorySlug,
    slug: post.slug,
  }))
}

// TOC용 헤딩 추출 (H2만 표시)
export function extractHeadings(content: string): Heading[] {
  const headingRegex = /^(#{2})\s+(.+)$/gm
  const headings: Heading[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9가-힣\s-]/g, '')
      .replace(/\s+/g, '-')

    headings.push({ id, text, level })
  }

  return headings
}

// 포스트 개수 가져오기
export function getPostCount(): number {
  return getAllPosts().length
}

// 카테고리별 포스트 개수 가져오기
export function getCategoryPostCounts(): Record<string, number> {
  const posts = getAllPosts()
  const counts: Record<string, number> = {}

  posts.forEach(post => {
    counts[post.categorySlug] = (counts[post.categorySlug] || 0) + 1
  })

  return counts
}
