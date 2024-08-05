import Link from "next/link";

const logo = "/logos/planet.png";

const services = [
  "iOS Development",
  "Android Development",
  "Web Development",
  "UX/UI Design",
  "Testing",
  "Launch",
  "IT Consulting",
];
const Services = () => {
  return (
    <section id="services" className="py-10 md:py-20 pl-7 md:pl-14">
      <div className="py-4 md:py-8 lg:py-12 border-y border-gray-200">
        <div className="flex justify-around md:justify-between">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="flex justify-center">
              <img src={logo} alt={`Planet logo ${index + 1}`} />
            </div>
          ))}
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="hidden md:flex justify-center">
              <img src={logo} alt={`Planet logo ${index + 1}`} />
            </div>
          ))}
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="hidden lg:flex justify-center">
              <img src={logo} alt={`Partner logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-6 md:pl-12 pr-8 mt-8">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            Full development cycle
          </h2>
          <p className="font-semibold">We use proven technologies</p>
          <h4 className="font-semibold text-lg md:text-xl mt-8 mb-2">Web</h4>
          <p className="text-sm md:text-base">
            PHP <span>/</span> JavaScript <span>/</span> Node.js <span>/</span>{" "}
            Web Socket <span>/</span> Socket.io <span>/</span> Vue.js{" "}
            <span>/</span> Nuxt <span>/</span> MySQL <span>/</span> Laravel{" "}
            <span>/</span> Go lang <span>/</span> django <span>/</span> Python
          </p>
          <h4 className="font-semibold text-lg md:text-xl mt-8 mb-2">Mobile</h4>
          <p className="text-sm md:text-base">
            Swift <span>/</span> Kotlin <span>/</span> Alamofire <span>/</span>{" "}
            Firebase <span>/</span> Core Data <span>/</span> Room <span>/</span>{" "}
            Realm <span>/</span>
            Coroutine <span>/</span> RxJava <span>/</span> RxSwift{" "}
            <span>/</span> Unit Test <span>/</span> Navigation
          </p>
          <style jsx>
            {`
              span {
                color: #80a948;
              }
            `}
          </style>
        </div>
        <div className="md:flex md:justify-center mt-10 md:mt-0">
          <ul className="text-base md:text-xl space-y-5">
            {services.map((service, index) => (
              <li key={index}>
                <Link href="javascript:void(0)" target="_blank">
                  <p>
                    <span id="link_text">{service}</span>
                    <style jsx>
                      {`
                        #link_text {
                          position: relative;
                        }

                        #link_text:hover {
                          font-weight: bold;
                        }

                        #link_text:after {
                          content: "";
                          position: absolute;
                          width: 96%;
                          height: 2px;
                          bottom: -5px;
                          left: 0;
                          background-color: #80a948;
                          transform: scaleX(0);
                          transform-origin: bottom left;
                          transition: all 0.3s ease-in-out;
                        }

                        #link_text:hover:after {
                          transform: scaleX(1);
                        }
                      `}
                    </style>
                    <span className="text-custom-green"> &gt;</span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
