"use client";
import Navbar from "@/components/modules/Navbar/Navbar";
import Image from "next/image";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  identifier: string;
  password: string;
};

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [errorPassword, setErrorPassword] = React.useState<string>("");

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("Form Submitted:", data);
  };

  // Handle error messages dynamically
  React.useEffect(() => {
    if (errors.identifier) {
      setErrorMessage("نام کاربری نمی‌تواند کمتر از 4 کاراکتر باشد");
    } else {
      setErrorMessage("");
    }

    if (errors.password) {
      setErrorPassword("رمز عبور نمی‌تواند کمتر از 4 کاراکتر باشد");
    } else {
      setErrorPassword("");
    }
  }, [errors.identifier, errors.password]);




  

  return (
    <>
      <Navbar />
      <div className="w-full mt-10 flex justify-center items-center">
        <div className="w-full max-w-7xl h-full flex justify-center items-center">
          <div className="w-1/2 max-md:w-full max-md:px-10">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4  w-72 max-md:w-full"
            >
              {/* Identifier Input */}
              <div className="flex flex-col items-center gap-10">
                <p className="text-3xl font-yBold">به کاستومی خوش امدید</p>
                <p className="text-xl ">ورود | ثبت نام</p>
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="identifier" className="text-gray-500">
                    نام کاربری یا ایمیل
                  </label>
                  <input
                    id="identifier"
                    {...register("identifier", {
                      required: true,
                      minLength: 4,
                    })}
                    type="text"
                    className={`w-full h-12 border-2 rounded-lg p-2 ${
                      errors.identifier
                        ? "border-red-500"
                        : "border-gray-300 outline-none "
                    }`}
                  />
                  {errorMessage && (
                    <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
                  )}
                </div>
              </div>

              {/* Password Input */}
              <div className="flex flex-col">
                <label htmlFor="password" className="text-gray-500">
                  کلمه عبور
                </label>
                <input
                  id="password"
                  {...register("password", { required: true, minLength: 4 })}
                  type="password"
                  className={`w-full h-12 border-2 rounded-lg p-2 ${
                    errors.password
                      ? "border-red-500"
                      : "border-gray-300 outline-none "
                  }`}
                />
                {errorPassword && (
                  <p className="text-red-500 text-sm mt-1">{errorPassword}</p>
                )}
              </div>

              {/* Submit Button */}
              <input
                type="submit"
                value="ورود"
                className="w-full h-12 bg-primRed text-white rounded-lg cursor-pointer hover:bg-red-500 transition"
              />
              <button className="w-full h-12 border border-gray-400 hover:border-primRed  rounded-lg cursor-pointer  transition">
                ثبت نام در سایت
              </button>
            </form>
          </div>

          {/* Right Section with Image */}
          <div className="w-1/2 flex justify-center max-md:hidden">
            <Image
              src="/illustration/photo.png"
              alt="login"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
