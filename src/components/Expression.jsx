import React from "react";

const Expression = ({ children }) => {
  return (
    <div>
      <p className="text-[0.9375rem] font-[400] text-[#788487] leading-[1.8] tracking-[.01875rem">
        {children}
      </p>
    </div>
  );
};

export default Expression;
