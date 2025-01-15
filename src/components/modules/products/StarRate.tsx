import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa6'

type Props = {rate:number,from:number}

function StarRate({rate,from}: Props) {
  return (
        <div className="flex">
              {Array(rate)
                .fill(1)
                .map((index) => (
                  <div className="text-yellow-600" key={index}>
                    <FaStar/>
                  </div>
                ))}
              {Array(from - rate)
                .fill(1)
                .map((index) => (
                  <div className="text-yellow-600" key={index}>
                    <FaRegStar />
                  </div>
                ))}
            </div>
   
  )
}

export default StarRate