import UserCard from '@/components/modules/MainPage/UserCard'
import React from 'react'

function BestDesigners() {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-4  md:grid-cols-2  gap-5 w-full h-fit '>
        <div className="col-span-1">
            <UserCard/>
        </div>            
        <div className="col-span-1">
            <UserCard/>
        </div>            
        <div className="col-span-1">
            <UserCard/>
        </div>            
        <div className="col-span-1">
            <UserCard/>
        </div>            
    </div>
  )
}

export default BestDesigners
