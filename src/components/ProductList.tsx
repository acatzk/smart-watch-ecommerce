import React from 'react'
import { IProduct } from '~/data'
import ProjectItem from '~/components/ProductItem'

interface ProductListProps {
  products: any
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div
      className="my-4 inline-flex items-center space-x-4 py-6 px-8 overflow-x-auto 
        scrollbar scrollbar-thumb-gray-200  scrollbar-track-gray-50 scrollbar-thin
        dark:scrollbar-thumb-gray-800 dark:scrollbar-track-transparent"
    >
      {products.map((product: IProduct, i) => (
        <ProjectItem key={i} {...product} />
      ))}
    </div>
  )
}

export default ProductList
