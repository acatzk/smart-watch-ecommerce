import React from 'react'
import Header from '~/components/Header'

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className="grid min-h-screen place-items-center antialiased text-black dark:text-white bg-white dark:bg-[#08162A] transition ease-in-out duration-700">
      <Header />
      {children}
    </div>
  )
}

export default DefaultLayout
