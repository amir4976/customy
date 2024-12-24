"use client";
import React, { useState, useEffect, useRef } from "react";
import { IoCaretDownOutline } from "react-icons/io5";

interface ProductType {
  name: string;
  title: string;
}

interface SelectorFilterProps {
  title: string;
  options: ProductType[];
}

const SelectorFilter: React.FC<SelectorFilterProps> = ({ title, options }) => {
  const [isShowSelector, setIsShowSelector] = useState<boolean>(false);
  const selectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
        setIsShowSelector(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={selectorRef}
      className="w-full h-12 border-b flex justify-between items-center relative"
      onClick={() => setIsShowSelector((prev) => !prev)}
    >
      <span>{title}</span>
      <span>
        <IoCaretDownOutline />
      </span>

      <div
        className={`absolute w-full h-fit bg-white border  top-12 p-3 rounded-b-xl z-50 shadow-md transition-all ${
          isShowSelector ? "" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-3">
          {options.map((option) => (
            <li key={option.name} className="cursor-pointer">
              {option.title} 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectorFilter;
