import Link from 'next/link'
import Image from 'next/image'
import { MenuIcon } from '~/utils/Icon'
import React, { useState } from 'react'
import Sidebar from '~/components/Sidebar'

const Header: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <React.Fragment>
      <header className="flex items-center justify-center pt-6">
        <div className="w-1/3">
          <button onClick={() => setIsOpen(true)} className="active:scale-95">
            <MenuIcon className="w-6 h-6 text-black" />
          </button>
        </div>
        <div className="w-1/2">
          <div className="flex items-center">
            <div className="relative w-[134px] h-[56px]">
              <Image
                src="/svgs/logo-dark.svg"
                layout="fill"
                objectFit="fill"
                alt="main-logo"
                className="flex-shrink-0 w-full h-full"
              />
            </div>
            <nav className="ml-auto">
              <ul className="flex items-center space-x-16 text-sm">
                <li>
                  <Link href="#">
                    <a className="hover:text-gray-600 transition ease-in-out duration-150">
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="hover:text-gray-600 transition ease-in-out duration-150">
                      Smartphone
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="hover:text-gray-600 transition ease-in-out duration-150">
                      Store
                    </a>
                  </Link>
                </li>
                <li>
                  <button className="py-2 px-4 bg-[#F29494] hover:bg-opacity-80 text-white transition ease-in-out duration-150 active:scale-95">
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

export default Header
