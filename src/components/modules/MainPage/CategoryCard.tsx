import Image from 'next/image'
import React from 'react'

type Props = {title:string,img:string}

function CategoryCard({title,img}: Props) {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center gap-2 border p-2 rounded-lg ">
        <Image src={img} alt={title} width={100} height={100} className='w-full h-full object-cover'/>
        <p className='text-center font-y text-lg'>{title}</p>
    </div>
  )
}

export default CategoryCard