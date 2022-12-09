import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import { useScrollPosition } from "../../useScrollPosition";
import { TiDeleteOutline } from "react-icons/ti";
import boomarang from "../../img/Boomarng.png";
import one from "../../img/one.jpg";
import two from "../../img/two.jpg";
import three from "../../img/three.jpg";
import four from "../../img/four.jpg";
import five from "../../img/five.jpg";
import six from "../../img/six.jpg";
import seven from "../../img/seven.jpg";
import eight from "../../img/eight.jpg";
import nine from "../../img/nine.jpg";
import { useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Nav = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav((pre) => !pre);
  };

  const handleCloseTag = () => {
    setNav((pre) => (pre = true));
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();

  console.log(scrollPosition);

  return (
    <>
      <div
        className={classNames(
          scrollPosition > 0
            ? "scale-y-[110%] text-black bg-white shadow-lg"
            : "scale-y-1 text-black bg-white",
          "w-full flex justify-between items-stretch px-6 font-poppin border-b-[1px]  border-b-lightWhite fixed z-10 h-[72px] duration-500 orign-top top-0 mt-0 pt-0"
        )}
      >
        <div className="w-full h-auto flex justify-between relative">
          <div className="flex items-center w-[20%]">
            <a href="#" className="text-[1.25rem] font-[600]">
              Boomarag
            </a>
          </div>
          <ul
            className={classNames(
              scrollPosition > 0 ? "" : "",
              "hidden lg:flex justify-between items-center w-[45%]  gap-6 uppercase text-[0.75rem] font-[600]"
            )}
          >
            <li
              className={classNames(
                scrollPosition > 0 ? "after:bg-white" : "after:bg-white",
                "relative h-full flex items-center after:absolute after:bottom-0 after:w-[14px] after:left-[50%] after:-translate-x-[50%] after:h-[1.2px] hover:after:w-full after:duration-500 cursor-pointer"
              )}
            >
              <NavLink
                to="/"
                className="flex items-center"
                onClick={() => window.scrollTo(0, 0)}
              >
                Home
              </NavLink>
            </li>
            <li
              className={classNames(
                scrollPosition > 0 ? "after:bg-white" : "after:bg-white",
                "relative h-full flex items-center after:absolute after:bottom-0 after:w-[14px] after:left-[50%] after:-translate-x-[50%] after:h-[1.2px] hover:after:w-full after:duration-500 cursor-pointer"
              )}
            >
              <NavLink
                to="/page"
                className="flex items-center"
                onClick={() => window.scrollTo(0, 0)}
              >
                Pages
              </NavLink>
            </li>
            <li
              className={classNames(
                scrollPosition > 0 ? "after:bg-white" : "after:bg-white",
                "relative h-full flex items-center after:absolute after:bottom-0 after:w-[14px] after:left-[50%] after:-translate-x-[50%] after:h-[1.2px] hover:after:w-full after:duration-500 cursor-pointer"
              )}
            >
              <NavLink
                to="/portfolio"
                className="flex items-center"
                onClick={() => window.scrollTo(0, 0)}
              >
                Porfolio
              </NavLink>
            </li>
            <li
              className={classNames(
                scrollPosition > 0 ? "after:bg-white" : "after:bg-white",
                "relative h-full flex items-center after:absolute after:bottom-0 after:w-[14px] after:left-[50%] after:-translate-x-[50%] after:h-[1.2px] hover:after:w-full after:duration-500 cursor-pointer"
              )}
            >
              <NavLink
                to="/blog"
                className="flex items-center"
                onClick={() => window.scrollTo(0, 0)}
              >
                Blog
              </NavLink>
            </li>
            <li
              className={classNames(
                scrollPosition > 0 ? "after:bg-white" : "after:bg-white",
                "relative h-full flex items-center after:absolute after:bottom-0 after:w-[14px] after:left-[50%] after:-translate-x-[50%] after:h-[1.2px] hover:after:w-full after:duration-500 cursor-pointer"
              )}
            >
              <NavLink
                to="/shop"
                className="flex items-center"
                onClick={() => window.scrollTo(0, 0)}
              >
                Shop
              </NavLink>
            </li>
            <li
              className={classNames(
                scrollPosition > 0 ? "after:bg-white" : "after:bg-white",
                "relative h-full flex items-center after:absolute after:bottom-0 after:w-[14px] after:left-[50%] after:-translate-x-[50%] after:h-[1.2px] hover:after:w-full after:duration-500 cursor-pointer"
              )}
            >
              <NavLink
                to="/checkout"
                className="flex items-center"
                onClick={() => window.scrollTo(0, 0)}
              >
                CheckOut
              </NavLink>
            </li>
            <li
              className={classNames(
                scrollPosition > 0 ? "after:bg-white" : "after:bg-white",
                "relative h-full flex items-center after:absolute after:bottom-0 after:w-[14px] after:left-[50%] after:-translate-x-[50%] after:h-[1.2px] hover:after:w-full after:duration-500 cursor-pointer"
              )}
            >
              <NavLink
                to="/demo"
                className="flex items-center"
                onClick={() => window.scrollTo(0, 0)}
              >
                Demos
              </NavLink>
            </li>
          </ul>
          <div className="flex w-[20%] justify-end items-center gap-6 pl-6 border-l border-l-lightWhite">
            <NavLink
              to="/category"
              className="text-xl cursor-pointer relative"
              onclick={() => window.scrollTo(0, 0)}
            >
              <AiOutlineShoppingCart />
              <div className="absolute -top-1 -left-1 bg-indigo-500 rounded-full text-[.5rem] leading-[10px] font-[600] w-[80%] h-[80%] flex justify-center items-center">
                3
              </div>
            </NavLink>
            <div className="text-xl" onClick={handleNav}>
              <HiOutlineMenu />
            </div>
          </div>
        </div>
        <div
          className={classNames(
            nav ? "scale-y-0" : "scale-y-1 lg:scale-y-0",
            "absolute top-[72px] left-0 w-full h-auto font-poppin z-40 origin-top duration-300"
          )}
        >
          <div className="flex flex-col uppercase pl-4 py-8 gap-y-4 bg-[#222]">
            <div className="text-[0.75rem] font-[600] text-[#fff] tracking-[.05625rem]">
              <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
                Home
              </NavLink>
            </div>
            <div className="text-[0.75rem] font-[600] text-[#fff] tracking-[.05625rem]">
              <NavLink to="/page" onClick={() => window.scrollTo(0, 0)}>
                Pages
              </NavLink>
            </div>
            <div className="text-[0.75rem] font-[600] text-[#fff] tracking-[.05625rem]">
              <NavLink to="/portfolio" onClick={() => window.scrollTo(0, 0)}>
                Portfolio
              </NavLink>
            </div>
            <div className="text-[0.75rem] font-[600] text-[#fff] tracking-[.05625rem]">
              <NavLink to="/blog" onClick={() => window.scrollTo(0, 0)}>
                Blog
              </NavLink>
            </div>
            <div className="text-[0.75rem] font-[600] text-[#fff] tracking-[.05625rem]">
              <NavLink to="/shop" onClick={() => window.scrollTo(0, 0)}>
                Shop
              </NavLink>
            </div>
            <div className="text-[0.75rem] font-[600] text-[#fff] tracking-[.05625rem]">
              <NavLink to="/checkout" onClick={() => window.scrollTo(0, 0)}>
                CheckOut
              </NavLink>
            </div>
            <div className="text-[0.75rem] font-[600] text-[#fff] tracking-[.05625rem]">
              <NavLink to="/demo" onClick={() => window.scrollTo(0, 0)}>
                Demo
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div
        className={classNames(
          nav ? "hidden" : "visible",
          "w-full h-screen bg-black opacity-40 fixed cursor-pointer"
        )}
        onClick={handleCloseTag}
      ></div>
      <div
        className={classNames(
          nav ? "-right-[100%]" : "-right-[100%] lg:right-0",
          "w-[250px] lg:w-[400px] h-[100vh] bg-black shadow-xl  fixed top-0 z-50 overflow-auto font-poppin duration-300 origin-right"
        )}
      >
        <div className="w-full h-full overflow-hidden">
          <div className="w-full h-full p-[40px] scrollY overflow-y-scroll">
            <div className="flex justify-end">
              <TiDeleteOutline
                className="text-2xl text-white cursor-pointer"
                onClick={handleNav}
              />
            </div>
            <div className="flex flex-col items-center py-14">
              <div className="w-[80px] h-[80px]">
                <img
                  src={boomarang}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <p className="text-center text-[.8125rem] text-[#788487] font-[400] leading-[1.8] pt-4">
                See how users experience your website in
                <br />
                realtime to see changes.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-x-2 gap-y-2">
              <div className="w-full">
                <img src={one} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="w-full">
                <img src={two} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="w-full">
                <img
                  src={three}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-full">
                <img src={four} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="w-full">
                <img src={five} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="w-full">
                <img src={six} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="w-full">
                <img
                  src={seven}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-full">
                <img
                  src={eight}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-full">
                <img src={nine} className="w-full h-full object-cover" alt="" />
              </div>
            </div>
            <div className="flex justify-center text-white gap-4 pt-14">
              <AiOutlineTwitter />
              <AiOutlineInstagram />
              <FaFacebookF />
              <FaPinterestP />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
