import ProductsCard from '@/components/modules/products/ProductsCard'
import React from 'react'

function Favorites() {
  return (
    <div className=" w-full h-fit  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div className="col-span-1">
        <ProductsCard/>
    </div>
    <div className="col-span-1">
        <ProductsCard/>
    </div>
    <div className="col-span-1">
        <ProductsCard/>
    </div>
    <div className="col-span-1">
        <ProductsCard/>
    </div>
    </div>
  )
}

export default Favorites
