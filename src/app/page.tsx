import Navbar from "@/components/modules/Navbar/Navbar";
import Hero from "@/components/Templates/mainPage/Hero/Hero";
import Links from "@/components/Templates/mainPage/Links/Links";
import Title from "@/components/modules/MainPage/Title";
import React from "react";
import { RiMedalFill } from "react-icons/ri";
import Category from "@/components/Templates/mainPage/Category/Category";

export default function Home() {
  return (
    <>
    <div className="w-full h-fit max-w-7xl mx-auto px-5">
        <Navbar/>
        <Links/>
        <Hero/>
        {/* categorys  */}
       <Title title={'دسته بندی محصولات'} link={'/'} icon={<RiMedalFill />}/>
       <Category/>
       <Title title={'پر فروش ترین ها'} link={'/'} icon={<RiMedalFill />}/>
       
       <Title title={'فروش ویژه'} link={'/'} icon={<RiMedalFill />}/>
       <Title title={'طرح های پر طرفدار'} link={'/'} icon={<RiMedalFill />}/>
       <Title title={'جدیدترین طرح های هفته'} link={'/'} icon={<RiMedalFill />}/>
       <Title title={'دیگران می پسندند'} link={'/'} icon={<RiMedalFill />}/>




    </div>
    </>
  );
}
