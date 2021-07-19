import React from 'react'
import Header from '~/components/Header'

const DefaultLayout: React.FC<{}> = ({ children }) => {
  return (
    <div className="antialiased">
      <Header />
      {children}
    </div>
  )
}

export default DefaultLayout
