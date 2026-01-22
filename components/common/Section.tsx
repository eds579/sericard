import { ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
  className?: string
  id?: string
  bgColor?: 'white' | 'gray' | 'primary'
}

const bgColors = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  primary: 'bg-primary-600',
}

export default function Section({
  children,
  className = '',
  id,
  bgColor = 'white'
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 lg:py-24 ${bgColors[bgColor]} ${className}`}
    >
      {children}
    </section>
  )
}
