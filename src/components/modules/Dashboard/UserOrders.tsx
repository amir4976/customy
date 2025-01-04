import React from 'react'
import { CgMoreO } from 'react-icons/cg'
import { CiShoppingBasket } from 'react-icons/ci'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { IoChatbubblesOutline, IoCheckmarkCircleOutline } from 'react-icons/io5'
import { RiGalleryFill } from 'react-icons/ri'


function UserOrders() {
  return (
    <div className='w-full p-5 border-b'>
        <div className="title w-full text-start text-3xl font-bold"> سفارشات من</div>
        <div className="grid grid-cols-3 w-full ">
            <div className=" col-span-1 border-l">
                <div className=" flex justify-center items-center mt-5 ">
                 <div className="flex items-center justify-center gap-3 ">
                    <div className="icon text-2xl text-primRed"> <CgMoreO /> </div>
                    <div className=" flex-col">
                        <p className='font-yBold'>45 سفارش</p>
                        <p >جاری</p>
                    </div>
                 </div>
                </div>
                
                <div className=" flex justify-center items-center  mt-5">
                 <div className="flex items-center justify-center gap-3 ">
                    <div className="icon text-2xl text-primRed"><IoChatbubblesOutline /></div>
                    <div className=" flex-col">
                        <p className='font-yBold'>54 نظر</p>
                        <p >ثبت شده</p>
                    </div>
                 </div>
                </div>
            </div>
            <div className=" col-span-1 border-l">
                <div className=" flex justify-center items-center mt-5 ">
                 <div className="flex items-center justify-center gap-3 ">
                    <div className="icon text-2xl text-primRed"> <IoCheckmarkCircleOutline /> </div>
                    <div className=" flex-col">
                        <p className='font-yBold'>45 سفارش</p>
                        <p >ارسال شده</p>
                    </div>
                 </div>
                </div>
                <div className=" flex justify-center items-center  mt-5">
                 <div className="flex items-center justify-center gap-3 ">
                    <div className="icon text-2xl text-primRed"> <IoMdCloseCircleOutline /></div>
                    <div className=" flex-col">
                        <p className='font-yBold'>215 سفارش</p>
                        <p >لغو شده</p>
                    </div>
                 </div>
                </div>
            </div>
            <div className=" col-span-1">
                <div className=" flex justify-center items-center mt-5 ">
                 <div className="flex items-center justify-center gap-3 ">
                    <div className="icon text-2xl text-primRed"> <RiGalleryFill /> </div>
                    <div className=" flex-col">
                        <p className='font-yBold'>10 محصول</p>
                        <p >در گالری</p>
                    </div>
                 </div>
                </div>
                <div className=" flex justify-center items-center  mt-5">
                 <div className="flex items-center justify-center gap-3 ">
                    <div className="icon text-2xl text-primRed"> <CiShoppingBasket /> </div>
                    <div className=" flex-col">
                        <p className='font-yBold'>28 محصول</p>
                        <p >فیزیکی</p>
                    </div>
                 </div>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default UserOrders
