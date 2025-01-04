import CroselProducts from "@/components/modules/Dashboard/CroselProducts";
import DuashboardPanel from "@/components/modules/Dashboard/DuashboardPanel";
import UserOrders from "@/components/modules/Dashboard/UserOrders";
import Footer from "@/components/modules/Footer/Footer";
import Navbar from "@/components/modules/Navbar/Navbar";
import Links from "@/components/Templates/mainPage/Links/Links";
import React from "react";

function page({children}:{children:React.ReactNode})  {
  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center items-center">
        <div className="w-full h-fit max-w-7xl my-10 ">
          <Links />
          <div className="grid grid-cols-4 mt-5 gap-3">
            <div className="col-span-1">
                <DuashboardPanel/>
            </div>
                {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
