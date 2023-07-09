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
import ex1 from "../assets/example-img-1.jpeg";

const Cards = (contentIndex) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const title = ["Article 1", "Article 2", "Article 3"];

  const content = [
    "Lorem Ipsum #1",
    "Lorem Ipsum #2",
    "Lorem Ipsum #3",
  ];

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card bg-white w-80 max-h-96 rounded-xl shadow-lg overflow-hidden">
      <div className="w-full h-36">
        <img
          className="object-cover w-full h-full rounded-t-xl"
          src={ex1}
          alt="Article Header"
        />
      </div>
      <div className="w-full text-2xl font-semibold h-8 text-center p-4 text-black">
        <p>{title[contentIndex]}</p>
      </div>
      <div className="p-8 w-full h-80 text-gray-400 overflow-hidden relative">
        <div className={`${isExpanded ? "h-full" : "h-64"} overflow-hidden`}>
          <p>{content[contentIndex]}</p>
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
  );
};

const ArticlesPage = () => {
  const [nav, setNav] = useState(true);

  const [tag1, setTag1] = useState(false);
  const [tag2, setTag2] = useState(false);
  const [tag3, setTag3] = useState(false);
  const [tag4, setTag4] = useState(false);
  const [tag5, setTag5] = useState(false);
  const [tag6, setTag6] = useState(false);
  const [tag7, setTag7] = useState(false);
  const [tag8, setTag8] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleTag1 = () => {
    setTag1(!tag1);
  };
  const handleTag2 = () => {
    setTag2(!tag2);
  };
  const handleTag3 = () => {
    setTag3(!tag3);
  };
  const handleTag4 = () => {
    setTag4(!tag4);
  };
  const handleTag5 = () => {
    setTag5(!tag5);
  };
  const handleTag6 = () => {
    setTag6(!tag6);
  };
  const handleTag7 = () => {
    setTag7(!tag7);
  };
  const handleTag8 = () => {
    setTag8(!tag8);
  };

  return (
    <div className="overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed flex justify-between top-0 z-50 w-full rounded-b-2xl py-2 px-6 border-b-2 bg-gray-50 bg-opacity-75">
        <div className="flex items-center md:pl-32 ease-in-out duration-300">
          <img src={logo} alt="sandbox-logo" className="w-12" />
          <h1 className="font-bold text-3xl tracking-wide px-4">Sandbox</h1>
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
              <li className="w-fit p-4 hover:cursor-pointer hover:text-gray-500 ease-in-out duration-200">
                HOME
              </li>
              <li className="w-fit p-4 hover:cursor-pointer hover:text-gray-500 ease-in-out duration-200">
                ABOUT
              </li>
              <li
                href="/services"
                className="w-fit p-4 hover:cursor-pointer hover:text-gray-500 ease-in-out duration-200"
              >
                SERVICES
              </li>
              <li className="w-fit p-4 hover:cursor-pointer hover:text-gray-500 ease-in-out duration-200">
                ARTICLES
              </li>
              <li className="w-fit p-4 hover:cursor-pointer hover:text-gray-500 ease-in-out duration-200">
                CONTACT
              </li>
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
          <button className="hover:text-gray-500 ease-in-out duration-200">
            <a href="/services">SERVICES</a>
          </button>
          <button className="hover:text-gray-500 ease-in-out duration-200">
            <a href="/articles">ARTICLES</a>
          </button>
          <button className="hover:text-gray-500 ease-in-out duration-200">
            CONTACT
          </button>
        </div>
      </nav>

      <div>
        <div className="flex flex-row justify-center">
          <h1 className="text-5xl font-bold mt-24">ARTICLES</h1>
        </div>
        <div className="flex flex-row justify-center">
          <hr className=" w-11/12 h-1 mt-4 bg-gray-200 border-none rounded-full" />
        </div>
        <div className="flex flex-row justify-center">
          <div className="grid grid-cols-4 gap-5 text-white mt-10">
            <button
              onClick={handleTag1}
              className={`${
                tag1 ? "bg-blue-500 text-white" : "bg-transparent text-blue-700"
              } md:text-base sm:text-sm text-xs hover:bg-blue-500 font-semibold hover:text-white !px-4 border border-blue-500 hover:border-transparent rounded ease-in-out duration-[400ms] py-4`}
            >
              Money and Banking
            </button>
            <button
              onClick={handleTag2}
              className={`${
                tag2 ? "bg-blue-500 text-white" : "bg-transparent text-blue-700"
              } md:text-base sm:text-sm text-x hover:bg-blue-500 font-semibold hover:text-white !px-4 border border-blue-500 hover:border-transparent rounded ease-in-out duration-[400ms]`}
            >
              Financial Economics
            </button>
            <button
              onClick={handleTag3}
              className={`${
                tag3 ? "bg-blue-500 text-white" : "bg-transparent text-blue-700"
              } md:text-base sm:text-sm text-xs hover:bg-blue-500 font-semibold hover:text-white !px-4 border border-blue-500 hover:border-transparent rounded ease-in-out duration-[400ms]`}
            >
              Financial Management
            </button>
            <button
              onClick={handleTag4}
              className={`${
                tag4 ? "bg-blue-500 text-white" : "bg-transparent text-blue-700"
              } md:text-base sm:text-sm text-xs hover:bg-blue-500 font-semibold hover:text-white !px-4 border border-blue-500 hover:border-transparent rounded ease-in-out duration-[400ms]`}
            >
              Investments
            </button>
            <button
              onClick={handleTag5}
              className={`${
                tag5 ? "bg-blue-500 text-white" : "bg-transparent text-blue-700"
              } md:text-base sm:text-sm text-xs hover:bg-blue-500 font-semibold hover:text-white !px-4 border border-blue-500 hover:border-transparent rounded ease-in-out duration-[400ms] py-4`}
            >
              Public Finance
            </button>
            <button
              onClick={handleTag6}
              className={`${
                tag6 ? "bg-blue-500 text-white" : "bg-transparent text-blue-700"
              } md:text-base sm:text-sm text-xs hover:bg-blue-500 font-semibold hover:text-white !px-4 border border-blue-500 hover:border-transparent rounded ease-in-out duration-[400ms]`}
            >
              Personal Finance
            </button>
            <button
              onClick={handleTag7}
              className={`${
                tag7 ? "bg-blue-500 text-white" : "bg-transparent text-blue-700"
              } md:text-base sm:text-sm text-xs hover:bg-blue-500 font-semibold hover:text-white !px-4 border border-blue-500 hover:border-transparent rounded h-auto ease-in-out duration-[400ms]`}
            >
              Financial Derivatives
            </button>
            <button
              onClick={handleTag8}
              className={`${
                tag8 ? "bg-blue-500 text-white" : "bg-transparent text-blue-700"
              } md:text-base sm:text-sm text-xs hover:bg-blue-500 font-semibold hover:text-white !px-4 border border-blue-500 hover:border-transparent rounded h-auto ease-in-out duration-[400ms]`}
            >
              Whitepaper
            </button>
          </div>
        </div>

        <div className="flex flex-row justify-center -mt-4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-rows-3 gap-5 pt-16 h-fit text-white">
            <div>{Cards(0)}</div>
            <div>{Cards(0)}</div>
            <div>{Cards(0)}</div>
            <div>{Cards(0)}</div>
            <div>{Cards(0)}</div>
            <div>{Cards(0)}</div>
            <div>{Cards(0)}</div>
            <div>{Cards(0)}</div>
            <div>{Cards(0)}</div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <button className="bg-black text-white rounded-md my-9">
            <p className="p-4">Load More</p>
          </button>
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
