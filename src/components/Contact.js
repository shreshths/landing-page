import React, { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import flag from "@/../public/icons/flag.png";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "My Name",
    phone: "0000000000",
    businessName: "ABC Technologies PVT LTD",
    businessEmail: "demoaccount@gmail.com",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({});
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) {
      errors.name = "Please enter your name";
    }

    if (!formData.businessName) {
      errors.businessName = "Please enter your business name";
    }

    if (!formData.phone) {
      errors.phone = "Please enter your phone number";
    }

    if (!formData.phone.match(/^[0-9]{10}$/) && formData.phone) {
      errors.phone = "Please enter a valid 10 digit number";
    }

    if (!formData.businessEmail) {
      errors.businessEmail = "Please enter your business email";
    }

    if (
      !formData.businessEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) &&
      formData.businessEmail
    ) {
      errors.businessEmail = "Please enter a valid email address";
    }

    if (
      !formData.name ||
      !formData.businessName ||
      !formData.phone ||
      !formData.businessEmail
    ) {
      errors.error = "All fields are required";
    }

    return errors;
  };

  const handleSubmit = () => {
    const errors = validate();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      setMessage("Thank you for contacting us!");
      setFormData({
        name: "",
        phone: "",
        businessName: "",
        businessEmail: "",
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-10 md:py-20 pl-12 md:pl-28 pr-4 md:pr-8 bg-gradient-to-r from-custom-yellow to-custom-green"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-white w-[16rem] lg:w-[25.5rem]">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            Let's discuss <br />
            Your project
          </h2>
          <p>
            Let's figure out how to create an effective application, its cost
            and terms of its development
          </p>
        </div>

        <div className="w-[16rem] lg:w-[30.8rem] rounded-lg overflow-hidden shadow-lg bg-white lg:ml-auto py-4 pl-6 pr-4">
          <div>
            {errors.error && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-4 rounded relative"
                role="alert"
              >
                <strong className="font-bold">{errors.error}</strong>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    className="fill-current h-6 w-6 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    onClick={() => setErrors({ ...errors, error: "" })}
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-3.15-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-3.058 3.15 3.152 3.151a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
            )}
            {message && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mt-4 rounded relative">
                <div className="flex justify-center">
                  <strong className="text-2xl font-bold">{message}</strong>
                </div>
                <div className="mt-4 text-center">
                  <p>
                    We have received your details and we will get back to you
                    shortly!
                  </p>
                </div>
              </div>
            )}
            <div className="flex flex-col lg:flex-row mt-6 mb-4">
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
                    errors.name
                      ? "border-b-2 border-red-500"
                      : "border-b-2 border-gray-100",
                    "mr-4 w-52 mb-4 lg:mb-0"
                  )}
                >
                  <input
                    className="appearance-none bg-transparent border-none w-full text-[15px] font-medium text-gray-700 mr-3 py-1 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Enter full name"
                    name="name"
                    id="name-input"
                    value={formData.name}
                    aria-label="Full name"
                    onChange={(e) => {
                      setErrors({ ...errors, name: null });
                      handleChange(e);
                    }}
                  />
                </div>
                <p className="text-xs text-red-500">{errors.name}</p>
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
                    errors.phone
                      ? "border-b-2 border-red-500"
                      : "border-b-2 border-gray-100",
                    "w-52"
                  )}
                >
                  <Image src={flag} alt="flag" />
                  <p className="px-2">+91</p>
                  <input
                    className="appearance-none bg-transparent border-none w-full text-[15px] font-medium text-gray-700 mr-3 py-1   leading-tight focus:outline-none"
                    type="text"
                    name="phone"
                    id="number-input"
                    value={formData.phone}
                    placeholder="Enter Phone"
                    aria-label="Phone number"
                    onChange={(e) => {
                      setErrors({ ...errors, phone: null });
                      handleChange(e);
                    }}
                  />
                </div>
                <p className="text-xs text-red-500">{errors.phone}</p>
              </div>
            </div>
            <div className="flex flex-wrap flex-col justify-end lg:flex-row mb-4 h-fit mr-5">
              <div align="left">
                <label className="text-xs font-semibold text-gray-400">
                  Business name
                </label>
                <div
                  className={clsx(
                    "flex items-center",
                    errors.businessName
                      ? "border-b-2 border-red-500"
                      : "border-b-2 border-gray-100",
                    "mr-4 w-52 mb-4 lg:mb-0"
                  )}
                >
                  <input
                    className="appearance-none bg-transparent border-none w-full text-[14.9px] font-medium text-gray-700 mr-3 py-1 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Enter business name"
                    name="businessName"
                    id="businessName-input"
                    value={formData.businessName}
                    aria-label="Business name"
                    onChange={(e) => {
                      setErrors({ ...errors, businessName: null });
                      handleChange(e);
                    }}
                  />
                </div>
                <p className="text-xs text-red-500">{errors.businessName}</p>
              </div>
              <div align="left">
                <label className="text-xs font-semibold text-gray-400">
                  Business email
                </label>
                <div
                  className={clsx(
                    "flex items-center",
                    errors.businessEmail
                      ? "border-b-2 border-red-500"
                      : "border-b-2 border-gray-100",
                    "w-52"
                  )}
                >
                  <input
                    className="appearance-none bg-transparent border-none w-full text-[14.9px] font-medium text-gray-700 py-1 leading-tight focus:outline-none"
                    type="email"
                    placeholder="Enter business email"
                    name="businessEmail"
                    id="businessEmail-input"
                    value={formData.businessEmail}
                    aria-label="Business email"
                    onChange={(e) => {
                      setErrors({ ...errors, businessEmail: null });
                      handleChange(e);
                    }}
                  />
                </div>
                <p className="text-xs text-red-500">{errors.businessEmail}</p>
              </div>
              <button
                type="submit"
                className="bg-custom-yellow text-sm text-white mt-10 lg:mt-4 px-6 py-2 rounded-lg h-fit w-fit"
                onClick={handleSubmit}
              >
                Discuss the project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
