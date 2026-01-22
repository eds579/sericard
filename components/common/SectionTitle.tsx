type SectionTitleProps = {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  dark?: boolean
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  dark = false
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'
  const titleColor = dark ? 'text-white' : 'text-gray-900'
  const subtitleColor = dark ? 'text-gray-200' : 'text-gray-600'

  return (
    <div className={`mb-12 lg:mb-16 ${alignClass}`}>
      <h2 className={`text-3xl lg:text-4xl font-bold ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
