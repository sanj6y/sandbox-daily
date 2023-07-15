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

const Cards = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="card bg-white w-96 h-fit m-4 rounded-xl shadow-lg overflow-hidden">
        <div className="w-full h-48">
          <img
            className="object-cover w-full h-full rounded-t-xl"
            src={ex1}
            alt="Article Header"
          />
        </div>
        <div className="w-full text-2xl font-semibold h-8 text-center p-4">
          <p>Article Title</p>
        </div>
        <div className="p-8 w-full h-80 text-gray-400 overflow-hidden relative">
          <div className={`${isExpanded ? "h-full" : "h-64"} overflow-hidden`}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
              officiis enim sapiente quibusdam obcaecati consequatur delectus
              dignissimos perferendis quos culpa saepe deleniti suscipit dolores
              aliquid officia. Maiores ipsam nihil facilis? Quia voluptates
              quibusdam vero non dolorum doloremque accusantium voluptate quis,
              quas odio corrupti a. Debitis aliquid sunt reiciendis incidunt
              iure esse asperiores omnis quia nisi, assumenda rerum laboriosam
              cum possimus. Harum quisquam dolorem maiores repudiandae assumenda
              tenetur soluta quas temporibus architecto. Atque, odio fugit. Eius
              in, quam nisi sunt magni nobis fuga rem. Labore debitis, dolorem
              fugiat eos assumenda at.
            </p>
            {!isExpanded && (
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                <p
                  className="text-blue-500 cursor-pointer"
                  onClick={toggleExpand}
                >
                  Read More
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const HomePage = () => {
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
      <nav className="fixed flex justify-between top-0 z-50 w-full rounded-b-2xl py-2 px-6 border-b-2 bg-gray-50 bg-opacity-75">
        <div className="flex items-center md:pl-32 ease-in-out duration-300">
        <a href = "/home"><img src={logo} alt="sandbox-logo" className="w-12"/></a>
          <h1 className = "font-bold text-3xl tracking-wide px-4">
             Sandbox
          </h1>
        </div>
        <div
          onClick={handleNav}
          className="flex flex-col justify-center md:hidden hover:cursor-pointer"
        >
          {!nav ? <RiCloseFill size={30} /> : <RiMenu3Fill size={25} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-screen border-r border-r-gray-300 bg-gray-50 ease-in-out duration-500"
              : "fixed left-[-100%] top-0 ease-in-out duration-200"
          }

        >
          <div className="flex flex-col justify-center">
            <ul className="text-xl font-medium">
              <li href = "/home" className="w-fit p-4 hover:cursor-pointer hover:text-gray-500 ease-in-out duration-200">HOME</li>
              <li href = "/home" className="w-fit p-4 hover:cursor-pointer hover:text-gray-500 ease-in-out duration-200">ABOUT</li>
              <li href="/services" className="w-fit p-4 hover:cursor-pointer hover:text-gray-500 ease-in-out duration-200">SERVICES</li>
              <li href = "/articles" className="w-fit p-4 hover:cursor-pointer hover:text-gray-500 ease-in-out duration-200">ARTICLES</li>
              <li href = "/home" className="w-fit p-4 hover:cursor-pointer hover:text-gray-500 ease-in-out duration-200">CONTACT</li>
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
            <a href = "/services">SERVICES</a>
          </button>
          <button className="hover:text-gray-500 ease-in-out duration-200">
            <a href = "/articles">ARTICLES</a>
          </button>
          <button className="hover:text-gray-500 ease-in-out duration-200">
            CONTACT
          </button>
        </div>
      </nav>

      {/* HOME PAGE */}
      <div className="h-screen text-center items-center flex flex-col justify-center bg-gray-50 border-b-8">
        <p className="font-semibold text-gray-300">Understand Finance.</p>
        <h1 className="font-semibold text-5xl p-4">
          Welcome To{" "}
          <span className="bg-gradient-to-tr from-[#B64100] to-[#B66D00] text-transparent bg-clip-text">
            Sandbox.
          </span>
        </h1>
        <p className="font-semibold text-gray-300 pb-10">
          Articles for those who need them most.
        </p>
        <button className="bg-gradient-to-tr from-[#B64100] to-[#B66D00] w-fit rounded-lg">
          <p className="p-4 text-white">Get Started</p>
        </button>
      </div>

      {/* ABOUT PAGE */}
      <div id = "about" className="h-screen flex flex-col items-center justify-center text-center border-b-8 bg-white">
        <h1 className="md:text-6xl  sm:text-5xl text-4xl font-bold text-black">
          Become Financially Literate.
        </h1>
        <h2 className="text-2xl mt-4 text-black">...and do much more.</h2>
        <p className="mt-4 text-black md:max-w-6xl sm:max-w-4xl max-w-lg md:text-5xl sm:text-3xl text-xl">
          - get smarter in 5 minutes daily through our email
          <br />
        </p>
      </div>

      {/* PAST ARTICLES PAGE }
      <div className="relative border-b-8 bg-gray-50">
        <div className="text-center mt-16 text-5xl font-bold">
          Take a look at our previous Articles.
        </div>
        <div className="absolute right-0 top-5">
          <button
            onClick={scrollLeft}
            className="p-2 m-2 rounded-full bg-white"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 m-2 rounded-full bg-white"
          >
            <FiChevronRight />
          </button>
        </div>
        <div
          id="content"
          className="p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide"
        >
          <div>
            <Cards />
          </div>
          <div>
            <Cards />
          </div>
          <div>
            <Cards />
          </div>
          <div>
            <Cards />
          </div>
          <div>
            <Cards />
          </div>
        </div>
        </div>*/}

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
              className="p-4 border-4 border-gray-400 text-gray-500 rounded-md hover:cursor-pointer"
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
                <a href = "https://www.instagram.com/sandboxdaily/?igshid=MWQ1ZGUxMzBkMA%3D%3D" target={"_blank"} rel="noreferrer"><FaInstagramSquare className="hover:cursor-pointer bg-[--bg-white] hover:text-[#d62976] hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-200" /></a>
                <a href = "https://www.instagram.com/sandboxdaily/?igshid=MWQ1ZGUxMzBkMA%3D%3D" target={"_blank"} rel="noreferrer"><FaTwitterSquare className="hover:cursor-pointer bg-[--bg-white] hover:text-[#00acee] hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-200" /></a>
                <a href = "https://www.instagram.com/sandboxdaily/?igshid=MWQ1ZGUxMzBkMA%3D%3D" target={"_blank"} rel="noreferrer"><FaYoutubeSquare className="hover:cursor-pointer bg-[--bg-white] hover:text-[#c4302b] hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-200" /></a>
                <a href = "https://www.instagram.com/sandboxdaily/?igshid=MWQ1ZGUxMzBkMA%3D%3D" target={"_blank"} rel="noreferrer"><FaLinkedin className="hover:cursor-pointer bg-[--bg-white] hover:text-[#0077B5] hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-200" /></a>
                <a href = "https://www.instagram.com/sandboxdaily/?igshid=MWQ1ZGUxMzBkMA%3D%3D" target={"_blank"} rel="noreferrer"><FaFacebookSquare className="hover:cursor-pointer bg-[--bg-white] hover:text-[#3b5998] hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-200" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
