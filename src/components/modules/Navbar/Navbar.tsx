import React from 'react'
import Image from 'next/image'
import { RiSearch2Line } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { CiShoppingBasket } from "react-icons/ci";
export default function Navbar() {
  return (
    <div  className='w-full h-[100px] flex items-center justify-between font-yBold gap-5' >
      
          {/* logo */}
          <div className="logo w-52 max-xl:w-36 max-md:hidden">
            <Image src={"/assets/logo.png"} alt="logo" width={200} height={200} className='w-full h-full object-cover' />
          </div>

          {/* search */}
          <div className="search w-1/2 max-md:w-full">
            <div className="w-full bg-white  h-12  border-gray-400 border rounded-2xl overflow-hidden relative flex items-center">
              <input type="text" className="w-11/12 h-full outline-none p-3" placeholder="جستوجو" />
              <div className=" absolute left-4 z-2  text-red-500 ">
              <RiSearch2Line />
              </div>
            </div>
          </div>

          {/* btns */}
          <div className="btns flex items-center gap-2 max-md:hidden">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-600">
            <FiLogIn />
            <span>ورود | ثبت نام</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-600">
            <CiShoppingBasket />
            <span>سبد خرید</span>
            </button>

          </div>

          {/* mobile logo */}
          <div className=" md:hidden">
            <Image src={'/assets/LOGO-Mobile.png'} alt='' className='' width={50} height={50}/>
          </div>
    </div>  
  )
}