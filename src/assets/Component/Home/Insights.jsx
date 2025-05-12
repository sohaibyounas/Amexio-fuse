import React from "react";
import sun from "../../images/sun.jpg";
import mice from "../../images/mice.jpg";
import A from "../../images/A.png";
import Customer from "../../images/customer1.jpg";
import Customer2 from "../../images/customer2.jpg";

const Insights = () => {
  return (
    <>
      {/* Insights */}
      <div className="bg-[#04273F] w-full py-20"></div>
      <div className="bg-[#F3F7FB] w-[97%] pt-20 rounded-r-[10px] px-10 text-[45px] font-semibold">
        <div className="group">
          <h1 className="hover:text-[#ed6c25] hover:decoration-secondary hover:bg-[0%_100%] transition-all duration-300 ease-in-out">
            Latest insights
          </h1>
        </div>
        <div className="flex items-center gap-[20px]">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="group max-w-sm rounded-2xl flex flex-col overflow-hidden pt-10"
            >
              <img
                src={card.img}
                alt="Card Image"
                className="w-full h-[255px] object-cover rounded-[10px] scale-105 group-hover:scale-100 transition-transform duration-300 ease-in-out"
              />
              <div className="py-5 flex-1 flex flex-col">
                <p className="text-gray-500 text-sm mb-2">{card.date}</p>
                <h2 className="text-xl text-[25px] font-bold text-gray-900 mb-2 leading-snug hover:text-[#ed6c25] hover:decoration-secondary hover:bg-[0%_100%] transition-all duration-300 ease-in-out">
                  {card.title}
                </h2>
                <p className="text-gray-700 text-base">{card.description}</p>
              </div>

              <div className="flex items-start space-x-4 border-b border-blue-100 pb-4">
                <img
                  src={Customer}
                  // alt={customer}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-[#ed6c25] hover:decoration-secondary hover:bg-[0%_100%] transition-all duration-300 ease-in-out">
                    {card.name}
                  </h3>
                  <p className="text-sm text-gray-600">{card.title}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* customer portal */}
        {/* <div className="bg-gray-50 py-10">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {customers.map((customer, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-start space-x-4 border-b border-blue-100 pb-4">
                  <img
                    src={customer.img}
                    alt={customer.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 hover:text-[#ed6c25] hover:decoration-secondary hover:bg-[0%_100%] transition-all duration-300 ease-in-out">
                      {customer.name}
                    </h3>
                    <p className="text-sm text-gray-600">{customer.title}</p>
                  </div>
                </div>
                <div className="h-[2px] w-full bg-blue-100 rounded-full mb-4"></div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Insights;

// Card Data
const cardData = [
  {
    img: sun,
    date: "22 April 2025",
    title:
      "Customer portals done right: start with strategy, not with feature dumps",
    description:
      "How to set your portal initiative up for success by focusing on vision and strategy before anything gets designed or built.",
    cus: Customer,
    name: "Jan Lemmens",
    post: "Solution Manager CXM",
  },
  {
    img: mice,
    date: "22 April 2025",
    title: "Foundations for a robust and scalable customer portal",
    description:
      "In the wake of global disruptions and rising customer expectations, companies are increasingly digitizing their customer service/communications to improve user satisfaction and operational efficiency. Let's discover the best practices for building a future-proof customer portal.",
    cus: Customer,
    name: "Jan Lemmens",
    post: "Solution Manager CXM",
  },
  {
    img: A,
    date: "22 April 2025",
    title: "Foundations for a robust and scalable customer portal",
    description:
      "In the wake of global disruptions and rising customer expectations, companies are increasingly digitizing their customer service/communications to improve user satisfaction and operational efficiency. Let's discover the best practices for building a future-proof customer portal.",
    cus: Customer2,
    name: "Jan Lemmens",
    post: "Solution Manager CXM",
  },
];
