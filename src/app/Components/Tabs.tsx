"use client";
import { SetStateAction, useState } from "react";
import { CiBookmarkCheck } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import Bookmark from "./Bookmark";
import Lists from "./Lists";
import Boards from "./Boards";
import Members from "./Members";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const items = [
    {
      title: (
        <div className="flex gap-2">
          <CiBookmarkCheck className="text-[22px] text-[#6366f1]" />
          <p>Bookmark</p>
        </div>
      ),
      content: <Bookmark />,
    },
    { title: "Lists", content: <Lists /> },
    { title: "Boards", content: <Boards /> },
    { title: "Members", content: <Members /> },
  ];

  const handleTabClick = (index: SetStateAction<number>) => {
    setSelectedTab(index);
  };

  return (
    <div className="bg-white w-full p-10 rounded-lg">
      <div className="pb-10">
        <h1 className=" text-[20px] font-medium">Trash</h1>
        <div className="flex justify-center items-center gap-2 bg-[#e7ecf8] w-[55px] rounded-lg ">
          <CiCircleInfo className="text-[14px]" />
          <p className="text-[12px]">info</p>
        </div>
      </div>
      <div className="flex gap-10 border-b-[1px] border-b-indigo-[#7e8b9f] pb-3 relative">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`text-[#7e8b9f] font-medium hover:text-black focus:text-black ${
              selectedTab === index ? "text-black" : ""
            }`}
          >
            {item.title}
          </button>
        ))}
        <div
          className=" flex justify-center items-center align-middle rounded-lg absolute bottom-0 left-0 right-0 bg-indigo-500 h-1  transition-transform duration-300 ease-in-out"
          style={{
            width: `${100}px`,
            transform: `translateX(${selectedTab * 100}%)`,
          }}
        ></div>
      </div>
      <div>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${selectedTab === index ? "" : "hidden"}`}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
