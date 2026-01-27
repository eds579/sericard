# SEO 메타태그 & JSON-LD 스키마 가이드

이 문서는 Next.js App Router 프로젝트에서 SEO 최적화를 위한 메타태그와 JSON-LD 스키마 구현 가이드입니다.
Claude Code가 새 프로젝트에서 참고할 수 있도록 작성되었습니다.

---

## 목차

1. [프로젝트 설정](#1-프로젝트-설정)
2. [메타데이터 패턴](#2-메타데이터-패턴)
3. [JSON-LD 스키마 패턴](#3-json-ld-스키마-패턴)
4. [페이지별 구현 가이드](#4-페이지별-구현-가이드)
5. [체크리스트](#5-체크리스트)

---

## 1. 프로젝트 설정

### 필수 상수 정의

모든 페이지에서 공통으로 사용할 상수를 정의합니다:

```typescript
// lib/constants.ts 또는 각 페이지 상단

// 사이트 기본 정보
export const SITE_CONFIG = {
  name: "사이트명",
  legalName: "법적 회사명",
  url: "https://example.com",
  description: "사이트 설명 (155자 이내)",
  locale: "ko_KR",
  language: "ko-KR",
  ogImage: "/images/og-image.png", // 1200x630 권장
};

// 연락처 정보
export const CONTACT_INFO = {
  email: "contact@example.com",
  phone: "+82-10-0000-0000",
  address: {
    street: "도로명 주소",
    city: "서울특별시",
    region: "서울",
    postalCode: "00000",
    country: "KR",
  },
};
```

### 페이지별 날짜 관리

각 페이지에서 발행일/수정일을 관리합니다:

```typescript
// 각 페이지 상단에 정의
const PAGE_DATES = {
  datePublished: "2025-01-15", // 최초 발행일 (ISO 8601)
  dateModified: "2025-01-20",  // 마지막 수정일 - 콘텐츠 수정 시 업데이트
};
```

---

## 2. 메타데이터 패턴

### 2.1 루트 레이아웃 (app/layout.tsx)

전역 메타데이터와 기본값을 설정합니다:

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),

  title: {
    default: "사이트명 - 핵심 키워드",
    template: "%s | 사이트명", // 하위 페이지 제목 형식
  },

  description: "사이트 설명 (155자 이내, 핵심 키워드 포함)",

  keywords: ["키워드1", "키워드2", "키워드3"],

  authors: [{ name: "회사명" }],

  creator: "회사명",

  publisher: "회사명",

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://example.com",
    siteName: "사이트명",
    title: "사이트명 - 핵심 키워드",
    description: "사이트 설명",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "사이트명 대표 이미지",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "사이트명 - 핵심 키워드",
    description: "사이트 설명",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: "Google Search Console 인증 코드",
    // naver: "네이버 서치어드바이저 인증 코드",
  },
};
```

### 2.2 일반 페이지 메타데이터

서비스, 회사소개 등 정적 페이지용:

```typescript
import type { Metadata } from "next";

const PAGE_DATES = {
  datePublished: "2025-01-15",
  dateModified: "2025-01-20",
};

export const metadata: Metadata = {
  title: "페이지 제목 - 타겟 키워드", // template 적용됨

  description: "페이지 설명 155자 이내. 타겟 키워드를 자연스럽게 포함. 사용자의 클릭을 유도하는 문구.",

  openGraph: {
    title: "페이지 제목 - 타겟 키워드",
    description: "페이지 설명",
    url: "https://example.com/page-path",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "페이지 제목 - 타겟 키워드",
    description: "페이지 설명",
  },

  alternates: {
    canonical: "https://example.com/page-path",
  },

  other: {
    "article:published_time": PAGE_DATES.datePublished,
    "article:modified_time": PAGE_DATES.dateModified,
  },
};
```

### 2.3 동적 페이지 메타데이터 (블로그 등)

MDX/CMS 콘텐츠 기반 동적 생성:

```typescript
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug); // 콘텐츠 fetch 함수

  if (!post) {
    return {
      title: "페이지를 찾을 수 없습니다",
    };
  }

  const { title, excerpt, date, author, image } = post.frontmatter;

  return {
    title: title,
    description: excerpt,

    openGraph: {
      title: title,
      description: excerpt,
      url: `https://example.com/blog/${slug}`,
      type: "article",
      publishedTime: date,
      authors: [author],
      images: image ? [{ url: image, width: 1200, height: 630 }] : undefined,
    },

    twitter: {
      card: "summary_large_image",
      title: title,
      description: excerpt,
    },

    alternates: {
      canonical: `https://example.com/blog/${slug}`,
    },

    other: {
      "article:published_time": date,
      "article:modified_time": date,
      "article:author": author,
      "article:section": post.frontmatter.category,
    },
  };
}
```

---

## 3. JSON-LD 스키마 패턴

### 3.1 기본 구조

JSON-LD는 `@graph` 배열로 여러 스키마를 하나의 script 태그에 포함합니다:

```typescript
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // 여러 스키마 객체들...
  ],
};

