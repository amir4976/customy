import Link from "next/link";
import React from "react";

type Props = { title: string; link?: string ,icon:React.ReactNode};

function Title({ title, link,icon }: Props) {
  return (
    <div className="w-full h-fit flex items-center justify-between">
      <p className="text-3xl font-yBold flex items-center  text-nowrap p-3 ml-5 ">
        {" "}
        <span>{icon}</span>
        {title}
      </p>
      <div className="line border-b-2 w-full border-gray-200 h-0  flex-grow"></div>
      {link && (
        <Link
          href={link}
          className="text-btnBg font-yBold inline-block text-nowrap  p-3 mr-5"
        >
          مشاهده همه
        </Link>
      )}
    </div>
  );
}

export default Title;
