import React from "react";
import { FaUser } from "react-icons/fa6";

interface props {
  Data: {
    icon: React.ReactNode;
    title: string;
  }[];
  activePage: number;
}
function SignBradcramp({ Data, activePage }: props) {
    console.log(activePage)
  return (
    <div className="w-full flex  justify-center ">
      {Data.map((data, index) => (
        <div className={` flex justify-center items-center text-gray-300  ${(index+1) <= activePage && 'Active'} `} key={index}>
          <div
            key={index}
            className="brad flex flex-col items-center"
          >
            <span className="text-xl">
              {data.icon}
            </span>
            <span>{data.title}</span>
          </div>
          {/* line */}
          {index+1 !== Data.length && (
            <div className="betweeen w-40 h-fit flex justify-between  items-center mx-5">
              <div className={`circle w-3 h-3 rounded-full   ${(index+1) < activePage ? 'bg-red-600' : 'bg-red-200'} ` } ></div>
              <div className="line w-full border-dashed border h-0"></div>
              <div className={`circle w-3 h-3 rounded-full   ${(index+1) < activePage ? 'bg-red-600' : 'bg-red-200'} ` } ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SignBradcramp;
