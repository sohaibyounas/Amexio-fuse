import React from "react";
import KBC from "../../images/kbc-image.webp";
import KBCLogo from "../../images/kbc-logo.png";

const Content = () => {
  return (
    <>
      <div className="bg-[#f5f8fb] p-6 md:p-12">
        <div className="max-w-7xl mx-auto bg-[#f5f8fb] flex flex-col md:flex-col items-center md:items-start gap-8 md:gap-10 lg:gap-6">
          {workData.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="flex gap-[15px] group">
                <section className="flex-shrink-0 w-full md:w-[40%]">
                  <img
                    alt={item.alt}
                    className="w-full h-auto rounded-md object-cover shadow-lg z-0 scale-105 group-hover:scale-100 transition-transform duration-300 ease-in-out"
                    height="400"
                    src={item.image}
                    width="600"
                  />
                </section>
                <section className="w-full md:w-[60%] border-t border-b text-[#D9E8F5] py-6 md:p-12 rounded-md">
                  <div className="flex items-center justify-between mb-6 text-black">
                    <div>
                      <p className="text-sm text-[#0a4a8f] font-semibold mb-1">
                        {item.company}
                      </p>
                      <h1 className="text-2xl md:text-3xl font-serif font-normal mb-4 leading-snug">
                        {item.title}
                      </h1>
                    </div>
                    <div>
                      <img src={item.logo} alt="Logo" />
                    </div>
                  </div>
                  <p className="text-base max-w-xl mb-6 leading-relaxed text-black">
                    {item.description}
                  </p>
                  <ul className="list-disc list-inside max-w-xl space-y-1 mb-8 text-base text-black">
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
                                className="underline text-black hover:text-[orangered]"
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
                    className="bg-[#0a4a8f] text-white text-sm font-semibold py-2 px-6 rounded-full hover:bg-[#083a6a] transition"
                    type="button"
                  >
                    {item.button}
                  </button>
                </section>
              </div>
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
  {
    image: KBC,
    logo: KBCLogo,
    alt: "Close-up of a KBC credit card, a laptop showing a KBC webpage, and a mobile phone screen with KBC app",
    company: "KBC",
    title: "Engaging readers in a modern digital age",
    description:
      "We helped Mediafin find innovative ways to customize online experiences for media consumers and keep readers engaged with their brand.",
    details: [
      "Duration: Partnership since 2019",
      "Collaborations: Expert Staffing",
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
  {
    image: KBC,
    logo: KBCLogo,
    alt: "Close-up of a KBC credit card, a laptop showing a KBC webpage, and a mobile phone screen with KBC app",
    company: "KBC",
    title: "Engaging readers in a modern digital age",
    description:
      "We helped Mediafin find innovative ways to customize online experiences for media consumers and keep readers engaged with their brand.",
    details: [
      "Duration: Partnership since 2019",
      "Collaborations: Expert Staffing",
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
  {
    image: KBC,
    logo: KBCLogo,
    alt: "Close-up of a KBC credit card, a laptop showing a KBC webpage, and a mobile phone screen with KBC app",
    company: "KBC",
    title: "Engaging readers in a modern digital age",
    description:
      "We helped Mediafin find innovative ways to customize online experiences for media consumers and keep readers engaged with their brand.",
    details: [
      "Duration: Partnership since 2019",
      "Collaborations: Expert Staffing",
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
  {
    image: KBC,
    logo: KBCLogo,
    alt: "Close-up of a KBC credit card, a laptop showing a KBC webpage, and a mobile phone screen with KBC app",
    company: "KBC",
    title: "Engaging readers in a modern digital age",
    description:
      "We helped Mediafin find innovative ways to customize online experiences for media consumers and keep readers engaged with their brand.",
    details: [
      "Duration: Partnership since 2019",
      "Collaborations: Expert Staffing",
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
  {
    image: KBC,
    logo: KBCLogo,
    alt: "Close-up of a KBC credit card, a laptop showing a KBC webpage, and a mobile phone screen with KBC app",
    company: "KBC",
    title: "Engaging readers in a modern digital age",
    description:
      "We helped Mediafin find innovative ways to customize online experiences for media consumers and keep readers engaged with their brand.",
    details: [
      "Duration: Partnership since 2019",
      "Collaborations: Expert Staffing",
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
  {
    image: KBC,
    logo: KBCLogo,
    alt: "Close-up of a KBC credit card, a laptop showing a KBC webpage, and a mobile phone screen with KBC app",
    company: "KBC",
    title: "Engaging readers in a modern digital age",
    description:
      "We helped Mediafin find innovative ways to customize online experiences for media consumers and keep readers engaged with their brand.",
    details: [
      "Duration: Partnership since 2019",
      "Collaborations: Expert Staffing",
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
  {
    image: KBC,
    logo: KBCLogo,
    alt: "Close-up of a KBC credit card, a laptop showing a KBC webpage, and a mobile phone screen with KBC app",
    company: "KBC",
    title: "Engaging readers in a modern digital age",
    description:
      "We helped Mediafin find innovative ways to customize online experiences for media consumers and keep readers engaged with their brand.",
    details: [
      "Duration: Partnership since 2019",
      "Collaborations: Expert Staffing",
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
  {
    image: KBC,
    logo: KBCLogo,
    alt: "Close-up of a KBC credit card, a laptop showing a KBC webpage, and a mobile phone screen with KBC app",
    company: "KBC",
    title: "Engaging readers in a modern digital age",
    description:
      "We helped Mediafin find innovative ways to customize online experiences for media consumers and keep readers engaged with their brand.",
    details: [
      "Duration: Partnership since 2019",
      "Collaborations: Expert Staffing",
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
  {
    image: KBC,
    logo: KBCLogo,
    alt: "Close-up of a KBC credit card, a laptop showing a KBC webpage, and a mobile phone screen with KBC app",
    company: "KBC",
    title: "Engaging readers in a modern digital age",
    description:
      "We helped Mediafin find innovative ways to customize online experiences for media consumers and keep readers engaged with their brand.",
    details: [
      "Duration: Partnership since 2019",
      "Collaborations: Expert Staffing",
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
];
