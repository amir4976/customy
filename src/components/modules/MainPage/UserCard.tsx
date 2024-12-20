import Image from 'next/image'
import React from 'react'

function UserCard() {
  return (
    <div className='w-full  h-fit rounded-xl overflow-hidden border'>
        <div className="cover w-full h-20 bg-gray-500"></div>
        <div className="profile flex justify-center items-center -mt-12">
            <Image src={'/assets/images (1).jpg' } width={100} height={100} alt='user image' className='rounded-full' />
        </div>
        <div className="w-full p-3">
        <h1 className='font-yBold text-xl text-center'>شهرام طالبی</h1>  
        <div className="flex text-xs justify-between mt-5">
            <p>دنبال کنندگان:400</p>|
            <p>تعداد طرح ها :100</p>|
            <p>امار فروش:200</p>

        </div>
        <button className=' w-full mt-5 transition-all border-btnBg border p-2 rounded-md hover:bg-btnBg hover:text-white'>
        دنبال کردن
       </button>
        </div>
    </div>
  )
}

export default UserCard
