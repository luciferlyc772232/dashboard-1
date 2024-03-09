import React from "react";
import { CiSquareCheck } from "react-icons/ci";
import { HiChevronUpDown } from "react-icons/hi2";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";

const Members = () => {
  return (
    <div>
      <div className="div flex justify-between pt-8 ">
        <div className="col-1">
          <div>
            <div className="flex align-middle items-center gap-2">
              <CiSquareCheck className="text-[22px]" />
              <p className=" text-[13px] text-[#7e8b9f]">MEMBERS</p>{" "}
              <HiChevronUpDown />
            </div>
          </div>
          <div className="flex gap-2 pt-5">
            <div className="flex gap-2">
              <MdOutlineCheckBoxOutlineBlank className="text-[22px]" />
              <FaInstagram className="text-[26px]" />
            </div>
            <div>
              <h3 className="text-[14px]">Instagram</h3>
              <p className="text-[12px]">https://www.instagram.com/</p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="flex align-middle items-center gap-2">
            <p className=" text-[13px] text-[#7e8b9f]">TRASHED FROM</p>{" "}
            <HiChevronUpDown />
          </div>
          <div className="flex gap-2 pt-5">
            <div className="flex gap-2">
              {/* <FaInstagram className="text-[26px]" /> */}
              <h1 className="text-[26px]">👧🏼</h1>
            </div>
            <div>
              <h3 className="text-[14px]">Personal</h3>
              <p className="text-[12px]">Website Design</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="flex align-middle items-center gap-2">
            <p className=" text-[13px] text-[#7e8b9f]">TRASHED ON</p>{" "}
            <HiChevronUpDown />
          </div>
          <p className=" text-[14px] pt-7">Oct 24, 2022</p>
        </div>
        <div className="col-4">
          <div className="flex align-middle items-center gap-2">
            <p className=" text-[13px] text-[#7e8b9f]">TRASHED BY</p>{" "}
            <HiChevronUpDown />
          </div>
          {/* <div className="flex gap-2 pt-5">
            <div className="flex gap-2">
              <h1 className="text-[26px]">👦🏻</h1>
            </div>
            <div>
              <h3 className="text-[14px]">Hari Newton</h3>
              <p className="text-[12px]">Member</p>
            </div>
          </div> */}
        </div>
        <div className="col-5">
          <div className="flex align-middle items-center gap-2">
            <p className=" text-[13px] text-[#7e8b9f]">RESTORE & DELETE</p>{" "}
            <HiChevronUpDown />
          </div>
          <div className="flex items-center pt-5 gap-1 ">
            <button className=" border rounded-lg px-2  bg-[#f4f7fe] text-[#6c4deb] text-[14px]">
              Restore
            </button>
            <MdKeyboardArrowDown className="border bg-[#f4f7fe]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
