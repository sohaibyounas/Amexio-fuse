import { useState } from "react";
import compose from "../../images/compose.webp";

const Compose = () => {
  return (
    <div className="bg-[#042B45] w-full py-10 sm:py-16 md:py-[70px] ">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-10 shadow-lg border-1 border-[#6a6ae9] rounded-[10px] group">
        {/* image */}
        <div>
          <img src={compose} alt="compose" className="rounded-l-[10px] group-hover:scale-95 transition-transform duration-300 ease-in-out" />
        </div>
        {/* text */}
        <div className="text-white">
          <h1 className="py-7 text-[25px] font-medium leading-10">
            Making sense of Composability
          </h1>
          <p className="text-[16px] font-normal leading-7">
            Enterprises are increasingly embracing composable CXM. Discover how
            our unique CXM Reference Framework supports the assessment and
            decomposition of CXM ecosystems, helping businesses scale their
            operations with confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Compose;
