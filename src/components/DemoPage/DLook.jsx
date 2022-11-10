import React from "react";
import Nav from "../Nav";
import DDescription from "./DDescription";
import DHome from "./DHome";
import DImage from "./DImage";
import Footer from "../Footer";

const DLook = () => {
  return (
    <>
      <Nav />
      <DHome />
      <DImage />
      <DDescription />
      <Footer />
    </>
  );
};

export default DLook;
