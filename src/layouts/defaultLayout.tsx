import React from 'react'

const DefaultLayout: React.FC<{}> = ({ children }) => {
  return <div className="grid antialiased">{children}</div>
}

export default DefaultLayout
