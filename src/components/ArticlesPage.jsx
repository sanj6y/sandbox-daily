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
  const articleTags = new Array(7);


  const title = ["Article 1", "Article 2", "Article 3"];

  const content = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt incidunt adipisci cumque at neque dolorem, eveniet quidem sunt voluptate laudantium sed delectus vel ipsam reprehenderit aliquam consequuntur sapiente quam eaque?",
    "Lorem Ipsum #2",
    "Lorem Ipsum #3",
  ];

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const show = (clickedTags) => {
    let haveAnyBeenClicked = false;
    for (let i = 0; i < articleTags.length; i++){
        if (clickedTags[i] === true && articleTags[i] === clickedTags[i])
            return true;
        else if (clickedTags[i] === true)
          haveAnyBeenClicked = true;
    }

    if (haveAnyBeenClicked === false)
      return true;

    return false;
  }
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
<<<<<<< Updated upstream
            <p>{content[contentIndex]}</p>
=======
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
              officiis enim sapiente quibusdam obcaecati consequatur delectus
              dignissimos perferendis quos culpa saepe deleniti suscipit dolores
              aliquid officia.
            </p>
>>>>>>> Stashed changes
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

  let tagsClicked = new Array(7, useState(false));
  
  const handleNav = () => {
    setNav(!nav);
  };

  const toggleTagged = (buttonTagged) => {
    tagsClicked[buttonTagged] = !tagsClicked[buttonTagged];
  }

  return (
    <div className = "overflow-x-hidden">
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
          <div className="grid grid-cols-4 px-5 md:grid-cols-7 gap-5 text-white mt-4">
            <button class="onClick={() => toggleTagged(0)} bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white !px-4 border border-blue-500 hover:border-transparent rounded h-auto motion-safe:transition ease-in-out duration-300 flex justify-center items-center">
              Money and Banking
            </button>
            <button class="onClick={() => toggleTagged(1)} bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white !px-4 border border-blue-500 hover:border-transparent rounded h-auto motion-safe:transition ease-in-out duration-300 flex justify-center items-center">
              Financial Economics
            </button>
            <button class="onClick={() => toggleTagged(2)} bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white !px-4 border border-blue-500 hover:border-transparent rounded h-auto motion-safe:transition ease-in-out duration-300 flex justify-center items-center">
              Financial Management
            </button>
            <button class="onClick={() => toggleTagged(3)} bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white !px-4 border border-blue-500 hover:border-transparent rounded h-auto motion-safe:transition ease-in-out duration-300 flex justify-center items-center">
              Investments
            </button>
            <button class="onClick={() => toggleTagged(4)} bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white !px-4 border border-blue-500 hover:border-transparent rounded h-auto motion-safe:transition ease-in-out duration-300 flex justify-center items-center">
              Public Finance
            </button>
            <button class="onClick={() => toggleTagged(5)} bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white !px-4 border border-blue-500 hover:border-transparent rounded h-auto motion-safe:transition ease-in-out duration-300 flex justify-center items-center">
              Personal Finance
            </button>
            <button class="onClick={() => toggleTagged(6)} bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white !px-4 border border-blue-500 hover:border-transparent rounded h-auto motion-safe:transition ease-in-out duration-300 flex justify-center items-center">
              Financial Derivatives
            </button>
          </div>
        </div>

        <div className="flex flex-row justify-center mt-16">
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
