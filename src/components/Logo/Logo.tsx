import Image from 'next/image'
import { FC } from 'react'

interface LogoProps {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: boolean
  width?: number
  height?: number
  alt?: string
}

export const Logo: FC<LogoProps> = ({
  className = '',
  width = 360,
  height = 40,
  priority = false,
  loading = 'lazy',
  alt = 'Thirdbracket Logo',
}) => {
  return (
    <Image
      src="/logo.svg"
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      loading={loading}
      className={className}
    />
  )
}
