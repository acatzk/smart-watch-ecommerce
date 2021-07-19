import React from 'react'

const DefaultLayout: React.FC<{}> = ({ children }) => {
  return <div className="antialiased">{children}</div>
}

export default DefaultLayout
