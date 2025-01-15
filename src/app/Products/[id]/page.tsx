import Footer from "@/components/modules/Footer/Footer";
import Navbar from "@/components/modules/Navbar/Navbar";
import Links from "@/components/Templates/mainPage/Links/Links";
import React from "react";
import { BsFillBasket2Fill } from "react-icons/bs";
import { PiMagicWand } from "react-icons/pi";
import Image from "next/image";
import Comments from "@/components/Templates/ProductsPage/Comments";
type Props = {
  params: {
    id: string;
  };
};

function page({ params: { id } }: Props) {
  console.log(id);
  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-7xl">
          <Links />
          <div className="main w-full grid grid-cols-1 md:grid-cols-2 max-md:px-5  gap-5 mt-5">
            <div className="gallery p-10  ">
              <Image
                src={"/assets/thepacman82_Goldwin_May_2_IG.webp"}
                width={400} 
                height={400}
                alt="cover"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="informations flex text-xl items-center text-gray-500">
              <div className="flex flex-col gap-2 w-full">
                <h1 className="text-2xl text-black">مشخصات محصول </h1>
                <hr />
                <div className="flex">
                  <p>جنس :</p>
                  <span>نخ و پلی استر</span>
                </div>

                <div className="flex">
                  <p>شستشو :</p>
                  <span>دستی</span>
                </div>
                <div className="flex">
                  <p>سایز ها :</p>
                  <span>s,m,xl,xxl,xxxl</span>
                </div>
                <div className="flex">
                  <p>رنگ ها :</p>
                  <span> مشکی، سفید، قرمز، سبز، نارنجی، زرشکی، بنفش</span>
                </div>
                <div className="flex">
                  <p>قد :</p>
                  <span>60 سانتی متر</span>
                </div>
                <select
                  className="w-20 px-3 py-1 border border-red-500 rounded-xl"
                  name=""
                  id=""
                >
                  <option value="sm">s</option>
                  <option value="m">m</option>
                  <option value="xl">xl</option>
                  <option value="xxl">xxl</option>
                  <option value="xxxl">xxxl</option>
                </select>

                <div className="w-full flex flex-col text-black " dir="ltr">
                  <p>
                    <span className="font-yBold">
                      {" "}
                      تومان {(100000).toLocaleString("fa-ir")}{" "}
                    </span>
                  </p>

                  <div className="flex gap-5 mt-5">
                    <button className=" p-3 text-sm border border-red-500 text-red-500   rounded-xl flex items-center justify-center gap-3">
                      {" "}
                      افزودن به سبد{" "}
                      <span>
                        <BsFillBasket2Fill />
                      </span>
                    </button>
                    <button className=" p-3 text-sm bg-red-500 text-white  rounded-xl flex items-center justify-center gap-3">
                      {" "}
                      شخصی سازی محصول{" "}
                      <span>
                        <PiMagicWand />
                      </span>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-md:mt-10">
            <Comments />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default page;
