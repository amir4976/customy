import React from 'react'
import PopularCard from '@/components/modules/products/PopularCard'
function MostPopular() {
  return (
    <div className='grid grid-cols-4 gap-5 w-full h-fit'>
        <div className="col-span-1">
                <PopularCard/>
         </div>
        <div className="col-span-1">
                <PopularCard/>
         </div>
        <div className="col-span-1">
                <PopularCard/>
         </div>
        <div className="col-span-1">
                <PopularCard/>
         </div>
    </div>
  )
}

export default MostPopular
