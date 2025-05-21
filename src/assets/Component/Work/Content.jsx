import React from "react";
import KBC from "../../images/kbc-image.webp";
import KBCLogo from "../../images/kbc-logo.png";

const Content = () => {
  return (
    <>
      <div class="bg-[#f5f8fb] p-6 md:p-12">
        <div class="max-w-7xl mx-auto bg-[#f5f8fb] flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 lg:gap-3">
          {workData.map((item, idx) => (
            <React.Fragment key={idx}>
              <section class="flex-shrink-0 w-full md:w-1/2">
                <img
                  alt={item.alt}
                  class="w-full h-auto rounded-md object-cover"
                  height="400"
                  src={item.image}
                  width="600"
                />
              </section>
              <section class="w-full md:w-1/2 border-t border-b text-[#D9E8F5] py-6 md:p-12 rounded-md">
                <div class="flex items-center justify-between mb-6 text-black">
                  <div>
                    <p class="text-sm text-[#0a4a8f] font-semibold mb-1">
                      {item.company}
                    </p>
                    <h1 class="text-2xl md:text-3xl font-serif font-normal mb-4 leading-snug">
                      {item.title}
                    </h1>
                  </div>
                  <div>
                    <img src={item.logo} alt="Logo" />
                  </div>
                </div>
                <p class="text-base max-w-xl mb-6 leading-relaxed text-black">
                  {item.description}
                </p>
                <ul class="list-disc list-inside max-w-xl space-y-1 mb-8 text-base text-black">
                  {item.details.map((detail, i) =>
                    typeof detail === "string" ? (
                      <li key={i}>{detail}</li>
                    ) : (
                      <li key={i}>
                        {detail.label}
                        {detail.links.map((link, j) => (
                          <>
                            <a
                              key={j}
                              class="underline text-black hover:text-[orangered]"
                              href={link.href}
                            >
                              {link.text}
                            </a>
                            {j < detail.links.length - 1 && ", "}
                          </>
                        ))}
                      </li>
                    )
                  )}
                </ul>
                <button
                  class="bg-[#0a4a8f] text-white text-sm font-semibold py-2 px-6 rounded-full hover:bg-[#083a6a] transition"
                  type="button"
                >
                  {item.button}
                </button>
              </section>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Content;

const workData = [
  {
    image: KBC,
    logo: KBCLogo,
    alt: "Close-up of a KBC credit card, a laptop showing a KBC webpage, and a mobile phone screen with KBC app",
    company: "KBC",
    title: "Building an omnichannel digital experience platform",
    description:
      "We are supporting KBC with designing, building and optimizing their digital experience platform, setting the bar for the financial sector, providing a hybrid one-stop shop for bank-insurance customers, providing seamless high-value interaction across channels.",
    details: [
      "Duration: Partnership since 2005",
      "Collaborations: Expert Staffing",
      "Core technologies: Adobe Experience Cloud",
      {
        label: "Services:",
        links: [
          { text: "CX Technology Advisory", href: "#" },
          { text: "DXP Implementation", href: "#" },
          { text: "CX Optimize", href: "#" },
        ],
      },
    ],
    button: "Read the full case",
  },
  // Add more objects here for more cases
];
