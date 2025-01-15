"use client";
import Footer from "@/components/modules/Footer/Footer";
import Navbar from "@/components/modules/Navbar/Navbar";
import ProductsCard from "@/components/modules/products/ProductsCard";
import Links from "@/components/Templates/mainPage/Links/Links";
import ProductsFilterMenu from "@/components/Templates/ProductsPage/ProductsFilterMenu";
import React, { useState } from "react";
// import Pagination from "@/components/modules/pagination/Pagination";
import { Pagination } from "@nextui-org/pagination";

function Page() {
  const data = Array.from({ length: 30}, (_, index) => `Item ${index + 1}`);
  const itemsPerPage = 5;
  const [currentPage ,setCurrentPage]= useState(1)
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = data.slice(start, end);
  const totalPages = Math.ceil(data.length / itemsPerPage);







  
  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-7xl">
          <Links />
          <div className="w-full flex justify-between mt-10 ">
            <div className="flex w-1/4  sticky top-10 h-fit">
              <ProductsFilterMenu />
            </div>
            <div className="flex-col flex">
              <div className="p-5 grid grid-cols-3 flex-1  gap-5 ">

                {
                  currentItems.map((item) => (
                    <div key={item}>
                      <ProductsCard />
                    </div>
                  ))
                }
                <div className="col-span-1">
                  <ProductsCard />
                </div>

              </div>
              <div className="w-full flex justify-center items-center">

              <Pagination initialPage={currentPage} total={totalPages} onChange={(val) => setCurrentPage(val)}  />
              </div>
            </div>
          </div>
        </div>  
      </div>
      <Footer />
    </>
  );
}

export default Page;
