import React from "react";
import Image from "next/image";
import smartphoneImage from "@/../public/images/smartphone.png";

const stages = [
  {
    number: 1,
    title: "Analysis",
    description:
      "We craft precise technical specs, aligning with your business, technology, and user requirements.",
    icon: "/icons/analysis-icon.png",
  },
  {
    number: 2,
    title: "Design",
    description:
      "We adapt the customer's corporate identity to the platform guidelines. We draw convenient and understandable interfaces.",
    icon: "/icons/design-icon.png",
  },
  {
    number: 3,
    title: "Development",
    description:
      "We create an extensible architecture, write clean and stable code. We integrate with customer technologies.",
    icon: "/icons/development-icon.png",
  },
  {
    number: 4,
    title: "Testing",
    description:
      "We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions.",
    icon: "/icons/testing-icon.png",
  },
  {
    number: 5,
    title: "Launching",
    description:
      "We design the application page and publish it in the App Store and Google Play stores.",
    icon: "/icons/launching-icon.png",
  },
  {
    number: 6,
    title: "Support",
    description:
      "We monitor the stability of the application, update it for new devices and versions of iOS and Android.",
    icon: "/icons/support-icon.png",
  },
];

const DevelopmentStages = () => {
  return (
    <section className="py-10 md:py-20 pl-12 md:pl-28 pr-4 md:pr-8">
      <h2 className="text-2xl md:text-4xl font-bold mb-10">
        Application Development Stages
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
        <div>
          {stages.slice(0, 3).map((stage) => (
            <div
              key={stage.number}
              className="relative overflow-hidden p-6 rounded-lg shadow-[0_0_10px_0_rgba(0,0,0,0.1)] mb-6 h-50 md:h-44"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={stage.icon}
                  alt={`${stage.title} icon`}
                  width={40}
                  height={40}
                />
                <h3 className="ml-4 text-xl font-semibold">{stage.title}</h3>
              </div>
              <p>{stage.description}</p>
              <div className="absolute leading-none tracking-[-0.06em] -top-8 right-0 text-custom-green text-[238px] font-extrabold opacity-5">
                {stage.number}
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex justify-center items-center">
          <Image
            src={smartphoneImage}
            alt="Dashboard"
            className="object-cover h-full pb-6"
          />
        </div>
        <div>
          {stages.slice(3, 6).map((stage) => (
            <div
              key={stage.number}
              className="relative overflow-hidden p-6 rounded-lg shadow-[0_0_10px_0_rgba(0,0,0,0.1)] mb-6 h-50 md:h-44"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={stage.icon}
                  alt={`${stage.title} icon`}
                  width={40}
                  height={40}
                />
                <h3 className="ml-4 text-xl font-semibold">{stage.title}</h3>
              </div>
              <p>{stage.description}</p>
              <div className="absolute leading-none tracking-tighter -top-8 right-0 text-custom-green text-[238px] font-extrabold opacity-5">
                {stage.number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentStages;
