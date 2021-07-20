import React from 'react'
import Header from '~/components/Header'

const DefaultLayout: React.FC<{}> = ({ children }) => {
  return (
    <div className="grid min-h-screen place-items-center antialiased">
      <Header />
      {children}
    </div>
  )
}

export default DefaultLayout
