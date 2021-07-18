import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { NextPage } from 'next'
import { products } from '~/data'
import Header from '~/components/Header'
import ProjectCard from '~/components/ProjectCard'
import DefaultLayout from '~/layouts/defaultLayout'
import { ChevronRight, ChevronBottom } from '~/utils/Icon'

const Index: NextPage<{}> = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Simple Smartwatch Ecommerce</title>
      </Head>
      <DefaultLayout>
        <Header />
        <main className="grid grid-cols-2">
          <section className="grid-cols-6 inline-flex flex-col justify-center items-center">
            <div className="space-y-8">
              <div className="space-y-2">
                <h1 className="text-7xl font-extrabold">Smartwatch</h1>
                <h3 className="uppercase font-light text-2xl tracking-longest text-[#EF9C9C]">
                  Element serie
                </h3>
              </div>
              <p className="max-w-md items-center text-sm text-[#868686] font-light">
                Eu voluptate magna consectetur officia deserunt consequat ex
                adipisicing nostrud non laborum onsectetur officia.{' '}
              </p>
            </div>
            <div className="mt-4 inline-flex items-center space-x-4 overflow-x-auto py-6 px-8 max-w-4xl">
              {products.map((product, i) => (
                <ProjectCard key={i} {...product} />
              ))}
            </div>
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
        </main>
      </DefaultLayout>
    </React.Fragment>
  )
}

export default Index
