import React from "react";

const Services = () => {
  return (
    <div
      id="projects"
      className="h-fit py-8 border-b-8 border-gray-200 flex flex-col text-center"
    >
      <h1 className="py-12 md:text-6xl sm:text-5xl text-4xl font-bold text-black">
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
      </div>
    </div>
  );
};

export default Services;
