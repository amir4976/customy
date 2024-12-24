import Image from 'next/image'
import React from 'react'



function page() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-full max-w-7xl h-full flex justify-center items-center'>
            <div className="w-1/2"></div>
            <div className="w-1/2">
                <Image src={"/assets/login.png"} alt='login' width={500} height={500} className='w-full h-full object-cover' />
            </div>
        </div>
    </div>
  )
}

export default page