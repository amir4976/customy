"use client";
import Footer from "@/components/modules/Footer/Footer";
import Navbar from "@/components/modules/Navbar/Navbar";
import ProductsCard from "@/components/modules/products/ProductsCard";
import Links from "@/components/Templates/mainPage/Links/Links";
import ProductsFilterMenu from "@/components/Templates/ProductsPage/ProductsFilterMenu";
import React from "react";
import Pagination from "@/components/modules/pagination/Pagination";

function page() {
  const data = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);
  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-7xl">
          <Links />
          <div className="w-full grid grid-cols-4  mt-10 ">
            <div className="col-span-1  ">
              <ProductsFilterMenu />
            </div>
            <Pagination data={data} itemsPerPage={6}>
              {(currentData) => (
                
                  <div className="p-5 grid grid-cols-3   ">
                    {currentData.map((index) => (
                      <div className="col-span-1" key={index}>
                        <ProductsCard />
                      </div>
                    ))}
                  </div>
               
              )}
            </Pagination>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
