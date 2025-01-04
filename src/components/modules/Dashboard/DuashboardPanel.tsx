import Image from "next/image";
import React from "react";
import { FaCamera, FaRegUser } from "react-icons/fa6";
import { GrHomeRounded } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { MdShowChart } from "react-icons/md";
import {
  RiGalleryView2,
  RiLogoutCircleRLine,
  RiTodoLine,
  RiUserFollowLine,
} from "react-icons/ri";

function DuashboardPanel() {
  const isAdmin: boolean = true;
  return (
    <div className="sticky top-5 ">
      <div className="w-full flex justify-center  border rounded-xl p-5  ">
        <div className="w-full flex  items-center flex-col">
          <div className="profileImg  relative">
            <div className=" overflow-hidden rounded-full">
              <Image
                src={"/assets/images (1).jpg"}
                height={100}
                width={100}
                alt={"profile"}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-10 h-10 bg-primRed text-white  rounded-full items-center  justify-center flex absolute bottom-0 left-0 hover:scale-110 transition-all ">
              <FaCamera />
            </div>
          </div>
          <div className="w-full text-center mt-3 ">
            <p>نگار زمانی</p>
            <p>XXXXXX@gmail.com</p>
          </div>

          <div className="w-full flex  p-3 flex-col">
            <div className="flex justify-between items-center w-full">
              <span>اعتبار خرید</span>
              <span>{(1000000).toLocaleString("fa-ir")} تومان</span>
            </div>
            <div className="flex justify-between items-center w-full">
              <span>تعداد طرح ها</span>
              <span>{(45).toLocaleString("fa-ir")} </span>
            </div>
            <div className="flex justify-between items-center w-full">
              <span>تعداد سفارش ها</span>
              <span>{(0).toLocaleString("fa-ir")}</span>
            </div>
            {/*  if user is admin show this  */}
            {isAdmin ? (
              <>
                <div className="flex justify-between items-center w-full">
                  <span>تعداد دنبال کننده</span>
                  <span>{(0).toLocaleString("fa-ir")}</span>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>

          <ul className="w-full flex flex-col  [&>li]:p-3 text-xl [&>li]:flex  [&>li]:gap-2  ">
            <li className="hover:text-primRed  hover:border-b hover:border-primRed border-b">
              <GrHomeRounded />
              داشبورد
            </li>
            {/*  if user is admin show this  */}

            {isAdmin ? (
              <>
                <li className="hover:text-primRed  hover:border-b hover:border-primRed border-b">
                  <RiTodoLine />
                  میزکار
                </li>
              </>
            ) : (
              <></>
            )}
            <li className="hover:text-primRed  hover:border-b hover:border-primRed border-b">
              <MdShowChart />
              تاریخچه سفارشات
            </li>
            <li className="hover:text-primRed  hover:border-b hover:border-primRed border-b">
              <RiGalleryView2 />
              گالری
            </li>
            <li className="hover:text-primRed  hover:border-b hover:border-primRed border-b">
              <IoLocationOutline />
              ادرس ها
            </li>
            <li className="hover:text-primRed  hover:border-b hover:border-primRed border-b">
              <RiUserFollowLine />
              دنبال شوندگان
            </li>
            <li className="hover:text-primRed  hover:border-b hover:border-primRed border-b">
              <FaRegUser />
              اطلاعات حساب کاربری
            </li>
            <li className="hover:text-primRed  hover:border-b hover:border-primRed border-b">
              <RiLogoutCircleRLine />
              خروج
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DuashboardPanel;
