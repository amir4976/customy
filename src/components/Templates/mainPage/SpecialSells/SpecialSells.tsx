import Image from "next/image";
import React from "react";

function SpecialSells() {
  return (
    <div className="grid grid-cols-2 gap-5 w-full h-fit">
      <div className=" col-span-1">
        <div className="w-full h-[620px]  rounded-xl overflow-hidden relative">
          <Image
            src={"/assets/0242_AvaTaubengrau_Room_540x.webp"}
            width={400}
            height={400}
            alt="product image"
            className="w-full h-full object-cover"
          />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent flex items-end text-white text-3xl p-8 ">
                نام محصول
            </div>
        </div>
      </div>
      <div className=" col-span-1">
        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-1  h-[300px]  rounded-xl overflow-hidden relative">
            <Image
              src={"/assets/thepacman82_Goldwin_May_2_IG.webp"}
              width={400}
              height={400}
              alt="product image"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent flex items-center text-white text-3xl p-3 ">
                نام محصول
            </div>
          </div>
          <div className="col-span-1  h-[300px]  rounded-xl overflow-hidden relative">
            <Image
              src={"/assets/123765746_3599672923423051_7116499252274505467_n.jpg"}
              width={400}
              height={400}
              alt="product image"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent flex items-center text-white text-3xl p-3 ">
                نام محصول
            </div>
          </div>
          <div className="col-span-1  h-[300px]  rounded-xl overflow-hidden relative">
            <Image
              src={"/assets/zlFw6XevFD5eyoljQhd41SQ6oI.avif"}
              width={400}
              height={400}
              alt="product image"
              className="w-full h-full object-cover"
            />
                        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent flex items-center text-white text-3xl p-3 ">
                نام محصول
            </div>
          </div>
          <div className="col-span-1  h-[300px]  rounded-xl overflow-hidden relative">
            <Image
              src={"/assets/cpp,small,lustre,product,750x1000.webp"}
              width={400}
              height={400}
              alt="product image"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent flex items-center text-white text-3xl p-3 ">
                نام محصول
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialSells;
