import React from 'react'
import Image from 'next/image'

interface LogoProps {
  alt?: string
}

export const LogoLight: React.FC<LogoProps> = ({ alt }) => {
  return (
    <Image
      src="/svgs/logo-light.svg"
      layout="fill"
      alt={alt}
      className="flex-shrink-0 inset-0 w-full h-full"
    />
  )
}

export const LogoDark: React.FC<LogoProps> = ({ alt }) => {
  return (
    <Image
      src="/svgs/logo-dark.svg"
      layout="fill"
      alt={alt}
      className="flex-shrink-0 inset-0 w-full h-full"
    />
  )
}
