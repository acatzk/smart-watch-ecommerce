import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { NextPage } from 'next'
import { products } from '~/data'
import ProjectList from '~/components/ProductList'
import DefaultLayout from '~/layouts/defaultLayout'
import { ChevronRight, ChevronBottom } from '~/utils/Icon'

const Index: NextPage<{}> = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Simple Smartwatch Ecommerce</title>
      </Head>
      <DefaultLayout>
        <main className="relative grid grid-cols-1 lg:grid-cols-2">
          <section className="grid-cols-6 flex flex-col justify-center">
            <div className="flex items-center justify-center mt-14 md:mt-0">
              <div className="flex flex-col">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider">
                  Smartwatch
                </h1>
                <h3 className="uppercase font-light text-lg md:text-2xl tracking-longest text-[#EF9C9C]">
                  Element serie
                </h3>
                <p className="mt-8 max-w-md items-center text-xs md:text-sm text-[#868686] font-light">
                  Eu voluptate magna consectetur officia deserunt consequat ex
                  adipisicing nostrud non laborum onsectetur officia.{' '}
                </p>
              </div>
            </div>
            <ProjectList products={products} />
          </section>
          <section className="grid-cols-6 relative" style={{ height: '90vh' }}>
            <Image
              src="/svgs/watch1.svg"
              layout="fill"
              className="object-fill w-full h-full"
              alt="main-watch"
            />
            <button className="absolute inset-y-0 right-8 active:scale-95">
              <ChevronRight className="h-7 w-7" />
            </button>
          </section>
          <div className="absolute flex justify-center right-0 left-0 bottom-6">
            <ChevronBottom className="w-7 h-7" />
          </div>
        </main>
      </DefaultLayout>
    </React.Fragment>
  )
}

export default Index
