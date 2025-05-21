import compose from "../../images/compose.webp";
import Customer from "../../images/customer1.jpg";

const Compose = () => {
  return (
    <div className="bg-[#042B45] w-full py-10 sm:py-16 md:py-[0px]">
      <div className="max-w-full flex flex-col lg:flex-row shadow-lg border-1 border-[#6a6ae9] rounded-[10px] group md:mx-10 mx-7 md:mb-10 overflow-hidden">
        {/* image */}
        <div className="lg:w-[35%] w-full ">
          {/* image wrapper */}
          <img
            src={compose}
            alt="compose"
            className="group-hover-rounded-t-[10px] group-hover:scale-105 transition-transform duration-300 ease-in-out w-full h-full object-cover"
          />
        </div>

        {/* text wrapper */}
        <div className="text-white p-6 sm:p-8 md:p-10 lg:w-[65%] w-full ">
          <h1 className="py-7 text-[20px] sm:text-[25px] font-medium leading-10">
            Making sense of Composability
          </h1>
          <p className="text-[16px] font-normal leading-relaxed">
            Enterprises are increasingly embracing composable CXM. Discover how
            our unique CXM Reference Framework supports the assessment and
            decomposition of CXM ecosystems, helping businesses scale their
            operations with confidence.
          </p>

          {/* avatar with text */}
          <div className="bg-[#022D49] text-white p-6 rounded-md max-w-md">
            <div className="flex items-center mb-4">
              <span className="text-sm font-semibold">16 October 2024</span>
              <span className="text-sm font-semibold px-2">
                / COMPOSABILITY
              </span>
            </div>

            <div className="flex items-center gap-4">
              <img
                src={Customer}
                alt="Customer"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-lg leading-tight">
                  Jan Lemmens
                </p>
                <p className="text-sm text-white opacity-80">
                  Solution Manager CXM
                </p>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Compose;
