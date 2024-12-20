import Image from 'next/image'
import React from 'react'

function ProductsCard() {
  return (
    <div className='w-full h-fit flex flex-col gap-2 p-3 border  border-gray-200 rounded-md'>
        <div className="w-full rounded-md">
        <Image src={'/products/img-1.png'} width={500} height={500}  alt='product image' className='w-full h-full object-cover' />
        </div>
       <div className="flex justify-between">
       <h1 className='font-yBold text-xl'>تایتل محصول</h1>
       <p>❤</p>
       </div>
       <div className=" my-1">دارای رنگ بندی، قابل طراحی</div>
       <div className="w-full h-fit  text-left font-yBold">{(15000000).toLocaleString('fa-ir')} تومان </div>
    </div>
  )
}

export default ProductsCard
