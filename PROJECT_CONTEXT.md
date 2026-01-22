# 세리카드 (Sericard) 프로젝트 컨텍스트

## 1. 프로젝트 개요

### 브랜드 정보
- **브랜드명**: 세리카드 (Sericard)
- **도메인**: sericard.com
- **비즈니스**: 카드 현금화 서비스 (합법)
- **타겟 고객**: B2C, 20대 이상 전연령, 대한민국 전체 (온라인/비대면)
- **고객센터**: 010-7715-1404

### 서비스 특징
- **이용 절차**: 4단계 (상담신청 → 본인확인 → 결제 → 입금)
- **취급 카드**: 신용카드 10개사 (국민, 신한, 롯데, 외환, 하나, 현대, 삼성, 비씨, 농협, 우리)
- **수수료**: 업계 최저 수수료 (정확한 수치 비공개)
- **운영 시간**: 24시간 365일
- **입금 시간**: 최대 3분 이내

---

## 2. 기술 스택

| 영역 | 기술 | 버전 |
|------|------|------|
| Framework | Next.js (App Router) | 14.x |
| Styling | Tailwind CSS | 3.x |
| Language | TypeScript | 5.x |
| Deployment | Vercel | - |
| Font | Pretendard | - |
| Icons | Lucide React | - |

### 애니메이션 정책
- 스크롤 기반 페이드인/아웃: **사용 안함** (성능 우선)
- 수치 카운트업 애니메이션: **사용**
- 실시간 처리 현황 롤링: **사용**

---

## 3. 디자인 시스템

### 톤앤매너
- 모던 / 미니멀 / 신뢰
- 화이트 & 블루 컬러

### 컬러 팔레트

```css
/* Primary - Blue */
--primary-50: #eff6ff;   /* 배경 (연한) */
--primary-100: #dbeafe;  /* 배경 */
--primary-500: #3b82f6;  /* 포인트 */
--primary-600: #2563eb;  /* 메인 (버튼, 링크) */
--primary-700: #1d4ed8;  /* 호버 */

/* Neutral - Gray */
--gray-50: #f9fafb;      /* 페이지 배경 */
--gray-100: #f3f4f6;     /* 카드 배경 */
--gray-400: #9ca3af;     /* 보조 텍스트 */
--gray-600: #4b5563;     /* 본문 텍스트 */
--gray-900: #111827;     /* 제목 텍스트 */

/* Semantic */
--success: #10b981;      /* 성공, 완료 */
--warning: #f59e0b;      /* 경고, 주의 */
--error: #ef4444;        /* 에러 */

/* Base */
--white: #ffffff;
--black: #000000;
```

### 타이포그래피

```css
/* Font Family */
font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Font Sizes */
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-lg: 18px;
--text-xl: 20px;
--text-2xl: 24px;
--text-3xl: 30px;
--text-4xl: 36px;
--text-5xl: 48px;

/* Line Heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
```

### 간격 시스템 (Tailwind 기본)
- Section padding: `py-16` (64px) ~ `py-24` (96px)
- Container max-width: `max-w-7xl` (1280px)
- Component gap: `gap-4` (16px) ~ `gap-8` (32px)

---

## 4. 사이트 구조

### URL 구조

```
sericard.com/
├── /                    # 메인 페이지
├── /card-cashout/       # 허브 페이지 (카드 현금화)
├── /about-us/           # 회사 소개
├── /contact/            # 문의
└── /blog/               # 블로그 (추후 제작)
    └── /blog/[slug]/    # 블로그 상세
```

### 내부 링크 전략 (토픽 클러스터)

```
메인 (/)
    ↓
허브 (/card-cashout/) ←→ 블로그들 (/blog/*)
    ↓
문의 (/contact/)
```

---

## 5. 페이지별 구성

### 5.1 메인 페이지 (`/`)

**SEO 타겟 키워드**: 세리카드, 카드 현금화, 신용카드 현금화

| 순서 | 섹션 | 컴포넌트명 | 내용 |
|------|------|-----------|------|
| 1 | Hero | `Hero` | 헤드라인 + 서브카피 + CTA 버튼 |
| 2 | 강점 | `Strengths` | 24시간, 3분 입금, 최저 수수료 등 |
| 3 | 서비스 | `Service` | 서비스 소개/설명 |
| 4 | 이용 절차 | `Process` | 4단계 이용 절차 |
| 5 | 주의 안내 | `Notice` | 안전 거래, 사기 예방 안내 |
| 6 | 실시간 현황 | `LiveStatus` | 실시간 처리 현황 (롤링) |
| 7 | 수치 + 후기 | `StatsReviews` | 누적 수치 + 고객 후기 |
| 8 | FAQ | `FAQ` | 자주 묻는 질문 |
| 9 | CTA | `CTASection` | 전화 상담 유도 |

### 5.2 허브 페이지 (`/card-cashout/`)