// JSX에서 사용
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

### 3.2 Organization 스키마 (홈페이지)

회사/브랜드 정보를 정의합니다. **홈페이지에서 한 번만 정의**하고, 다른 페이지에서는 @id로 참조합니다:

```typescript
{
  "@type": "Organization",
  "@id": "https://example.com/#organization",
  "name": "회사명",
  "legalName": "법적 회사명 (주식회사 OOO)",
  "url": "https://example.com",
  "description": "회사 설명",
  "logo": {
    "@type": "ImageObject",
    "url": "https://example.com/images/logo.png",
    "width": 200,
    "height": 60
  },
  "image": "https://example.com/images/og-image.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "도로명 주소",
    "addressLocality": "서울특별시",
    "addressRegion": "서울",
    "postalCode": "00000",
    "addressCountry": "KR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+82-10-0000-0000",
    "email": "contact@example.com",
    "contactType": "customer service",
    "availableLanguage": ["Korean"]
  },
  "sameAs": [
    "https://www.instagram.com/username",
    "https://blog.naver.com/username",
    "https://www.youtube.com/@username"
  ],
  "founder": {
    "@type": "Person",
    "name": "대표자명"
  },
  "foundingDate": "2020-01-01",
  "slogan": "회사 슬로건",
  "knowsAbout": [
    {
      "@type": "Thing",
      "name": "전문 분야 1",
      "sameAs": "https://www.wikidata.org/wiki/Q000000"
    },
    {
      "@type": "Thing",
      "name": "전문 분야 2"
    }
  ]
}
```

### 3.3 WebSite 스키마 (홈페이지)

사이트 전체 정보와 검색 기능:

```typescript
{
  "@type": "WebSite",
  "@id": "https://example.com/#website",
  "url": "https://example.com",
  "name": "사이트명",
  "description": "사이트 설명",
  "publisher": {
    "@id": "https://example.com/#organization"
  },
  "inLanguage": "ko-KR",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://example.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

### 3.4 WebPage 스키마

모든 페이지에 기본으로 포함:

```typescript
{
  "@type": "WebPage",
  "@id": "https://example.com/page-path/#webpage",
  "url": "https://example.com/page-path",
  "name": "페이지 제목",
  "description": "페이지 설명",
  "isPartOf": {
    "@id": "https://example.com/#website"
  },
  "about": {
    "@id": "https://example.com/#organization"
  },
  "datePublished": "2025-01-15",
  "dateModified": "2025-01-20",
  "inLanguage": "ko-KR"
}
```

### 3.5 Service 스키마 (서비스 페이지)

서비스/상품 페이지에 사용:

```typescript
{
  "@type": "Service",
  "@id": "https://example.com/services/service-name/#service",
  "name": "서비스명",
  "description": "서비스 상세 설명",
  "provider": {
    "@id": "https://example.com/#organization"
  },
  "serviceType": "서비스 카테고리",
  "areaServed": {
    "@type": "Country",
    "name": "KR"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "타겟 고객층 설명"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "서비스 목록",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "세부 서비스 1",
          "description": "세부 서비스 설명"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "세부 서비스 2",
          "description": "세부 서비스 설명"
        }
      }
    ]
  }
}
```

### 3.6 FAQPage 스키마 (FAQ 섹션)

FAQ가 있는 페이지에 추가 (Google 리치 결과 대응):

```typescript
{
  "@type": "FAQPage",
  "@id": "https://example.com/page-path/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "질문 1?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "답변 1 내용"
      }
    },
    {
      "@type": "Question",
      "name": "질문 2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "답변 2 내용"
      }
    }
  ]
}
```

### 3.7 Article 스키마 (블로그/뉴스)

블로그 포스트, 뉴스 기사에 사용:

```typescript
{
  "@type": "Article",
  "@id": "https://example.com/blog/post-slug/#article",
  "headline": "글 제목",
  "description": "글 요약",
  "image": "https://example.com/images/post-image.png",
  "datePublished": "2025-01-15",
  "dateModified": "2025-01-20",
  "author": {
    "@type": "Person",
    "name": "작성자명"
  },
  "publisher": {
    "@id": "https://example.com/#organization"
  },
  "mainEntityOfPage": {
    "@id": "https://example.com/blog/post-slug/#webpage"
  },
  "articleSection": "카테고리명",
  "inLanguage": "ko-KR"
}
```

### 3.8 BreadcrumbList 스키마

모든 하위 페이지에 포함 (홈 제외):

```typescript
{
  "@type": "BreadcrumbList",
  "@id": "https://example.com/page-path/#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "홈",
      "item": "https://example.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "상위 카테고리",
      "item": "https://example.com/category"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "현재 페이지",
      "item": "https://example.com/category/current-page"
    }
  ]
}
```

### 3.9 LocalBusiness 스키마 (지역 비즈니스)

오프라인 매장/사무실이 있는 경우:

```typescript
{
  "@type": "LocalBusiness",
  "@id": "https://example.com/#localbusiness",
  "name": "비즈니스명",
  "image": "https://example.com/images/store.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "도로명 주소",
    "addressLocality": "서울특별시",
    "addressRegion": "서울",
    "postalCode": "00000",
    "addressCountry": "KR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.5665,
    "longitude": 126.9780
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "telephone": "+82-10-0000-0000",
  "priceRange": "₩₩"
}
```

---

## 4. 페이지별 구현 가이드

### 4.1 홈페이지 (/)

**메타데이터**: 루트 레이아웃의 기본값 사용 또는 페이지 전용 metadata export

**JSON-LD 스키마** (필수):
- Organization (전체 정보)
- WebSite (검색 기능 포함)
- WebPage

```typescript
// app/page.tsx
export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", /* ... */ },
      { "@type": "WebSite", /* ... */ },
      { "@type": "WebPage", /* ... */ },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 페이지 컨텐츠 */}
    </>
  );
}
```

### 4.2 서비스 페이지 (/services/*)

**메타데이터**: 서비스별 타겟 키워드 최적화

**JSON-LD 스키마** (필수):
- WebPage
- Service
- FAQPage (FAQ 섹션이 있는 경우)
- BreadcrumbList

```typescript
// app/services/service-name/page.tsx
const PAGE_DATES = {
  datePublished: "2025-01-15",
  dateModified: "2025-01-20",
};

