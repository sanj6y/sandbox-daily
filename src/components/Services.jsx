import React, { useState } from "react";
import logo from "../assets/sandbox-logo.png";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const Services = () => {

  const [nav, setNav] = useState(true);

const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      id="projects"
      className="h-fit py-8 border-b-8 border-gray-200 flex flex-col text-center"
    >
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
      <h1 className = "mt-8 text-4xl">Still under construction - check back later!</h1>
      {/*<h1 className="py-12 md:text-6xl sm:text-5xl text-4xl font-bold text-black">
        SERVICES
      </h1>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-gray-100 h-[80vh] md:ml-3 flex flex-col justify-between p-4 items-center shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold">
            Sandbox Mobile
          </p>
          <p className="md:text-2xl sm:text-xl text-lg max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            magni ad reiciendis aliquid cum nobis exercitationem saepe
            accusantium molestias tenetur, ducimus harum, quisquam velit ratione
            iure voluptas voluptatibus explicabo sed.
          </p>
        </div>
        <div className="bg-gray-100 h-[80vh] md:mr-3 flex flex-col justify-between p-4 items-center shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold">
            Sandbox Finance Manager
          </p>
          <p className="md:text-2xl sm:text-xl text-lg max-w-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            repellat esse, iste ab dolore necessitatibus consequuntur. Maiores
            corrupti eius nobis amet ab sequi molestias nesciunt error optio
            porro! Iure, laborum.
          </p>
        </div>
        <div className="bg-gray-100 h-[80vh] md:ml-3 flex flex-col justify-between p-4 items-center shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold -mt-8">
            Sandbox Lorem Ipsum
          </p>
          <p className="md:text-2xl sm:text-xl text-lg max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            velit beatae cum distinctio repellat, pariatur porro, qui, numquam
            nobis quo maxime aliquid ab id voluptatum nostrum placeat accusamus
            soluta perspiciatis?
          </p>
        </div>
        <div className="bg-gray-100 h-[80vh] md:mr-3 flex flex-col justify-between p-4 items-center shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold">
            Sandbox another thing
          </p>
          <p className="md:text-2xl sm:text-xl text-lg max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            quae ex! Reprehenderit animi quis consectetur cumque reiciendis
            quisquam rerum, quibusdam obcaecati excepturi nobis cupiditate vero
            accusamus! Et maiores impedit consectetur.
          </p>
        </div>
  </div>*/}
    </div>
  );
};

export default Services;
