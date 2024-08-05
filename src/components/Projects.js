import styles from "./Projects.module.css";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";

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
      left === 353 ||
      left === 160 ||
      left === 161 ||
      left === 277 ||
      left === 276 ||
      left === 392
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
      technologies:
        "Business Analysis <span>/</span> iOS <span>/</span> Android <span>/</span> QA <span>/</span> UI/UX Design",
      location: "India",
      industry: "Real Estate",
      growth: {
        title: "User Growth",
        value: "400%",
      },
      metrics: {
        title: "Active Users",
        value: "+ 200 000",
      },
      image: "/images/project.png",
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "Developed a comprehensive fitness and wellness app that offers personalized workout plans, nutritional advice, and a community feature for users to share progress and tips. The app integrates with wearable devices for real-time tracking.",
      technologies:
        "Mobile Development <span>/</span> Wearable Integration <span>/</span> AI/ML <span>/</span> UI/UX Design",
      location: "USA",
      industry: "Fitness and Sport",
      growth: {
        title: "User Engagement Increase",
        value: "250%",
      },
      metrics: {
        title: "Active Users",
        value: "+ 500 000",
      },
      image: "/images/project.png",
    },
    {
      id: 3,
      title: "Project 3",
      description:
        "Created a secure online banking platform that provides easy account management, personalized financial advice, and integrated investment options. The platform prioritizes security and user experience.",
      technologies:
        "Fintech <span>/</span> Cybersecurity <span>/</span> Blockchain <span>/</span> Web Development <span>/</span> UI/UX Design",
      location: "United Kingdom",
      industry: "Banking",
      growth: {
        title: "Transaction Volume Growth",
        value: "300%",
      },
      metrics: {
        title: "Active Users",
        value: "+ 1 Million",
      },
      image: "/images/project.png",
    },
    {
      id: 4,
      title: "Project 4",
      description:
        "Launched a unique online education platform offering interactive courses with live tutoring, quizzes, and certification options. The platform caters to various subjects and includes features for tracking progress and engaging with instructors.",
      technologies:
        "E-learning <span>/</span> Video Streaming <span>/</span> Web Development <span>/</span> AI-Powered Analytics",
      location: "Australia",
      industry: "Education",
      growth: {
        title: "Course Enrollment Growth",
        value: "500%",
      },
      metrics: {
        title: "Active Learners",
        value: "+ 300 000",
      },
      image: "/images/project.png",
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
      <div className="lg:w-1/2 w-full">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">
          Projects we are proud of
        </h2>
        <p className="font-medium tracking-tighter mb-12">
          Our software development company is truly proud of the wonderful
          clients we have worked with. We enjoy a long-term partnership.
        </p>
      </div>
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold mb-10">
                    {project.title}
                  </h3>
                  <p>{project.description}</p>
                  <h3
                    className={styles.technologies}
                    dangerouslySetInnerHTML={{ __html: project.technologies }}
                  ></h3>

                  <div className="flex items-center mt-12">
                    <Image
                      src="/icons/place-yellow.png"
                      alt="India Icon"
                      width={24}
                      height={24}
                      className="mr-2"
                    />
                    {project.location}
                    <Image
                      src="/icons/work.png"
                      alt="Work Icon"
                      width={24}
                      height={24}
                      className="mr-2 ml-8"
                    />
                    {project.industry}
                  </div>
                  <div className="grid grid-cols-2 mt-12 w-fit">
                    <div>
                      <h4 className="text-2xl font-extrabold">
                        {project.growth.value}
                      </h4>
                      <p
                        className={clsx(
                          "text-xs font-medium text-gray-400 mt-2",
                          { "w-min": project.id !== 1 }
                        )}
                      >
                        {project.growth.title}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-extrabold">
                        {project.metrics.value}
                      </h4>
                      <p className="text-xs font-medium text-gray-400 mt-2">
                        {project.metrics.title}
                      </p>
                    </div>
                  </div>
                  <div className="sm:flex mt-10">
                    <a
                      href="javascript:void(0)"
                      target="_blank"
                      className="block sm:mr-4 mb-4 sm:mb-0"
                    >
                      <Image
                        src="/logos/ios.png"
                        alt="App Store Logo"
                        width={148}
                        height={40}
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      target="_blank"
                      className="block"
                    >
                      <Image
                        src="/logos/android.png"
                        alt="Play Store Logo"
                        width={136}
                        height={40}
                      />
                    </a>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <Image
                    src={project.image}
                    alt="Project Image"
                    className="ml-auto"
                    width={446}
                    height={449}
                  />
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </section>
  );
};

export default Projects;
