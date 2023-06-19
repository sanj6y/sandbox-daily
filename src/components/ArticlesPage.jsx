import React, { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import logo from "../assets/sandbox-logo.png";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import ex1 from "../assets/example-img-1.jpeg";

const ArticlesPage = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };

  return (
    <div>
      {/* NAVBAR */}

      <nav className="fixed flex justify-between top-0 z-50 w-full rounded-b-2xl py-2 px-6 border-b-2 bg-gray-50 bg-opacity-75 pb-5vh">
        <div className="flex items-center md:pl-32 ease-in-out duration-300">
          <img src={logo} alt="sandbox-logo" className="w-12"/>
        </div>
        <div
          onClick={handleNav}
          className="flex flex-col justify-center md:hidden hover:cursor-pointer"
        >
          {!nav ? < RiCloseFill size={30} /> : <RiMenu3Fill size={25} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-screen border-r border-r-gray-300 bg-gray-50 ease-in-out duration-500"
              : "fixed left-[-100%] top-0 ease-in-out duration-200"
          }
          s
        >
          <div className="flex flex-col justify-center">
            <ul className="text-xl font-medium">
              <li className="w-fit p-4 hover:cursor-pointer hover:text-gray-500 ease-in-out duration-200">HOME</li>
              <li className="w-fit p-4 hover:cursor-pointer hover:text-gray-500 ease-in-out duration-200">ABOUT</li>
              <li href="/services" className="w-fit p-4 hover:cursor-pointer hover:text-gray-500 ease-in-out duration-200">SERVICES</li>
              <li className="w-fit p-4 hover:cursor-pointer hover:text-gray-500 ease-in-out duration-200">ARTICLES</li>
              <li className="w-fit p-4 hover:cursor-pointer hover:text-gray-500 ease-in-out duration-200">CONTACT</li>
            </ul>
          </div>
        </div>
        <div className="space-x-5 pr-10 md:flex hidden font-medium text-black">
          <button className="hover:text-gray-500 ease-in-out duration-200">
            HOME
          </button>
          <button className="hover:text-gray-500 ease-in-out duration-200">
            ABOUT
          </button>
          <button
            className="hover:text-gray-500 ease-in-out duration-200"
          >
            <a href = "/servicesBtn">SERVICES</a>
          </button>
          <button className="hover:text-gray-500 ease-in-out duration-200">
            ARTICLES
          </button>
          <button className="hover:text-gray-500 ease-in-out duration-200">
            CONTACT
          </button>
        </div>
      </nav>

      <div className="grid md:grid-cols-4 gap-5" style={{ paddingTop: "8vh" }}>
        <div className="bg-gray-100 h-[80vh] md:ml-3 flex flex-col justify-between p-4 items-center shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold">
            Sandbox Mobile
          </p>
          <p className="md:text-2xl sm:text-xl text-lg max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
        </div>
        <div className="bg-gray-100 h-[80vh] md:mr-3 flex flex-col justify-between p-4 items-center shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold">
            Sandbox Finance Manager
          </p>
          <p className="md:text-2xl sm:text-xl text-lg max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
        </div>
        <div className="bg-gray-100 h-[80vh] md:ml-3 flex flex-col justify-between p-4 items-center shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold -mt-8">
            Sandbox Lorem Ipsum
          </p>
          <p className="md:text-2xl sm:text-xl text-lg max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
        </div>
        <div className="bg-gray-100 h-[80vh] md:mr-3 flex flex-col justify-between p-4 items-center shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold">
            Sandbox another thing
          </p>
          <p className="md:text-2xl sm:text-xl text-lg max-w-md">
           Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-gray-50 w-screen">
        <div className="flex flex-row justify-center w-full border-b-8 bg-gray-100">
          <div className="flex flex-col justify-center">
            <h1 className="md:text-3xl sm:text-2xl text-xl font-bold sm:pr-8 pr-2">
              Become Smarter in 5 minutes. Daily.
            </h1>
          </div>

          <form className="md:block hidden">
            <input
              className="p-4 m-4 w-[30vw] border-4 border-gray-400 rounded-md"
              type={"text"}
              placeholder="Type Email"
            ></input>
            <input
              className="p-4 border-4 border-gray-400 text-gray-500 rounded-md"
              type={"submit"}
              value="Subscribe"
            ></input>
          </form>
          <form className="md:hidden flex flex-col justify-center py-4">
            <input
              className="p-2 border-2 border-gray-400 text-gray-500 rounded-md"
              type={"submit"}
              value="Subscribe Now"
            ></input>
          </form>
        </div>

        <div className="w-full py-16 px-4 grid grid-cols-2 mx-auto bg-black">
          <div className="p-4 text-white">
            <p>Privacy Policies</p>
            <p>Cookie Permissions</p>
            <p>Terms of Service</p>
          </div>
          <div className="flex flex-row justify-center">
            <div className="flex flex-col justify-center">
              <div className="text-5xl grid grid-cols-5 w-fit gap-5 text-white">
                <FaInstagramSquare className="hover:cursor-pointer bg-[--bg-white] hover:text-[#d62976] hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-200" />
                <FaTwitterSquare className="hover:cursor-pointer bg-[--bg-white] hover:text-[#00acee] hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-200" />
                <FaYoutubeSquare className="hover:cursor-pointer bg-[--bg-white] hover:text-[#c4302b] hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-200" />
                <FaLinkedin className="hover:cursor-pointer bg-[--bg-white] hover:text-[#0077B5] hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-200" />
                <FaFacebookSquare className="hover:cursor-pointer bg-[--bg-white] hover:text-[#3b5998] hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;