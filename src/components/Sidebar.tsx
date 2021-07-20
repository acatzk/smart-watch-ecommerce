import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { CloseIcon } from '~/utils/Icon'
import ThemeChanger from '~/utils/ThemeChanger'

interface SidebarProps {
  isOpen: boolean
  setIsOpen: Function
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const { theme } = useTheme()

  return (
    <aside className={`${isOpen && 'fixed z-10 inset-0'}`}>
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transform top-0 left-0 w-full md:w-[350px] bg-black dark:bg-white text-white dark:text-black
        fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30`}
      >
        <div className="flex flex-col justify-between h-full">
          <nav className="flex flex-col justify-between px-10 mt-8">
            <div className="ml-auto">
              <button
                onClick={() => setIsOpen(false)}
                className="active:scale-95"
              >
                <CloseIcon className="w-5 h-5 fill-current text-white dark:text-black" />
              </button>
            </div>
            <ul className="mt-10 flex flex-col items-start space-y-8">
              {['Home', 'Smartphone', 'Store'].map((link, i) => (
                <NavLinks setIsOpen={setIsOpen} label={link} key={i} />
              ))}
            </ul>
          </nav>
          <div className="flex items-center justify-between px-6 py-3">
            <ThemeChanger className="py-2 px-4 border border-white dark:border-black rounded text-white dark:text-black" />
            <div className="relative w-[134px] h-[56px]">
              <Logo theme={theme} />
            </div>
          </div>
        </div>
      </div>
      <Background isOpen={isOpen} setIsOpen={setIsOpen} />
    </aside>
  )
}

function Background({ isOpen, setIsOpen }) {
  return (
    isOpen && (
      <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-gray-700/50 z-0 cursor-default backdrop-blur-sm"
      ></div>
    )
  )
}

function NavLinks({ setIsOpen, label }) {
  return (
    <li className="ml-4">
      <a
        href="#"
        onClick={() => setIsOpen(false)}
        className="text-3xl tracking-wide hover:underline w-full"
      >
        {label}
      </a>
    </li>
  )
}

function Logo({ theme }) {
  return (
    <React.Fragment>
      {theme === 'light' && (
        <Image
          src="/svgs/logo-light.svg"
          layout="fill"
          objectFit="fill"
          alt="main-logo"
          className="flex-shrink-0 inset-0 w-full h-full"
        />
      )}
      {theme === 'dark' && (
        <Image
          src="/svgs/logo-dark.svg"
          layout="fill"
          objectFit="fill"
          alt="main-logo"
          className="flex-shrink-0 inset-0 w-full h-full"
        />
      )}
    </React.Fragment>
  )
}

export default Sidebar
