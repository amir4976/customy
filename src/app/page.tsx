import React from "react";
import Navbar from "@/components/modules/Navbar/Navbar";
import Hero from "@/components/Templates/mainPage/Hero/Hero";
import Links from "@/components/Templates/mainPage/Links/Links";
import Title from "@/components/modules/MainPage/Title";
import { RiMedalFill } from "react-icons/ri";
import Category from "@/components/Templates/mainPage/Category/Category";
import TopSalles from "@/components/Templates/mainPage/topSells/TopSalles";
import SpecialSells from "@/components/Templates/mainPage/SpecialSells/SpecialSells";
import MostPopular from "@/components/Templates/mainPage/MostPopular/MostPopular";
import BestDesigners from "@/components/Templates/mainPage/BestDesigners/BestDesigners";
import SpecialEcation from "@/components/Templates/mainPage/specialEcation/SpecialEcation";
import LastestDesign from "@/components/Templates/mainPage/LastestDesigns/LastestDesign";
import Favorites from "@/components/Templates/mainPage/Favorites/Favorites";
import Footer from "@/components/modules/Footer/Footer";

// Define the type for each section
interface Section {
  id: string;
  title: string | null; // Nullable for sections without titles
  component: JSX.Element;
}

// Define the sections array with strict typing
const sections: Section[] = [
  { id: "categories", title: "دسته بندی محصولات", component: <Category /> },
  { id: "top-sells", title: "پر فروش ترین ها", component: <TopSalles /> },
  { id: "special-sells", title: "فروش ویژه", component: <SpecialSells /> },
  { id: "most-popular", title: "طرح های پر طرفدار", component: <MostPopular /> },
  { id: "best-designers", title: "برترین طراحان", component: <BestDesigners /> },
  { id: "special-education", title: null, component: <SpecialEcation /> },
  { id: "latest-designs", title: "جدیدترین های هفته", component: <LastestDesign /> },
  { id: "favorites", title: "دیگران می پسندند", component: <Favorites /> },
];   

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="w-full h-fit max-w-7xl mx-auto px-3">
        {/* Static Sections */}
        <Links />
        <Hero />

        {/* Dynamic Sections */}
        {sections.map((section) => (
          <section key={section.id} className="mt-8">
            {section.title && (
              <Title title={section.title} link="/" icon={<RiMedalFill />} />
            )}
            {section.component}
          </section>
        ))}

      </main>
      <Footer/>

    </>
  );
};

export default Home;
