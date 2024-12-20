import Image from "next/image";
import React from "react";
import { HiOutlinePaintBrush } from "react-icons/hi2";

function Hero() {
  return (
    <div className="w-full h-fit flex  items-center justify-center gap-5 bg-[#EDD5D8] rounded-2xl p-5 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-3  ">
        <div className="col-span-1 flex flex-col justify-center gap-5">
          <h1 className="text-3xl font-yBold ">انلاین شاپ کاستومی</h1>
          <p className="w-96 text-xl">
            آنلاین شاپ کاستومی محصولات متنوعی داره و این امکان رو بهتون میده
            خودتون رنگ و طرح و نوشته ی روی محصولات رو انتخاب کنید
          </p>
          <div className="flex gap-5 w-full ">
            <button className="p-3 flex items-center justify-center gap-2  bg-btnBg rounded-xl w-full text-white border-btnBg border hover:bg-transparent hover:text-btnBg transition-all">
              {" "}
              <span className="text-xl">
                <HiOutlinePaintBrush />
              </span>
              شروع طراحی{" "}
            </button>
            <button className="p-3 border-btnBg border rounded-xl w-full  hover:bg-btnBg hover:text-white transition-all">
              دیدن محصولات
            </button>
          </div>
        </div>
        <div className="col-span-2 flex justify-center items-center mt-5 max-md:order-first">
          <Image
            src={"/assets/hero.png"}
            alt="hero"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
