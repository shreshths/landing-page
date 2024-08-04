import React, { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import heroImage from "@/../public/images/hero-image.png";
import flag from "@/../public/icons/flag.png";

const Hero = () => {
  const [name, setName] = useState("My Name");
  const [number, setNumber] = useState("0000000000");
  const [businessName, setBusinessName] = useState("ABC Technologies PVT LTD");
  const [businessEmail, setBusinessEmail] = useState("demoaccount@gmail.com");
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");
  const [businessNameError, setBusinessNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [mailError, setMailError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = 0;
    if (name === "") {
      setNameError("Please enter your name");
      if (!flag) {
        flag = 1;
      }
    }
    if (businessName === "") {
      setBusinessNameError("Please enter your business name");
      if (!flag) {
        flag = 1;
      }
    }
    if (number === "") {
      setPhoneError("Please enter your phone number");
      if (!flag) {
        flag = 1;
      }
    }

    if (!number.match(/^[0-9]{10}$/) && number) {
      setPhoneError("Please enter a valid 10 digit number");
      if (!flag) {
        flag = 1;
      }
    }

    if (businessEmail === "") {
      setMailError("Please enter your business email");
      if (!flag) {
        flag = 1;
      }
    }

    if (!businessEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && businessEmail) {
      setMailError("Please enter a valid email address");
      if (!flag) {
        flag = 1;
      }
    }

    if (!name || !businessName || !number || !businessEmail) {
      setError("All fields are required");
    }

    if (!flag) {
      setMessage("Thank you for contacting us!");
      setName("");
      setBusinessName("");
      setNumber("");
      setBusinessEmail("");
      setError("");
      setNameError("");
      setBusinessNameError("");
      setPhoneError("");
      setMailError("");
    }
  };

  return (
    <section className="bg-gray-100 overflow-hidden md:h-[54rem]">
      <div className="flex flex-row">
        <div className="py-10 pl-12 pr-4 md:pr-8 md:py-20 md:pl-28 md:absolute z-10">
          <h1 className="text-2xl md:text-[39px] mt-16 sm:mt-20">
            <strong className="text-custom-yellow font-extrabold leading-none max-[1365px]:text-custom-yellow">
              User-Centric Excellence
            </strong>
            <span className="font-semibold">: Our</span>
          </h1>
          <h1 className="text-2xl md:text-[39px] font-bold leading-normal">
            App Development services
          </h1>
          <h1 className="text-2xl md:text-[40px] font-semibold mb-4 md:mb-6">
            Tackle Your Pain Points
          </h1>
          <div className="tracking-tight text-xs md:text-lg font-medium max-[1365px]:font-bold mb-6 md:mb-12">
            <p>
              Experience a Seamless Digital Journey with{" "}
              <strong className="text-custom-green max-[1365px]:text-lime-700">
                Desun
              </strong>
              - Where Every Line
            </p>{" "}
            <p className="leading-none">
              of Code Resolves Your Chellanges and{" "}
              <span className="text-custom-yellow max-[1365px]:text-custom-yellow font-semibold">
                Eveluates Your App Experience
              </span>
            </p>
            to Unparalleled Heights.
          </div>
          <div className="w-min rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="pl-4 md:pl-6 px-4 md:px-6 py-4">
              <h1 className="w-10/12 text-sm md:text-xl font-extrabold">
                Leave your contacts and we will call you back within 30 minutes
              </h1>
              <div>
                {error && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-4 rounded relative"
                    role="alert"
                  >
                    <strong className="font-bold">{error}</strong>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                      <svg
                        className="fill-current h-6 w-6 text-red-500"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        onClick={() => setError(null)}
                      >
                        <title>Close</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-3.15-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-3.058 3.15 3.152 3.151a1.2 1.2 0 0 1 0 1.698z" />
                      </svg>
                    </span>
                  </div>
                )}
                {message && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mt-4 rounded relative">
                    <div className="text-center">
                      <strong className="text-lg md:text-2xl font-bold">
                        {message}
                      </strong>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-[12.9px] md:text-[15px]">
                        We have received your details and we will get back to
                        you shortly!
                      </p>
                    </div>
                  </div>
                )}
                <div className="flex flex-col md:flex-row mt-6 mb-4">
                  <div align="left">
                    <label
                      htmlFor="name-input"
                      className="text-xs font-semibold text-gray-400"
                    >
                      Full name
                    </label>
                    <div
                      className={clsx(
                        "flex items-center",
                        nameError
                          ? "border-b-2 border-red-500"
                          : "border-b-2 border-gray-100",
                        "md:mr-4 w-44 md:w-52 mb-4 md:mb-0"
                      )}
                    >
                      <input
                        className="appearance-none bg-transparent border-none text-[12.9px] md:text-[15px] font-medium text-gray-700 mr-3 py-1 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Enter full name"
                        name="name"
                        id="name-input"
                        value={name}
                        aria-label="Full name"
                        onChange={(e) => {
                          setError(null);
                          setNameError(null);
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <p className="text-xs text-red-500">{nameError}</p>
                  </div>

                  <div align="left">
                    <label
                      htmlFor="number-input"
                      className="text-xs font-semibold text-gray-400"
                    >
                      Phone number
                    </label>
                    <div
                      className={clsx(
                        "flex items-center",
                        phoneError
                          ? "border-b-2 border-red-500"
                          : "border-b-2 border-gray-100",
                        "w-44 md:w-52"
                      )}
                    >
                      <Image src={flag} alt="flag" />
                      <p className="px-2 text-[12.9px] md:text-[15px]">+91</p>
                      <input
                        className="appearance-none bg-transparent border-none text-[12.9px] md:text-[15px] font-medium text-gray-700 mr-3 py-1   leading-tight focus:outline-none"
                        type="text"
                        name="number"
                        id="number-input"
                        value={number}
                        placeholder="Enter Phone"
                        aria-label="Phone number"
                        onChange={(e) => {
                          setError(null);
                          setPhoneError(null);
                          setNumber(e.target.value);
                        }}
                      />
                    </div>
                    <p className="text-xs text-red-500">{phoneError}</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row mb-4">
                  <div align="left">
                    <label className="text-xs font-semibold text-gray-400">
                      Business name
                    </label>
                    <div
                      className={clsx(
                        "flex items-center",
                        businessNameError
                          ? "border-b-2 border-red-500"
                          : "border-b-2 border-gray-100",
                        "md:mr-4 w-44 md:w-52 mb-4 md:mb-0"
                      )}
                    >
                      <input
                        className="appearance-none bg-transparent border-none text-[12.9px] md:text-[14.9px] font-medium text-gray-700 mr-3 py-1 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Enter business name"
                        name="businessName"
                        id="businessName-input"
                        value={businessName}
                        aria-label="Business name"
                        onChange={(e) => {
                          setError(null);
                          setBusinessNameError(null);
                          setBusinessName(e.target.value);
                        }}
                      />
                    </div>
                    <p className="text-xs text-red-500">{businessNameError}</p>
                  </div>
                  <div align="left" className="mr-6">
                    <label className="text-xs font-semibold text-gray-400">
                      Business email
                    </label>
                    <div
                      className={clsx(
                        "flex items-center",
                        mailError
                          ? "border-b-2 border-red-500"
                          : "border-b-2 border-gray-100",
                        "w-44 md:w-52"
                      )}
                    >
                      <input
                        className="appearance-none bg-transparent border-none text-[12.9px] md:text-[14.9px] font-medium text-gray-700 mr-3 py-1 leading-tight focus:outline-none"
                        type="email"
                        placeholder="Enter business email"
                        name="businessEmail"
                        id="businessEmail-input"
                        value={businessEmail}
                        aria-label="Business email"
                        onChange={(e) => {
                          setError(null);
                          setMailError(null);
                          setBusinessEmail(e.target.value);
                        }}
                      />
                    </div>
                    <p className="text-xs text-red-500">{mailError}</p>
                  </div>
                  <button
                    type="submit"
                    className="bg-custom-green text-sm text-white mt-10 md:mt-0 px-6 py-2 rounded h-fit w-fit"
                    onClick={handleSubmit}
                  >
                    Get<br></br> consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-full">
          <Image
            className="ml-auto max-[1365px]:opacity-10"
            src={heroImage}
            alt="Hero Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
