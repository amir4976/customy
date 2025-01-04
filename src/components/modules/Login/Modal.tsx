"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");
  const ChoseSelection = (e: React.ChangeEvent<HTMLFormElement>) => {
    setIsSelected(true);
    setSelected(e.target.value);
  };
  
  return (
    <div
      className={`w-full h-screen  absolute z-50  flex justify-center items-center  bg-black bg-opacity-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="w-[800px] text-black  h-fit  bg-white p-10  rounded-lg ">
        <div className="w-full flex justify-end" onClick={onClose}>
          <button className="text-xl font-bold">X</button>
        </div>
        <p className="text-center font-yBold">
          برای ثبت نام در کاستومی، نقش خود را در همکاری با ما مشخص کنید.
        </p>

        <form
          action="#"
          className="grid grid-cols-2 gap-5 mt-10"
          onChange={(e) => ChoseSelection(e)}
        >
          <label className="col-span-1 p-3 border-gray-400 border rounded-xl grayscale  focus-within:grayscale-0 flex flex-col items-center font-yBold transition-all cursor-pointer">
            <Image
              src={"/illustration/Designer.png"}
              alt="designer cover"
              width={500}
              height={500}
              className="w-full "
            />
            <p className="gap-3 flex">
              <input type="radio" name="userType" value={"designer"} />
              من طراح هستم
            </p>
          </label>

          <label className="col-span-1 p-3 border-gray-400 border rounded-xl grayscale focus-within:grayscale-0  flex flex-col items-center font-yBold transition-all cursor-pointer">
            <Image
              src={"/illustration/Customer (1).png"}
              alt="client cover
              "
              width={500}
              height={500}
              className="w-full "
            />
            <p className="gap-3 flex">
              <input type="radio" name="userType" value={"customer"} />
              من مشتری هستم
            </p>
          </label>

          <div className="w-full flex justify-center col-span-2">
            {isSelected ? (
              <Link
                href={selected === "customer" ? "/U_sign" : "/signup"}
                className="px-10 py-2 bg-red-400 text-white rounded-xl hover:bg-primRed cursor-pointer "
              >
                ثبت نام
              </Link>
            ) : (
              <button
                disabled
                className="px-10 py-2 bg-gray-500 text-white rounded-xl "
              >
                ثبت نام
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
