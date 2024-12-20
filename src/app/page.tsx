import Navbar from "@/components/modules/Navbar/Navbar";
import Hero from "@/components/Templates/mainPage/Hero/Hero";
import Links from "@/components/Templates/mainPage/Links/Links";
import Title from "@/components/modules/MainPage/Title";
import React from "react";
import { RiMedalFill } from "react-icons/ri";
import Category from "@/components/Templates/mainPage/Category/Category";
import TopSalles from "@/components/Templates/mainPage/topSells/TopSalles";
import SpecialSells from "@/components/Templates/mainPage/SpecialSells/SpecialSells";
import MostPopular from "@/components/Templates/mainPage/MostPopular/MostPopular";
import BestDesigners from "@/components/Templates/mainPage/BestDesigners/BestDesigners";
import SpecialEcation from "@/components/Templates/mainPage/specialEcation/SpecialEcation";
import LastestDesign from "@/components/Templates/mainPage/LastestDesigns/LastestDesign";
import Favorites from "@/components/Templates/mainPage/Favorites/Favorites";
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

       {/* top sells  */}
       <Title title={'پر فروش ترین ها'} link={'/'} icon={<RiMedalFill />}/>
        <TopSalles/>


       { /* specoial sells  */} 
       <Title title={'فروش ویژه'} link={'/'} icon={<RiMedalFill />}/>
         <SpecialSells/>

    
          
        {/* most popular  */}
       <Title title={'طرح های پر طرفدار'} link={'/'} icon={<RiMedalFill />}/>
        <MostPopular/>



      {/* best designers  */}
        <Title title={'برترین طراحان'} link={'/'} icon={<RiMedalFill />}/>
        <BestDesigners/>
        <SpecialEcation/>

        {/* newst designs of the week */}
       <Title title={'جدیدترین های هفته'} link={'/'} icon={<RiMedalFill />}/>
      <LastestDesign/>

       {/* others like  */}
       <Title title={'دیگران می پسندند'} link={'/'} icon={<RiMedalFill />}/>
        <Favorites/>



    </div>
    </>
  );
}
