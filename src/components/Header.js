"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/logos/mycompany-header.png";
import phone from "@/../public/icons/smartphone_header.png";
import mail from "@/../public/icons/mail_header.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <header
      className="bg-white shadow 
      rounded-lg p-1 sm:p-2 md:p-4
      flex justify-between items-center 
      mt-6 max-w-[1332px] mx-1 min-[360px]:mx-4 sm:mx-6 md:mx-10 lg:mx-16 min-[1382px]:mx-auto 
      fixed right-0 left-0 z-50"
    >
      <div className="flex w-full items-center max-[1044px]:relative">
        <Image
          className="h-fit max-[1044px]:absolute max-[1044px]:-top-1"
          src={logo}
          alt="Logo"
        />
        <div className="flex w-full justify-end items-center">
          <div className=" w-full">
            <div className="flex lg:hidden justify-end">
              <button className="focus:outline-none px-2 py-4" onClick={toggle}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
            <nav
              className={`${
                open ? "max-h-60" : "max-h-0"
              } block overflow-hidden transition-all duration-700 ease-in-out lg:max-h-fit lg:flex justify-center w-full`}
            >
              <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 pb-6 lg:pb-0 pr-4 w-full justify-center items-end text-sm font-semibold">
                <li>
                  <Link href="#services">Services</Link>
                </li>
                <li>
                  <Link href="javascript:void(0)" target="_blank">
                    Media
                  </Link>
                </li>
                <li>
                  <Link href="#projects">Cases</Link>
                </li>
                <li>
                  <Link href="#faq">FAQ</Link>
                </li>
                <li>
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>

              <ul className="hidden lg:flex lg:flex-row lg:space-x-4 w-full justify-end items-end lg:px-4 text-sm font-semibold">
                <li className="flex space-x-2 items-center">
                  <Image src={phone} alt="Phone" />
                  <span className="text-custom-green">
                    <a href="tel:+91 0000000000">+91&nbsp; 0000000000</a>
                  </span>
                </li>
                <li className="flex space-x-2 items-center">
                  <Image src={mail} alt="Email" />
                  <span className="text-custom-green">
                    <a href="mailto:demo@gmail.com">demo@gmail.com</a>
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
