import Image from "next/image";
import React from "react";

function SpecialEcation() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2  md:grid-cols-2 gap-5 w-full h-fit  mt-10 ">
      <div className="col-span-1 grid grid-cols-2 bg-PrimaryP rounded-xl overflow-hidden">
        <div className="col-span-1 p-5 flex flex-col justify-center items-center">
          <p className="text-3xl">محصولات مناسب هدیه به اقایون</p>
          <button className=" w-full mt-5 transition-all border-btnBg border p-2 rounded-md hover:bg-btnBg hover:text-white">
            دیدن از محصولات
          </button>
        </div>
        <div className="col-span-1 h-full ">
            <Image src={"/assets/dadi 1.png"} width={400} height={400} alt="product image" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="col-span-1 grid grid-cols-2 bg-PrimaryP rounded-xl overflow-hidden">
        <div className="col-span-1 p-5 flex flex-col justify-center items-center">
          <p className="text-3xl">محصولات مناسب هدیه به خانوم ها</p>
          <button className=" w-full mt-5 transition-all border-btnBg border p-2 rounded-md hover:bg-btnBg hover:text-white">
           دیدن از محصولات
          </button>
        </div>
        <div className="col-span-1 h-full ">
            <Image src={"/assets/mom 1.png"} width={400} height={400} alt="product image" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default SpecialEcation;
