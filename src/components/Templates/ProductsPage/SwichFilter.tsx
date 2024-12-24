"use client";
import React, { useState } from "react";

type SwichProps = {
  title: string;
};

const SwitchInput: React.FC = ({ title }: SwichProps) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <>
    <div className="flex justify-between h-12 items-center">
        <p>{title}</p>
      <div
        className={`relative inline-flex items-center h-6 w-11 cursor-pointer rounded-full transition-colors ${
            isOn ? "bg-blue-500" : "bg-gray-300"
        }`}
        onClick={toggleSwitch}
        >
        <span
          className={`absolute left-0 w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
            isOn ? "translate-x-5" : "translate-x-0"
            }`}
            ></span>
      </div>
        </div>
    </>
  );
};

export default SwitchInput;
