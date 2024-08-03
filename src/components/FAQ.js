import React, { useState } from "react";
import clsx from "clsx";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqsLU = [
    {
      id: 1,
      question: "What is the cost of a mobile application?",
      answer:
        "The cost varies depending on the requirements and complexity of the application. Factors like design, features, and platform can influence the price.",
    },
    {
      id: 2,
      question: "Do you provide a guarantee for the mobile application?",
      answer:
        "Yes, we offer a guarantee for our mobile applications to ensure they meet the agreed specifications and quality standards.",
    },
  ];
  0;

  const faqsRD = [
    {
      id: 3,
      question: "How long will development take?",
      answer:
        "Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer. <br></br><p>Average development time from start to finished application:</p> Medium projects take up to <b>3 months.</b> <p>Large projects may take about <b>4-6 months.</b></p> To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and and functionality.",
    },
    {
      id: 4,
      question: "I will not tell my idea, do you guarantee confidentiality?",
      answer:
        "Absolutely, we guarantee full confidentiality for all our clients. We are willing to sign a non-disclosure agreement (NDA) to protect your ideas and information.",
    },
  ];

  return (
    <section id="faq" className="py-10 md:py-20 pl-12 md:pl-28 pr-4 md:pr-8">
      <h2 className="text-2xl md:text-4xl font-bold mb-8">FAQ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        <div>
          {faqsLU.map((faq) => (
            <div
              key={faq.id}
              className={clsx(
                "border-y",
                faq.id === activeIndex ? "py-2" : " py-2 md:py-4"
              )}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full text-left py-4 flex justify-between items-center"
              >
                <span className="w-10/12 lg:w-fit text-[15px] lg:text-[19px] font-semibold pr-4">
                  {faq.question}
                </span>
                <span
                  className={clsx(
                    "relative right-0 flex items-center justify-center text-custom-green text-4xl lg:text-5xl font-light w-10 h-10 lg:w-16 lg:h-16 rounded-full lg:shadow-[0_2px_8px_-6px_black] transition-transform duration-300 transform",
                    {
                      "rotate-45 md:translate-y-1/4 lg:shadow-none text-gray-400":
                        activeIndex === faq.id,
                    }
                  )}
                >
                  +
                </span>
              </button>
              <div
                className={clsx(
                  "overflow-hidden transition-all duration-300",
                  activeIndex === faq.id ? "max-h-screen" : "max-h-0"
                )}
              >
                <div className="pb-2 font-medium">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
        <div>
          {faqsRD.map((faq) => (
            <div
              key={faq.id}
              className={clsx(
                "border-y",
                faq.id === activeIndex ? "py-2" : "py-2 md:py-4"
              )}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full text-left py-4 flex justify-between items-center"
              >
                <span className="w-10/12 lg:w-fit text-[15px] lg:text-[19px] font-semibold pr-4">
                  {faq.question}
                </span>
                <span
                  className={clsx(
                    "flex items-center justify-center text-custom-green text-4xl lg:text-5xl font-light w-10 h-10 lg:w-16 lg:h-16 rounded-full lg:shadow-[0_2px_8px_-6px_black] transition-transform duration-300 transform",
                    {
                      "rotate-45 md:translate-y-1/4 lg:shadow-none text-gray-400":
                        activeIndex === faq.id,
                    }
                  )}
                >
                  +{" "}
                </span>
              </button>
              <div
                className={clsx(
                  "overflow-hidden transition-all duration-300",
                  activeIndex === faq.id ? "max-h-screen" : "max-h-0"
                )}
              >
                <div
                  className="pb-2 font-medium"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
