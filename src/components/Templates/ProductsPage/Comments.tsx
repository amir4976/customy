"use client";
import React, { useState } from "react";
import { TeransformIntToFA } from "@/utils/clientTools";
import { GrLike } from "react-icons/gr";
import StarRate from "@/components/modules/products/StarRate";
import CommentsCard from "@/components/modules/products/CommentsCard";

function Comments() {
  const [isShowCommentsForm, setIsShowCommentsForm] = useState(true);

  return (
    <>
      <div className="w-full h-fit grid grid-cols-1 md:grid-cols-4  gap-3 max-md:mt-10">
        <div className="product-rate col-span-1  ">
          {/* rate average and add comment */}
          <div className="sticky h-fit border rounded-xl flex flex-col gap-2 p-5 top-10 ">
            <p className="text-xl">امتیاز و دیدگاه کاربران</p>
            <p>
              <span>{TeransformIntToFA(4.1)}</span> از{"     "}
              <span>{TeransformIntToFA(5)}</span>
            </p>
            <StarRate rate={3} from={5} />

            <span>
              در مجموع از
              {/* <span>{TeransformIntToFA(120)}</span> */}
              دیدگاه
            </span>

            <div className="flex flex-col ">
              <span>نظر خود را ثبت کنید</span>
              {/* show comment form by clicking on this btn */}
              <button
                className="w-fit  bg-transparent border-primRed border px-6 py-3 rounded-xl mt-3"
                onClick={() => setIsShowCommentsForm(!isShowCommentsForm)}
              >
                ثبت دیدگاه
              </button>
            </div>
          </div>
        </div>
        <div className="comment-section col-span-3 mt-10 ">
          <div className="flex items-center gap-2">
            <span className="text-primRed ">
              <GrLike />
            </span>
            <p className=" text-gray-500 font-yBold">
              {/* {TeransformIntToFA(70)}% ({TeransformIntToFA(120)} نفر) از خرید */}
              این محصول رضایت داشته اند
            </p>
          </div>
          {/* all comments sections */}
          <div className="comments">
            <CommentsCard />
            <CommentsCard />
            <CommentsCard />
            <CommentsCard />
            <CommentsCard />
          </div>
        </div>
      </div>
      <div className={`w-full bg-black h-screen fixed top-0 left-0 right-0 bg-opacity-50 z-50  ${isShowCommentsForm ? "flex" : "hidden"} `}>
        <div className="w-[650px] h-fit bg-white rounded-xl p-5 flex flex-col gap-2 relative">
          <button className=" absolute left-5 top-5" onClick={()=>setIsShowCommentsForm(false)}>X</button>
          <h1 className="text-xl font-yBold">نظر خود را با ما به اشتراک بگزارید</h1>
          <p className="font-yBold text-gray-500">درباره این محصول</p>

          <div className="rateSystem flex items-center gap-2">
            <p>امتیاز دهید</p>
            <StarRate rate={3} from={5} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Comments;
