import React from "react";
import imgOne from "./img/one.jpg";
import imgTwo from "./img/two.jpg";
import imgThree from "./img/three.jpg";
import { TiDeleteOutline } from "react-icons/ti";

const SCCart = () => {
  return (
    <div className="w-full pt-[120px] pb-[100px] overflow-x-visible md:overflow-auto">
      <div className="w-[90%] mx-auto font-poppin">
        <div className="w-full border border-slate-200">
          <div className="flex justify-between px-5 py-5 border-b border-b-slate-200">
            <p className="w-[60%] md:w-[40%] text-[.875rem] text-[#788487] font-[400] leading-[1.8]">
              Product
            </p>
            <p className="hidden md:block w-[11%] text-[.875rem] text-[#788487] font-[400] leading-[1.8]">
              Price
            </p>
            <p className="hidden md:block w-[34%] text-[.875rem] text-[#788487] font-[400] leading-[1.8]">
              Quantity
            </p>
            <p className="w-[15%] text-[.875rem] text-[#788487] font-[400] leading-[1.8]">
              Total
            </p>
          </div>
          <div className="flex justify-between px-2 md:py-5 py-5 border-b border-b-slate-200">
            <div className="w-[40%] flex flex-col md:flex-row">
              <div className="w-[100%] md:w-[20%]">
                <div className="w-[80px] mx-auto md:mx-0 h-[99px]">
                  <img
                    src={imgOne}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[100%] md:w-[80%] text-center md:text-start flex justify-center items-center">
                <div>
                  <p className="text-[.875rem] font-[500] leading-[1.8] cursor-pointer duration-300 hover:text-indigo-500">
                    Solo Headphones
                  </p>
                  <p className="text-[12px] text-[#788487] font-[400] leading-[1.8]">
                    Color: Black | Size: 36.5
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[20%] md:w-[11%] flex justify-start items-center">
              <p className="text-[.875rem] text-[#788487] font-[400] leading-[1.8]">
                $30.00
              </p>
            </div>
            <div className="w-[20%] md:w-[34%] flex justify-start items-center">
              <div className="w-[80%]">
                <input
                  type="number"
                  className="w-full outline-none placeholder:font-poppin placeholder:text-[12px] placeholder:text-[#6f7883] placeholder:tracking-tight border border-slate-200 px-4 py-4"
                  placeholder="1"
                />
              </div>
            </div>
            <div className="w-[20%] md:w-[15%] flex items-center">
              <div className="w-full flex justify-between items-center">
                <p className="text-[.875rem] text-[#788487] font-[400] leading-[1.8]">
                  $30.00
                </p>
                <TiDeleteOutline className="text-indigo-500 text-2xl" />
              </div>
            </div>
          </div>
          <div className="flex justify-between px-2 md:px-5 py-5">
            <div className="w-[40%] flex flex-col md:flex-row">
              <div className="w-[100%] md:w-[20%]">
                <div className="w-[80px] mx-auto md:mx-0 h-[99px]">
                  <img
                    src={imgTwo}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[100%] md:w-[80%] text-center md:text-start flex justify-center items-center">
                <div>
                  <p className="text-[.875rem] font-[500] leading-[1.8] cursor-pointer duration-300 hover:text-indigo-500">
                    Classic Chair
                  </p>
                  <p className="text-[12px] text-[#788487] font-[400] leading-[1.8]">
                    Color: Black | Size: 36.5
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[20%] md:w-[11%] flex justify-start items-center">
              <p className="text-[.875rem] text-[#788487] font-[400] leading-[1.8]">
                $30.00
              </p>
            </div>
            <div className="w-[20%] md:w-[34%] flex justify-start items-center">
              <div className="w-[80%]">
                <input
                  type="number"
                  className="w-full outline-none placeholder:font-poppin placeholder:text-[12px] placeholder:text-[#6f7883] placeholder:tracking-tight border border-slate-200 px-4 py-4"
                  placeholder="1"
                />
              </div>
            </div>
            <div className="w-[20%] md:w-[15%] flex items-center">
              <div className="w-full flex justify-between items-center">
                <p className="text-[.875rem] text-[#788487] font-[400] leading-[1.8]">
                  $30.00
                </p>
                <TiDeleteOutline className="text-indigo-500 text-2xl" />
              </div>
            </div>
          </div>
          <div className="flex justify-between px-2 md:px-5 py-5">
            <div className="w-[40%] flex flex-col md:flex-row">
              <div className="w-[100%] md:w-[20%]">
                <div className="w-[80px] mx-auto md:mx-0 h-[99px]">
                  <img
                    src={imgThree}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[100%] md:w-[80%] text-center md:text-start flex justify-center items-center">
                <div>
                  <p className="text-[.875rem] font-[500] leading-[1.8] cursor-pointer duration-300 hover:text-indigo-500">
                    Folder Calendar
                  </p>
                  <p className="text-[12px] text-[#788487] font-[400] leading-[1.8]">
                    Color: Black | Size: 36.5
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[20%] md:w-[11%] flex justify-start items-center">
              <p className="text-[.875rem] text-[#788487] font-[400] leading-[1.8]">
                $30.00
              </p>
            </div>
            <div className="w-[20%] md:w-[34%] flex justify-start items-center">
              <div className="w-[80%]">
                <input
                  type="number"
                  className="w-full outline-none placeholder:font-poppin placeholder:text-[12px] placeholder:text-[#6f7883] placeholder:tracking-tight border border-slate-200 px-4 py-4 "
                  placeholder="1"
                />
              </div>
            </div>
            <div className="w-[20%] md:w-[15%] flex items-center">
              <div className="w-full flex justify-between items-center">
                <p className="text-[.875rem] text-[#788487] font-[400] leading-[1.8]">
                  $30.00
                </p>
                <TiDeleteOutline className="text-indigo-500 text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-b border-slate-200 flex flex-col sm:flex-row sm:justify-between items-center py-4">
          <div className="w-[100%] md:w-[50%] flex flex-col sm:flex-row sm:justify-between gap-4">
            <div className="w-[100%] sm:w-[50%] md:w-[50%] lg:w-[70%]">
              <input
                type="number"
                className="w-full outline-none placeholder:font-poppin placeholder:text-[12px] placeholder:text-[#6f7883] placeholder:tracking-tight border border-slate-200 px-4 py-4"
                placeholder="1"
              />
            </div>
            <div className="w-[100%] sm:w-[50%] md:w-[50%] lg:w-[30%]">
              <button className="w-full sm:w-auto px-6 py-4 border-2 border-indigo-500 rounded-sm text-[.75rem] text-indigo-500 font-[600] uppercase tracking-[.1125rem] duration-500 hover:text-white hover:bg-indigo-500">
                Apply Cuppon
              </button>
            </div>
          </div>
          <div></div>
          <div className="w-[100%] sm:w-[50%] flex justify-end items-center pt-4 sm:pt-0">
            <div className="w-[100%] sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-4 border-2 border-indigo-500 rounded-sm text-[.75rem] text-white bg-indigo-500  font-[600] uppercase tracking-[.1125rem] duration-500 hover:bg-indigo-600">
                Update Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SCCart;
