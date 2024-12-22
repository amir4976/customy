// components/Footer.tsx
import React from "react";
import { FaGithub, FaInstagram, FaPinterest } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebook, TiSocialYoutube } from "react-icons/ti";

const Footer: React.FC = () => {
  return (
    <footer className=" text-white mt-10 ">
      <div className="bg-[#641C23] py-8 flex justify-center items-center max-md:px-3">
        <div className="w-full max-w-7xl flex justify-between  max-md:flex-col ">
          {/* hidden on mobile */}
          <div className="input max-md:hidden">
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
          <div className="social flex flex-col gap-3 max-md:hidden">
            باما در شبکه های اجتماعی
            <div className="flex gap-3">
              <FaInstagram />
              <FaGithub />
            </div>
          </div>

          {/* hidden on desktop (visable in mobile)*/}
          <div className="w-full flex flex-col gap-5 justify-center items-center md:hidden">
            <span>تماس با پشتیبانی : ۰۲۱-۳۴۵۶۰۰۰ </span>
            <span>پاسخگویی ۲۴ ساعته ، ۷ روز هفته </span>
            <div className=" flex gap-3 text-2xl">
              <TiSocialYoutube />
              <FaPinterest />
              <TiSocialFacebook />
              <SlSocialInstagram />
            </div>
            <span>
              تمام حقوق این وبسایت متعلق به فروشگاه آنلاین کاستومی می باشد
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#A72F3B] py-8 flex justify-center items-center max-md:hidden max-md:px-3">
        <div className="w-full max-w-7xl flex justify-between  max-md:flex-col ">
          <ul className="flex gap-3 flex-col max-md:mt-10">
            <li className=" underline font-yBold">همراه با کاستومی</li>
            <li>فروش محصولات </li>
            <li>فرصت همکاری</li>
            <li>تماس با ما </li>
            <li>نقشه سایت</li>
          </ul>

          <ul className="flex gap-3 flex-col max-md:mt-10  ">
            <li className=" underline font-yBold">همراه با کاستومی</li>
            <li>فروش محصولات </li>
            <li>فرصت همکاری</li>
            <li>تماس با ما </li>
            <li>نقشه سایت</li>
          </ul>

          <ul className="flex gap-3 flex-col max-md:mt-10">
            <li className=" underline font-yBold">همراه با کاستومی</li>
            <li>فروش محصولات </li>
            <li>فرصت همکاری</li>
            <li>تماس با ما </li>
            <li>نقشه سایت</li>
          </ul>

          <div className="flex flex-col gap-3 items-center ">
            <div className="text-3xl font-yBold">فروشگاه اینترنتی کاستومی</div>
            <div className="flex gap-10">
              {" "}
              <span>۰۲۱-۳۴۵۶۰۰۰: تماس با پشتیبانی </span>
              <span>پاسخگویی ۲۴ ساعته ، ۷ روز هفته </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
