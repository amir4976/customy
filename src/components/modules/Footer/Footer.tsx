// components/Footer.tsx
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className=" text-white  ">
      <div className="bg-[#641C23] py-8 flex justify-center items-center">
        <div className="w-full max-w-7xl flex justify-between  max-md:flex-col ">
          <div className="input">
            <p>برای ثبت نام در خبر نامه ایمیل خود را وارد کنید</p>
            <div className="flex gap-3  max-md:flex-col ">
              <input
                type="text"
                placeholder="ایمیل خود را وارد کنید"
                className="border w-96 bg-transparent max-md:w-50 border-gray-300 rounded-md px-4 py-2 mr-2"
              />
              <button className="bg-[#782a31] w-40 text-white px-4 py-2 rounded-md">
                ثبت نام
              </button>
            </div>
          </div>
          <div className="social flex flex-col gap-3">
            باما در شبکه های اجتماعی
            <div className="flex gap-3">
              <FaInstagram />
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
