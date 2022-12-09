import React from "react";

const SCTotal = () => {
  return (
    <div className="w-full font-poppin pb-[80px]">
      <div className="w-[90%] mx-auto border border-slate-200">
        <div className="flex justify-between items-center px-5 py-5 border-b border-slate-200">
          <p className="text-[.875rem] text-[#788487] font-[400] leading-[1.8]">
            Subtotal
          </p>
          <p className="text-[.875rem] text-[#788487] font-[400] leading-[1.8]">
            $21.00
          </p>
        </div>
        <div className="flex justify-between items-center px-5 py-5 border-b border-slate-200">
          <p className="text-[.875rem] text-[#788487] font-[400] leading-[1.8]">
            Discount
          </p>
          <p className="text-[.875rem] text-[#788487] font-[400] leading-[1.8]">
            $1.00
          </p>
        </div>
        <div className="flex justify-between items-center px-5 py-5">
          <p className="text-[.875rem] text-[#788487] font-[400] leading-[1.8]">
            Total
          </p>
          <p className="text-[.875rem] text-[#788487] font-[400] leading-[1.8]">
            $20.00
          </p>
        </div>
      </div>
      <div className="w-[90%] mx-auto flex justify-end items-center py-5">
        <button className="px-6 py-4 border-2 border-stone-900 rounded-sm text-[.75rem] text-white font-[600] uppercase tracking-[.1125rem] bg-stone-900 duration-500 hover:text-white hover:bg-indigo-500">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default SCTotal;
