import React from "react";
import SCNav from "./SCNav";
import SCHome from "./SCHome";
import SCCart from "./SCCart";
import SCTotal from "./SCTotal";
import Footer from "../Footer";

const SCLook = () => {
  return (
    <>
      <SCNav />
      <SCHome />
      <SCCart />
      <SCTotal />
      <Footer />
    </>
  );
};

export default SCLook;