export const metadata: Metadata = { /* ... */ };

export default function ServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://example.com/services/service-name/#webpage",
        /* ... */
      },
      {
        "@type": "Service",
        "@id": "https://example.com/services/service-name/#service",
        "provider": { "@id": "https://example.com/#organization" },
        /* ... */
      },
      {
        "@type": "FAQPage",
        /* ... */
      },
      {
        "@type": "BreadcrumbList",
        /* ... */
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 페이지 컨텐츠 */}
    </>
  );
}
```

### 4.3 회사 소개 (/about)

**JSON-LD 스키마**:
- AboutPage (WebPage 대신)
- BreadcrumbList

```typescript
{
  "@type": "AboutPage",
  "@id": "https://example.com/about/#webpage",
  "about": { "@id": "https://example.com/#organization" },
  "mainEntity": { "@id": "https://example.com/#organization" },
  /* ... */
}
```

### 4.4 블로그 목록 (/blog)

**JSON-LD 스키마**:
- WebPage
- Blog
- BreadcrumbList

```typescript
{
  "@type": "Blog",
  "@id": "https://example.com/blog/#blog",
  "name": "블로그명",
  "description": "블로그 설명",
  "publisher": { "@id": "https://example.com/#organization" },
  "inLanguage": "ko-KR"
}
```

### 4.5 블로그 포스트 (/blog/[slug])

**메타데이터**: `generateMetadata()` 함수로 동적 생성

**JSON-LD 스키마**:
- Article
- BreadcrumbList (4단계: 홈 > 블로그 > 카테고리 > 포스트)

---

## 5. 체크리스트

### 메타데이터 체크리스트

- [ ] **Title**: 60자 이내, 타겟 키워드 앞부분 배치
- [ ] **Description**: 155자 이내, 행동 유도 문구 포함
- [ ] **Canonical URL**: 모든 페이지에 절대 URL 설정
- [ ] **OG Image**: 1200x630px, 모든 페이지에 설정
- [ ] **Twitter Card**: summary_large_image 타입 설정
- [ ] **발행일/수정일**: PAGE_DATES 상수로 관리
- [ ] **language/locale**: ko-KR / ko_KR 설정

### JSON-LD 체크리스트

- [ ] **홈페이지**: Organization, WebSite, WebPage 포함
- [ ] **서비스 페이지**: Service, FAQPage, BreadcrumbList 포함
- [ ] **블로그 포스트**: Article, BreadcrumbList 포함
- [ ] **@id 참조**: Organization은 홈에서 정의, 다른 페이지에서 참조
- [ ] **@graph 구조**: 여러 스키마를 하나의 배열로 묶음
- [ ] **필수 필드**: name, description, url 등 필수 속성 포함

### SEO 검증 도구

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Google Search Console](https://search.google.com/search-console)

---

## 빠른 시작 템플릿

새 프로젝트를 시작할 때 아래 파일들을 먼저 설정하세요:

1. `app/layout.tsx` - 루트 메타데이터 설정
2. `app/page.tsx` - Organization, WebSite 스키마 정의
3. `app/sitemap.ts` - 사이트맵 생성
4. `app/robots.ts` - robots.txt 설정

```typescript
// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.com";

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/service-1`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    // 동적 페이지는 fetch하여 추가
  ];
}

// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: "https://example.com/sitemap.xml",
  };
}
```

---

## 참고 자료

- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Schema.org](https://schema.org/)
- [Google Search Central - 구조화된 데이터](https://developers.google.com/search/docs/appearance/structured-data)
- [Open Graph Protocol](https://ogp.me/)
