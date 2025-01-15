"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/modules/Footer/Footer";
import Navbar from "@/components/modules/Navbar/Navbar";
import SignBradcramp from "@/components/modules/userSign/SignBradcramp";
import { FaPhone, FaUser } from "react-icons/fa6";
import UserSignForm from "@/components/modules/userSign/UserSignForm";
import UserSecondSignForm from "@/components/modules/userSign/userSacondSingForm";

function Page() {
  // Breadcrumb data for the steps
  const BradCrampData = [
    { title: "User Information", icon: <FaUser /> },
    { title: "Contact Information", icon: <FaPhone /> },
  ];

  // State to manage the current step in the multi-step form
  const [currentPage, setCurrentPage] = useState<number>(1);

  // State to collect user data
  const [userData, setUserData] = useState<any[]>([]);

  // Function to handle registration and move to the next step
  const register = () => {
    setCurrentPage((prev) => prev + 1);
  };

  // Log user data whenever it updates (useful for debugging)
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="w-full min-h-[800px] flex justify-center">
        <div className="w-full max-w-7xl h-[500px]">
          {/* Breadcrumb to indicate progress */}
          <SignBradcramp Data={BradCrampData} activePage={currentPage} />

          <div className="flex h-full mt-20 items-center">
            {/* Form Section */}
            <div className="form w-1/2 max-md:w-full">
              {currentPage === 1 ? (
                <UserSignForm setUserData={setUserData} Regester={register} />
              ) : (
                <UserSecondSignForm
                  setUserData={setUserData}
                  Regester={register}
                />
              )}
            </div>

            {/* Illustration Section */}
            <div className="cover w-1/2 h-fit p-10 max-md:hidden">
              <Image
                src="/illustration/cover.png"
                width={500}
                height={500}
                alt="cover"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Page;
