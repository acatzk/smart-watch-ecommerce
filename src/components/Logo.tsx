import React from 'react'
import Image from 'next/image'

interface LogoProps {
  theme: any
}

const Logo: React.FC<LogoProps> = ({ theme }) => {
  return (
    <React.Fragment>
      {theme === 'light' && (
        <>
          <Image
            src="/svgs/logo-dark.svg"
            layout="fill"
            objectFit="fill"
            alt="main-logo"
            className="flex-shrink-0 inset-0 w-full h-full"
          />
        </>
      )}
      {theme === 'dark' && (
        <>
          <Image
            src="/svgs/logo-light.svg"
            layout="fill"
            objectFit="fill"
            alt="main-logo"
            className="flex-shrink-0 inset-0 w-full h-full"
          />
        </>
      )}
    </React.Fragment>
  )
}

export default Logo