**SEO 타겟 키워드**: 카드 현금화, 신용카드 현금화

| 순서 | 섹션 | 컴포넌트명 | 내용 |
|------|------|-----------|------|
| 1 | Hero | `HubHero` | 카드 현금화란? + CTA |
| 2 | 정의 | `Definition` | 카드 현금화 정의/개념 |
| 3 | 장점 | `Benefits` | 장점/특징 |
| 4 | 카드사 | `CardList` | 취급 카드사 로고 |
| 5 | 이용 절차 | `Process` | 이용 절차 (공통) |
| 6 | 안전 안내 | `Safety` | 안전 거래 안내 |
| 7 | 관련 글 | `RelatedPosts` | 블로그 링크 (추후) |
| 8 | CTA | `CTASection` | 전화 상담 유도 |

### 5.3 회사 소개 (`/about-us/`)

| 순서 | 섹션 | 내용 |
|------|------|------|
| 1 | Hero | 세리카드 소개 |
| 2 | Mission | 미션/비전 |
| 3 | Values | 핵심 가치 |
| 4 | CTA | 전화 상담 유도 |

### 5.4 문의 페이지 (`/contact/`)

| 순서 | 섹션 | 내용 |
|------|------|------|
| 1 | Hero | 문의하기 |
| 2 | Contact Info | 전화번호, 운영시간 |
| 3 | CTA | 전화 연결 버튼 |

---

## 6. 컴포넌트 구조

### 공통 컴포넌트 (`components/common/`)

| 컴포넌트 | 파일명 | 용도 |
|----------|--------|------|
| Header | `Header.tsx` | 네비게이션 헤더 |
| Footer | `Footer.tsx` | 푸터 |
| CTA Button | `CTAButton.tsx` | 전화 연결 버튼 |
| CTA Section | `CTASection.tsx` | CTA 섹션 (페이지 하단) |
| Floating CTA | `FloatingCTA.tsx` | 모바일 플로팅 버튼 |
| Container | `Container.tsx` | 컨텐츠 래퍼 |
| Section | `Section.tsx` | 섹션 래퍼 |
| SectionTitle | `SectionTitle.tsx` | 섹션 제목 |
| Button | `Button.tsx` | 범용 버튼 |

### 메인 페이지 컴포넌트 (`components/home/`)

| 컴포넌트 | 파일명 |
|----------|--------|
| Hero | `Hero.tsx` |
| Strengths | `Strengths.tsx` |
| Service | `Service.tsx` |
| Process | `Process.tsx` |
| Notice | `Notice.tsx` |
| LiveStatus | `LiveStatus.tsx` |
| StatsReviews | `StatsReviews.tsx` |
| FAQ | `FAQ.tsx` |

### 허브 페이지 컴포넌트 (`components/hub/`)

| 컴포넌트 | 파일명 |
|----------|--------|
| HubHero | `HubHero.tsx` |
| Definition | `Definition.tsx` |
| Benefits | `Benefits.tsx` |
| CardList | `CardList.tsx` |
| Safety | `Safety.tsx` |
| RelatedPosts | `RelatedPosts.tsx` |

### SEO 컴포넌트 (`components/seo/`)

| 컴포넌트 | 파일명 | 용도 |
|----------|--------|------|
| JsonLd | `JsonLd.tsx` | 스키마 마크업 |

---

## 7. SEO 전략

### 7.1 온페이지 SEO

#### 메타 태그 전략

```tsx
// 메인 페이지
title: "세리카드 | 카드 현금화 24시간 3분 입금"
description: "신용카드 현금화 전문 세리카드. 24시간 365일 운영, 업계 최저 수수료, 최대 3분 이내 입금. 지금 바로 상담하세요."

// 허브 페이지
title: "카드 현금화 | 신용카드 현금화 방법 총정리 - 세리카드"
description: "카드 현금화란? 신용카드 현금화의 모든 것을 알려드립니다. 안전한 이용 방법, 수수료, 주의사항까지 세리카드에서 확인하세요."
```

#### 스키마 마크업

```json
// Organization
{
  "@type": "Organization",
  "name": "세리카드",
  "url": "https://sericard.com",
  "telephone": "010-7715-1404"
}

// FAQPage
{
  "@type": "FAQPage",
  "mainEntity": [...]
}
```

### 7.2 사이트 구조 전략

#### 허브 & 스포크 구조
- **허브**: `/card-cashout/` (카드 현금화 종합 가이드)
- **스포크**: `/blog/*` (세부 주제별 콘텐츠)

#### 사일로 구조
```
카드 현금화 사일로
├── /card-cashout/ (허브)
├── /blog/card-cashout-method/
├── /blog/card-cashout-fee/
├── /blog/card-cashout-safe/
└── /blog/card-cashout-review/
```

### 7.3 엔터티 SEO

