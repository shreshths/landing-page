import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import projectImage from "@/../public/images/project.png";

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [visible, setVisible] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  const indicatorPosition = (id) => {
    const indicator = document.getElementById("indicator");
    const left = document.getElementById(`project-tab-${id}`).offsetLeft;
    if (
      left === 48 ||
      left === 151 ||
      left === 149 ||
      left === 252 ||
      left === 250 ||
      left === 353
    ) {
      indicator.style.left = left - 30 + "px";
    } else {
      indicator.style.left = left - 96 + "px";
    }
  };

  const industries = [
    { name: "Social media", icon: "/icons/social-media.png" },
    { name: "Education", icon: "/icons/education.png" },
    { name: "AR technology", icon: "/icons/ar-technology.png" },
    { name: "Fitness and sport", icon: "/icons/fitness-sport.png" },
    { name: "Auto, transport", icon: "/icons/auto-transport.png" },
    { name: "TV series", icon: "/icons/tv-series.png" },
    { name: "Bank", icon: "/icons/bank.png" },
    { name: "Medicine, health", icon: "/icons/medicine-health.png" },
    { name: "Startups", icon: "/icons/startups.png" },
    { name: "Construction", icon: "/icons/construction.png" },
    {
      name: "Restaurants, food delivery",
      icon: "/icons/restaurants-food-delivery.png",
    },
    { name: "Religion", icon: "/icons/religion.png" },
    { name: "Game projects", icon: "/icons/game-projects.png" },
    { name: "Marketplaces", icon: "/icons/marketplaces.png" },
    { name: "Online courses", icon: "/icons/online-courses.png" },
  ];

  const projects = [
    {
      id: 1,
      title: "Project 1",
      description:
        "Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels.",
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "Lorem irure mollit non est ullamco mollit excepteur magna ullamco. Voluptate et fugiat proident id. Deserunt proident et aute officia ea labore pariatur et duis exercitation consequat nostrud duis. Non sunt ea id nulla cupidatat est nulla deserunt anim velit id nulla. Eiusmod deserunt eiusmod commodo id nostrud do excepteur consequat.",
    },
    {
      id: 3,
      title: "Project 3",
      description:
        "Aliquip sit sint velit non. Ex non commodo excepteur fugiat fugiat. Proident enim nostrud qui minim labore laboris elit excepteur Lorem. Ad exercitation reprehenderit ea proident adipisicing incididunt sit dolore officia qui commodo. Laboris reprehenderit excepteur exercitation est nisi culpa laboris eu elit enim deserunt ea veniam occaecat. Sit id dolore dolore in sunt sit id quis minim aliqua labore sit proident.",
    },
    {
      id: 4,
      title: "Project 4",
      description:
        "Veniam id in quis reprehenderit enim esse officia. Non esse sint minim aute deserunt ad. Commodo ipsum in sunt et eiusmod est. Eiusmod enim nulla laborum Lorem irure nostrud non adipisicing excepteur incididunt. Voluptate veniam occaecat mollit magna Lorem officia veniam proident commodo nisi.",
    },
  ];

  useEffect(() => {
    if (hasMounted) {
      setVisible(true);
    } else {
      setHasMounted(true);
    }
  }, [selectedTab]);

  const handleTabChange = (id) => {
    if (id !== selectedTab) {
      setVisible(false);
      setSelectedTab(id);
      indicatorPosition(id);
    }
  };

  return (
    <section
      id="projects"
      className="py-10 md:py-20 pl-12 md:pl-28 pr-8 bg-gray-100"
    >
      <div className="pl-4 mb-28">
        <h2 className="text-2xl md:text-4xl font-bold">
          Developed more than <span className="text-custom-green">100</span>
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold mb-8">
          projects in <span className="text-custom-green">15</span> industries
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {industries.map((industry, index) => (
            <div key={index} className="flex items-center">
              <img
                src={industry.icon}
                alt={industry.name}
                className="w-12 h-12 mr-4"
              />
              <p className="font-medium">{industry.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            Projects we are proud of
          </h2>
          <p className="font-medium mb-12">
            Our software development company is truly proud of the wonderful
            clients we have worked with. We enjoy a long-term partnership.
          </p>
          <div className="mb-16 overflow-x-auto">
            <ul className="flex space-x-4">
              {projects.map((project) => (
                <li key={project.id}>
                  <button
                    onClick={() => handleTabChange(project.id)}
                    className={clsx(
                      "py-2 px-4",
                      selectedTab === project.id && "font-semibold"
                    )}
                    id={"project-tab-" + project.id}
                  >
                    {project.title}
                  </button>
                </li>
              ))}
            </ul>
            <div
              className="border-b-2 border-custom-yellow relative left-4 w-[50px] transition-all duration-300"
              id="indicator"
            ></div>
          </div>
          <div className="text-left">
            {projects.map((project) =>
              selectedTab === project.id ? (
                <div
                  key={project.id}
                  className={clsx(
                    "transition-opacity duration-700",
                    visible ? "opacity-100" : "opacity-0"
                  )}
                >
                  <h3 className="text-2xl md:text-4xl font-bold mb-10">
                    {project.title}
                  </h3>
                  <p>{project.description}</p>
                </div>
              ) : null
            )}
          </div>
          <h3 className="text-base md:text-lg mt-12">
            Business Analysis <span className="text-custom-yellow">/</span> iOS{" "}
            <span className="text-custom-yellow">/</span> Android{" "}
            <span className="text-custom-yellow">/</span> QA{" "}
            <span className="text-custom-yellow">/</span> UI/UX Design
          </h3>
          <div className="flex items-center mt-12">
            <Image
              src="/icons/place-yellow.png"
              alt="India Icon"
              width={24}
              height={24}
              className="mr-2"
            />
            India
            <Image
              src="/icons/work.png"
              alt="Work Icon"
              width={24}
              height={24}
              className="mr-2 ml-8"
            />
            Real Estate
          </div>
          <div className="grid grid-cols-2 mt-12 w-fit">
            <div>
              <h4 className="text-2xl font-extrabold">400%</h4>
              <p className="text-xs font-medium text-gray-400 mt-2">
                User Growth
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-extrabold">+ 200 000</h4>
              <p className="text-xs font-medium text-gray-400 mt-2">
                Active Users
              </p>
            </div>
          </div>
          <a href="javascript:void(0)" target="_blank">
            <Image
              src="/logos/app-market.png"
              alt="App Market Logos"
              width={300}
              height={40}
              className="mt-10"
            />
          </a>
        </div>
        <div className="hidden lg:block">
          <Image src={projectImage} alt="Project Image" className="ml-auto" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
