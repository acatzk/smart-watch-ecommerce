import Link from 'next/link'
import Image from 'next/image'
import { MenuIcon } from '~/utils/Icon'
import React, { useState } from 'react'
import Sidebar from '~/components/Sidebar'

const Header: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <React.Fragment>
      <header className="sticky top-0 bg-white z-10 flex items-center justify-center w-full pt-4 md:pt-6">
        <div className="w-full md:w-1/3 px-4 md:px-0">
          <button onClick={() => setIsOpen(true)} className="active:scale-95">
            <MenuIcon className="w-6 h-6 text-black" />
          </button>
        </div>
        <div className="relative w-[270px] h-[56px] block md:hidden">
          <Image
            src="/svgs/logo-dark.svg"
            layout="fill"
            objectFit="fill"
            alt="main-logo"
            className="flex-shrink-0 inset-0 w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-0">
          <div className="flex items-center">
            <div className="relative w-[134px] h-[56px] hidden md:block">
              <Image
                src="/svgs/logo-dark.svg"
                layout="fill"
                objectFit="fill"
                alt="main-logo"
                className="flex-shrink-0 inset-0 w-full h-full"
              />
            </div>
            <nav className="ml-auto">
              <ul className="flex items-center space-x-4 lg:space-x-8 xl:space-x-14 text-sm">
                {['Home', 'Smartphone', 'Store'].map((label, i) => (
                  <NavLinks key={i} label={label} />
                ))}
                <li className="flex-shrink-0 mr-4">
                  <button className="py-2 px-3 md:px-4 bg-[#F29494] hover:bg-opacity-80 text-white transition ease-in-out duration-150 active:scale-95">
                    Buy Now
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* This is where sidebar drawer shows */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </React.Fragment>
  )
}

function NavLinks({ label }) {
  return (
    <li className="hidden lg:block">
      <Link href="#">
        <a className="hover:text-gray-600 transition ease-in-out duration-150">
          {label}
        </a>
      </Link>
    </li>
  )
}

export default Header