**목표**: 구글이 "세리카드 = 카드 현금화 전문 브랜드"로 인식

- 브랜드명 일관성 유지
- 스키마 마크업 적용
- 콘텐츠 내 브랜드 자연스럽게 언급

### 7.4 기술적 SEO

- `next-sitemap`으로 자동 사이트맵 생성
- `robots.txt` 설정
- Open Graph / Twitter Card 메타 태그
- Canonical URL 설정

---

## 8. 프로젝트 구조

```
sericard/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── card-cashout/
│   │   └── page.tsx
│   ├── about-us/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── blog/
│       ├── page.tsx
│       └── [slug]/
│           └── page.tsx
│
├── components/
│   ├── common/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── CTAButton.tsx
│   │   ├── CTASection.tsx
│   │   ├── FloatingCTA.tsx
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   ├── SectionTitle.tsx
│   │   └── Button.tsx
│   │
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── Strengths.tsx
│   │   ├── Service.tsx
│   │   ├── Process.tsx
│   │   ├── Notice.tsx
│   │   ├── LiveStatus.tsx
│   │   ├── StatsReviews.tsx
│   │   └── FAQ.tsx
│   │
│   ├── hub/
│   │   ├── HubHero.tsx
│   │   ├── Definition.tsx
│   │   ├── Benefits.tsx
│   │   ├── CardList.tsx
│   │   ├── Safety.tsx
│   │   └── RelatedPosts.tsx
│   │
│   └── seo/
│       └── JsonLd.tsx
│
├── lib/
│   ├── constants.ts
│   └── metadata.ts
│
├── styles/
│   └── globals.css
│
├── public/
│   ├── images/
│   │   └── cards/
│   └── favicon.ico
│
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── package.json
└── PROJECT_CONTEXT.md
```

---

## 9. 상수 정의 (`lib/constants.ts`)

```typescript
export const SITE_CONFIG = {
  name: '세리카드',
  domain: 'sericard.com',
  url: 'https://sericard.com',
  phone: '010-7715-1404',
  phoneDisplay: '010-7715-1404',
  phoneTel: 'tel:010-7715-1404',
} as const;

export const SERVICE_INFO = {
  operatingHours: '24시간 365일',
  depositTime: '최대 3분 이내',
  feePolicy: '업계 최저 수수료',
} as const;

export const CARD_COMPANIES = [
  '국민', '신한', '롯데', '외환', '하나',
  '현대', '삼성', '비씨', '농협', '우리'
] as const;

export const PROCESS_STEPS = [
  { step: 1, title: '상담 신청', description: '전화로 간편하게 상담 신청' },
  { step: 2, title: '본인 확인', description: '간단한 본인 확인 절차' },
  { step: 3, title: '결제', description: '안전한 카드 결제 진행' },
  { step: 4, title: '입금', description: '최대 3분 이내 입금 완료' },
] as const;

export const NAV_ITEMS = [
  { label: '홈', href: '/' },
  { label: '카드 현금화', href: '/card-cashout' },
  { label: '회사 소개', href: '/about-us' },
  { label: '문의하기', href: '/contact' },
] as const;
```

---

## 10. 개발 단계 (1차 제작)

### Phase 1: 프로젝트 초기 설정
- [ ] Next.js 프로젝트 생성
- [ ] Tailwind CSS 설정
- [ ] 폰트 (Pretendard) 설정
- [ ] 기본 디렉토리 구조 생성
- [ ] 상수 파일 생성

### Phase 2: 공통 컴포넌트 개발
- [ ] Header
- [ ] Footer
- [ ] CTA 컴포넌트들
- [ ] Container, Section, SectionTitle
- [ ] Button

### Phase 3: 메인 페이지 개발
- [ ] Hero
- [ ] Strengths
- [ ] Service
- [ ] Process
- [ ] Notice
- [ ] LiveStatus
- [ ] StatsReviews
- [ ] FAQ
- [ ] CTASection

### Phase 4: 허브 페이지 개발
- [ ] HubHero
- [ ] Definition
- [ ] Benefits
- [ ] CardList
- [ ] Safety
- [ ] (RelatedPosts - 추후)

### Phase 5: 서브 페이지 개발
- [ ] About Us 페이지
- [ ] Contact 페이지

### Phase 6: SEO & 최적화
- [ ] 메타 태그 설정
- [ ] 스키마 마크업
- [ ] Sitemap 생성
- [ ] robots.txt
- [ ] Open Graph 이미지

### Phase 7: 배포
- [ ] Vercel 배포
- [ ] 도메인 연결
- [ ] 최종 테스트

---

## 11. 추후 제작 (2차)

- [ ] 블로그 시스템 구축
- [ ] 블로그 콘텐츠 제작 (롱테일 키워드)
- [ ] 소액결제 현금화 토픽 확장
- [ ] 상품권 현금화 토픽 확장

---

*최종 업데이트: 2026-01-22*
