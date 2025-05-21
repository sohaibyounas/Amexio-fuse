import React from "react";
import BottleNeck from "../../images/bootleneck.jpg";
import Customer from "../../images/customer1.jpg";
import Customer2 from "../../images/customer2.jpg";
import mice from "../../images/mice.jpg";
import A from "../../images/A.png";

const Blogs = () => {
  return (
    <>
      {/* Card Data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] px-10 pb-15 bg-white">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="group w-full rounded-2xl flex flex-col overflow-hidden pt-10"
          >
            <img
              src={card.img}
              alt="Card Image"
              className="w-full object-cover rounded-t-[10px] scale-105 group-hover:scale-100 transition-transform duration-300 ease-in-out"
            />
            <div className="py-5 flex-1">
              <p className="text-gray-500 text-sm mb-2">
                {card.date}
                {card.category && (
                  <>
                    <span className="px-1 text-[#ED6C25] text-[15px]">/</span>
                    <span className="text-black font-semibold">
                      {card.category.toUpperCase()}
                    </span>
                  </>
                )}
              </p>
              <h2 className="text-xl text-[25px] font-bold text-gray-900 mb-2 leading-snug hover:text-[#ed6c25] hover:decoration-secondary hover:bg-[0%_100%] transition-all duration-300 ease-in-out">
                {card.title}
              </h2>
              <p className="text-gray-700 text-base">{card.description}</p>
            </div>

            <div className="flex items-start space-x-4 border-b border-[#D9E8F5] py-5 ">
              <img
                src={Customer}
                alt={Customer}
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
        <div className="flex items-center justify-center">
          <p className="border-b-2 border-[#ED6C25] pb-1">
            You've viewed 24 of the 24 blogposts
            <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default Blogs;

// Blogs Posts
const cardData = [
  {
    img: BottleNeck,
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
    date: "17 March 2025",
    title: "Foundations for a robust and scalable customer portal",
    description:
      "In the wake of global disruptions and rising customer expectations, companies are increasingly digitizing their customer service/communications to improve user satisfaction and operational efficiency. Let's discover the best practices for building a future-proof customer portal.",
    cus: Customer,
    name: "Jan Lemmens",
    post: "Solution Manager CXM",
    category: "CUSTOMER PORTALS",
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
    category: "AEM",
  },
  {
    img: BottleNeck,
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
    date: "17 March 2025",
    title: "Foundations for a robust and scalable customer portal",
    description:
      "In the wake of global disruptions and rising customer expectations, companies are increasingly digitizing their customer service/communications to improve user satisfaction and operational efficiency. Let's discover the best practices for building a future-proof customer portal.",
    cus: Customer,
    name: "Jan Lemmens",
    post: "Solution Manager CXM",
    category: "CUSTOMER PORTALS",
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
    category: "AEM",
  },
  {
    img: BottleNeck,
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
    date: "17 March 2025",
    title: "Foundations for a robust and scalable customer portal",
    description:
      "In the wake of global disruptions and rising customer expectations, companies are increasingly digitizing their customer service/communications to improve user satisfaction and operational efficiency. Let's discover the best practices for building a future-proof customer portal.",
    cus: Customer,
    name: "Jan Lemmens",
    post: "Solution Manager CXM",
    category: "CUSTOMER PORTALS",
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
    category: "AEM",
  },
  {
    img: BottleNeck,
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
    date: "17 March 2025",
    title: "Foundations for a robust and scalable customer portal",
    description:
      "In the wake of global disruptions and rising customer expectations, companies are increasingly digitizing their customer service/communications to improve user satisfaction and operational efficiency. Let's discover the best practices for building a future-proof customer portal.",
    cus: Customer,
    name: "Jan Lemmens",
    post: "Solution Manager CXM",
    category: "CUSTOMER PORTALS",
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
    category: "AEM",
  },
  {
    img: BottleNeck,
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
    date: "17 March 2025",
    title: "Foundations for a robust and scalable customer portal",
    description:
      "In the wake of global disruptions and rising customer expectations, companies are increasingly digitizing their customer service/communications to improve user satisfaction and operational efficiency. Let's discover the best practices for building a future-proof customer portal.",
    cus: Customer,
    name: "Jan Lemmens",
    post: "Solution Manager CXM",
    category: "CUSTOMER PORTALS",
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
    category: "AEM",
  },
  {
    img: BottleNeck,
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
    date: "17 March 2025",
    title: "Foundations for a robust and scalable customer portal",
    description:
      "In the wake of global disruptions and rising customer expectations, companies are increasingly digitizing their customer service/communications to improve user satisfaction and operational efficiency. Let's discover the best practices for building a future-proof customer portal.",
    cus: Customer,
    name: "Jan Lemmens",
    post: "Solution Manager CXM",
    category: "CUSTOMER PORTALS",
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
    category: "AEM",
  },
  {
    img: BottleNeck,
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
    date: "17 March 2025",
    title: "Foundations for a robust and scalable customer portal",
    description:
      "In the wake of global disruptions and rising customer expectations, companies are increasingly digitizing their customer service/communications to improve user satisfaction and operational efficiency. Let's discover the best practices for building a future-proof customer portal.",
    cus: Customer,
    name: "Jan Lemmens",
    post: "Solution Manager CXM",
    category: "CUSTOMER PORTALS",
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
    category: "AEM",
  },
  {
    img: BottleNeck,
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
    date: "17 March 2025",
    title: "Foundations for a robust and scalable customer portal",
    description:
      "In the wake of global disruptions and rising customer expectations, companies are increasingly digitizing their customer service/communications to improve user satisfaction and operational efficiency. Let's discover the best practices for building a future-proof customer portal.",
    cus: Customer,
    name: "Jan Lemmens",
    post: "Solution Manager CXM",
    category: "CUSTOMER PORTALS",
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
    category: "AEM",
  },
];
