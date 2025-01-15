import React from "react";
import StarRate from "./StarRate";
import { GrDislike, GrLike } from "react-icons/gr";

function CommentsCard() {
  return (
    <>
      <div className="w-full border-y-1 flex-col gap max-md:px-5">
        <div className="w-full border-b-1 py-5">
          <div className="flex justify-between">
            <div className="flex gap-5 text-gray-500">
              <div className="">۱۶ آذر ۱۴۰۲</div>
              <div className="">نگار زمانی</div>
              <div className="">خریدار</div>
            </div>
            <StarRate rate={5} from={5} />
          </div>
        </div>
        <div className="w-full h-fit">
          <p className="py-5 text-lg">
             پس من خیلی خوب بود ولی به خاطر قیمت بالاتر از بقیه محصولات مشاب یه
          </p>

          <div className="commentTags p-3 text-lg flex gap-6 text-gray-500">
            <p>+خنک</p>
            <p>+خنک</p>
            <p>+خنک</p>

          </div>

        </div>
        <div className="w-full flex gap-3 py-3 px-2  justify-end items-center text-lg border-t-1 ">
        <p className="text-gray-500">ایا این نظر مفید بود؟</p>
        <div className=" flex gap-3 ">
        <button className="text-primRed"><GrLike /></button>
        <button className="text-gray-600"><GrDislike /></button>
        </div>

        </div>
      </div>
    </>
  );
}

export default CommentsCard;
