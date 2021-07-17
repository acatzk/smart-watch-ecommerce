import React from 'react'
import Head from 'next/head'

const Index: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Stats Preview Card Component</title>
      </Head>
      <div className="font-extrabold text-4xl place-items-center">
        Hi Gayle
      </div>
    </React.Fragment>
  )
}

export default Index
