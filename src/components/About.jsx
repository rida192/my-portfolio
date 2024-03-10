import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-full pt-20   ">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#222]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className=" text-4xl font-bold">
            <p>Hello I'm Mortada nice to meet you, enjoy the journey.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent responsive web
              application. I am specialized in creating websites for clients
              ranging from individuals and small-businesses all the way to large
              enterprise corporations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
