import React from "react";
import { HiSearch } from "react-icons/hi";
import imgOne from "../../img/one.jpg";
import imgTwo from "../../img/two.jpg";
import imgThree from "../../img/three.jpg";
import blogImgOne from "../../img/blogImageOne.jpg";
import blogImgTwo from "../../img/blogImageTwo.jpg";
import blogImgThree from "../../img/blogImageThree.jpg";
import blogImgFour from "../../img/blogImageFour.jpg";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const PAbout = () => {
  return (
    <div className="w-full pt-[120px]">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row font-poppin">
        <div className="w-[100%] md:w-[65%] pb-[100px]">
          <div className="w-full pb-[35px] mb-[45px] border-b border-slate-200">
            <div className="w-full mb-[35px] duration-500 hover:-translate-y-[4px]">
              <img
                src={blogImgOne}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-[1.5625rem] font-[500] leading-[1.3] mb-[8px]">
                Bluetooth Speaker
              </h1>
              <div className="gap-x-4 flex flex-wrap mb-[30px]">
                <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#a3a6a8]">
                  November 18,2016
                </p>
                <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#a3a6a8]">
                  /
                </p>
                <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#a3a6a8]">
                  Branding, Design
                </p>
                <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#a3a6a8]">
                  /
                </p>
                <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#a3a6a8]">
                  3 Comments
                </p>
              </div>
              <p className="text-[.875rem] font-[400] leading-[1.8] text-[#788487] ">
                Just then her head struck against the roof of the hall in fact
                she was now more than nine feet high and she at once took up the
                little golden key and hurried off to the garden door. The first
                question of course was, how to get dry again: they had a
                consultation about this, and after a few minutes it seemed quite
                natural to Alice to find herself talking familiarly with them.
              </p>
              <a
                href="#"
                className="text-[.875rem] font-[400] leading-[1.8] text-[#505cfd]"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="w-full pb-[35px] mb-[45px] border-b border-slate-200">
            <div className="w-full mb-[35px] duration-500 hover:-translate-y-[4px]">
              <img
                src={blogImgTwo}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-[1.5625rem] font-[500] leading-[1.3] mb-[8px]">
                Minimalist Chandelier
              </h1>
              <div className="gap-x-4 flex flex-wrap mb-[30px]">
                <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#a3a6a8]">
                  November 18,2016
                </p>
                <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#a3a6a8]">
                  /
                </p>
                <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#a3a6a8]">
                  Branding, Design
                </p>
                <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#a3a6a8]">
                  /
                </p>
                <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#a3a6a8]">
                  3 Comments
                </p>
              </div>
              <p className="text-[.875rem] font-[400] leading-[1.8] text-[#788487] ">
                Just then her head struck against the roof of the hall in fact
                she was now more than nine feet high and she at once took up the
                little golden key and hurried off to the garden door. The first
                question of course was, how to get dry again: they had a
                consultation about this, and after a few minutes it seemed quite
                natural to Alice to find herself talking familiarly with them.
              </p>
              <a
                href="#"
                className="text-[.875rem] font-[400] leading-[1.8] text-[#505cfd]"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="w-full pb-[35px] mb-[45px] border-b border-slate-200">
            <div className="w-full mb-[35px] duration-500 hover:-translate-y-[4px]">
              <img
                src={blogImgThree}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-[1.5625rem] font-[500] leading-[1.3] mb-[8px]">
                Standard Shape
              </h1>
              <div className="gap-x-4 flex flex-wrap mb-[30px]">
                <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#a3a6a8]">
                  November 18,2016
                </p>
                <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#a3a6a8]">
                  /
                </p>
                <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#a3a6a8]">
                  Branding, Design
                </p>
                <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#a3a6a8]">
                  /
                </p>
                <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#a3a6a8]">
                  3 Comments
                </p>
              </div>
              <p className="text-[.875rem] font-[400] leading-[1.8] text-[#788487] ">
                Just then her head struck against the roof of the hall in fact
                she was now more than nine feet high and she at once took up the
                little golden key and hurried off to the garden door. The first
                question of course was, how to get dry again: they had a
                consultation about this, and after a few minutes it seemed quite
                natural to Alice to find herself talking familiarly with them.
              </p>
              <a
                href="#"
                className="text-[.875rem] font-[400] leading-[1.8] text-[#505cfd]"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="w-full pb-[35px] mb-[45px]">
            <div className="w-full mb-[35px] duration-500 hover:-translate-y-[4px]">
              <img
                src={blogImgFour}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-[1.5625rem] font-[500] leading-[1.3] mb-[8px]">
                Street Fashion
              </h1>
              <div className="gap-x-4 flex flex-wrap mb-[30px]">
                <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#a3a6a8]">
                  November 18,2016
                </p>
                <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#a3a6a8]">
                  /
                </p>
                <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#a3a6a8]">
                  Branding, Design
                </p>
                <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#a3a6a8]">
                  /
                </p>
                <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#a3a6a8]">
                  3 Comments
                </p>
              </div>
              <p className="text-[.875rem] font-[400] leading-[1.8] text-[#788487] ">
                Just then her head struck against the roof of the hall in fact
                she was now more than nine feet high and she at once took up the
                little golden key and hurried off to the garden door. The first
                question of course was, how to get dry again: they had a
                consultation about this, and after a few minutes it seemed quite
                natural to Alice to find herself talking familiarly with them.
              </p>
              <a
                href="#"
                className="text-[.875rem] font-[400] leading-[1.8] text-[#505cfd]"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <div className="rounded-full duration-300 hover:bg-slate-200 px-1 py-1 cursor-pointer">
              <BiChevronLeft className="text-xl text-[#788487] duration-300 hover:text-black" />
            </div>
            <div className="rounded-full text-white bg-indigo-500 duration-300 w-8 h-8 flex justify-center items-center cursor-pointer">
              <div>1</div>
            </div>
            <div className="rounded-full text-[#788487] duration-300 hover:text-black hover:bg-slate-200 w-8 h-8 flex justify-center items-center cursor-pointer">
              <div>2</div>
            </div>
            <div className="rounded-full text-[#788487] duration-300 hover:text-black hover:bg-slate-200 w-8 h-8 flex justify-center items-center cursor-pointer">
              <div>3</div>
            </div>
            <div className="rounded-full text-[#788487] duration-300 hover:text-black hover:bg-slate-200 w-8 h-8 flex justify-center items-center cursor-pointer">
              <div>4</div>
            </div>
            <div className="rounded-full duration-300 hover:bg-slate-200 px-1 py-1 cursor-pointer">
              <BiChevronRight className="text-xl text-[#788487] duration-300 hover:text-black" />
            </div>
          </div>
        </div>
        <div className="w-[100%] md:w-[35%] h-auto md:h-[100vh]">
          <div className="w-[100%] md:w-[90%] md:ml-auto flex justify-between items-center border border-slate-300 px-4 py-3  mb-[60px]">
            <input
              type="text"
              className="w-[80%] outline-none placeholder:font-poppin placeholder:text-[13px] placeholder:text-[#6f7883] placeholder:tracking-tight"
              placeholder="Type Search Words"
            />
            <HiSearch className="text-[#dddddd]" />
          </div>
          <div className="w-[100%] md:w-[90%] md:ml-auto">
            <h1 className="text-[.6875rem] font-[700] tracking-[2.6px] uppercase mb-[14px]">
              Categories
            </h1>
            <div className="flex justify-between text-[.8125rem] leading[1.8] font-[400] text-[#788487] py-3 border-b border-b-slate-200">
              <p className="hover:text-indigo-500 cursor-pointer">Journey</p>
              <p className="hover:text-indigo-500 cursor-pointer">112</p>
            </div>
            <div
              className="flex justify-between text-[.8125rem] leading[1.8] font-[400] text-[#788487]
            py-3  border-b border-b-slate-200"
            >
              <p className="hover:text-indigo-500 cursor-pointer">
                Development
              </p>
              <p className="hover:text-indigo-500 cursor-pointer">86</p>
            </div>
            <div
              className="flex justify-between text-[.8125rem] leading[1.8] font-[400] text-[#788487]
            py-3  border-b border-b-slate-200"
            >
              <p className="hover:text-indigo-500 cursor-pointer">Sport</p>
              <p className="hover:text-indigo-500 cursor-pointer">10</p>
            </div>
            <div
              className="flex justify-between text-[.8125rem] leading[1.8] font-[400] text-[#788487]
            py-3  border-b border-b-slate-200"
            >
              <p className="hover:text-indigo-500 cursor-pointer">
                Photography
              </p>
              <p className="hover:text-indigo-500 cursor-pointer">144</p>
            </div>
            <div
              className="flex justify-between text-[.8125rem] leading[1.8] font-[400] text-[#788487]
            pt-3"
            >
              <p className="hover:text-indigo-500 cursor-pointer">Symphony</p>
              <p className="hover:text-indigo-500 cursor-pointer">18</p>
            </div>
          </div>
          <div className="w-[100%] md:w-[90%] md:ml-auto mt-[60px]">
            <h1 className="text-[.6875rem] font-[700] tracking-[2.6px] uppercase mb-[14px]">
              Recent Posts
            </h1>
            <div className="">
              <div className="flex gap-4 py-4 border-b border-slate-200">
                <div className="w-[64px] h-[64px]">
                  <img
                    src={imgOne}
                    className="w-full h-full object-cover rounded-sm"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#788487]">
                    Map where your photos were taken
                    <br /> and discover local points.
                  </p>
                  <p className="text-[.6875rem] text-[#a3a6a8] font-[400] leading-[1.8]">
                    May 8,2016
                  </p>
                </div>
              </div>
              <div className="flex gap-4 py-4 border-b border-slate-200">
                <div className="w-[64px] h-[64px]">
                  <img
                    src={imgTwo}
                    className="w-full h-full object-cover rounded-sm"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#788487]">
                    Map where your photos were taken
                    <br /> and discover local points.
                  </p>
                  <p className="text-[.6875rem] text-[#a3a6a8] font-[400] leading-[1.8]">
                    May 8,2016
                  </p>
                </div>
              </div>
              <div className="flex gap-4 pt-4 border-b border-slate-200">
                <div className="w-[64px] h-[64px]">
                  <img
                    src={imgThree}
                    className="w-full h-full object-cover rounded-sm"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#788487]">
                    Map where your photos were taken
                    <br /> and discover local points.
                  </p>
                  <p className="text-[.6875rem] text-[#a3a6a8] font-[400] leading-[1.8]">
                    May 8,2016
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] md:w-[90%] md:ml-auto mt-[60px]">
            <h1 className="text-[.6875rem] font-[700] tracking-[2.6px] uppercase mb-[14px]">
              Twitter Feed
            </h1>
          </div>
          <div className="w-[100%] md:w-[90%] md:ml-auto mt-[60px]">
            <h1 className="text-[.6875rem] font-[700] tracking-[2.6px] uppercase mb-[14px]">
              Tags
            </h1>
            <div className="flex flex-col gap-4">
              <div className="space-x-2">
                <a
                  href="#"
                  className="text-[.4875rem] tracking-[.0625rem] rounded-[.1875rem] bg-[#f4f4f4] py-2 px-3 uppercase font-[400] duration-300 hover:text-white hover:bg-indigo-400"
                >
                  E-commerce
                </a>
                <a
                  href="#"
                  className="text-[.4875rem] tracking-[.0625rem] rounded-[.1875rem] bg-[#f4f4f4] py-2 px-3 uppercase font-[400] duration-300 hover:text-white hover:bg-indigo-400"
                >
                  Portfolio
                </a>
                <a
                  href="#"
                  className="text-[.4875rem] tracking-[.0625rem] rounded-[.1875rem] bg-[#f4f4f4] py-2 px-3 uppercase font-[400] duration-300 hover:text-white hover:bg-indigo-400"
                >
                  Responsive
                </a>
              </div>
              <div className="space-x-2">
                <a
                  href="#"
                  className="text-[.4875rem] tracking-[.0625rem] rounded-[.1875rem] bg-[#f4f4f4] py-2 px-3 uppercase font-[400] duration-300 hover:text-white hover:bg-indigo-400"
                >
                  Bootstap
                </a>
                <a
                  href="#"
                  className="text-[.4875rem] tracking-[.0625rem] rounded-[.1875rem] bg-[#f4f4f4] py-2 px-3 uppercase font-[400] duration-300 hover:text-white hover:bg-indigo-400"
                >
                  Bussiness
                </a>
                <a
                  href="#"
                  className="text-[.4875rem] tracking-[.0625rem] rounded-[.1875rem] bg-[#f4f4f4] py-2 px-3 uppercase font-[400] duration-300 hover:text-white hover:bg-indigo-400"
                >
                  Corporate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PAbout;
