const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <div className="container px-8 flex flex-col justify-center h-full">
        <p className="mt-4">Hi there, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold ">Mortada Emad</h1>
        <h2 className="text-4xl sm:text-7xl font-bold ">
          I'm a Junior Front-End Developer.
        </h2>
        <p className=" py-4 max-w-[700px]">
          I’m a Front-End Developer specializing in building exceptional digital
          experiences. Currently, I’m focused on building responsive web
          applications.
        </p>
        <div className="flex items-center justify-center sm:justify-start">
          <button className="text-[#222] my-button border-[#222] px-6 py-3 my-2 flex items-center rounded-lg transition-all duration-300">
            View Work
            <span className=" duration-300 index">
              <span className="ml-3 ">👇🏼</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
