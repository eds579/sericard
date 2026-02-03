type SectionTitleProps = {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  dark?: boolean
  as?: 'h1' | 'h2'
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  dark = false,
  as = 'h2',
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'
  const titleColor = dark ? 'text-white' : 'text-gray-900'
  const subtitleColor = dark ? 'text-gray-200' : 'text-gray-600'
  const Tag = as

  return (
    <div className={`mb-12 lg:mb-16 ${alignClass}`}>
      <Tag className={`text-3xl lg:text-4xl font-bold ${titleColor}`}>
        {title}
      </Tag>
      {subtitle && (
        <p className={`mt-4 text-lg ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
