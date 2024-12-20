import Image from 'next/image'
import React from 'react'

function PopularCard() {
  return (
    <div className='w-full h-fit flex flex-col gap-2 p-3 border  border-gray-200 rounded-md'>
        <div className="w-full rounded-md">
        <Image src={'/assets/img.png'} width={500} height={500}  alt='product image' className='w-full h-full object-cover' />
        </div>
       <div className="flex justify-between">
       <h1 className='font-yBold text-xl'>تایتل محصول</h1>
       <p>❤</p>
       </div>
       <div className=" my-1">دارای رنگ بندی، قابل طراحی</div>

       <button className=' transition-all border-btnBg border p-2 rounded-md hover:bg-btnBg hover:text-white'>
        افزوندن به گالری
       </button>
    </div>
  )
}

export default PopularCard
