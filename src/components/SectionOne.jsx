import React from "react";
import Carousel1 from "./slick_sliders/Carousel1";
//import Carousel3 from "./slick_sliders/Carousel3";
import Slider from "./slick_sliders/Slider";

const SectionOne = () => {
  return (
    <>
      <main className="container mx-auto py-3 px-5">
        <div className="text-center mb-5 text-blue-900">
          <h1 className="text-lg font-extrabold">
            BRINGING YOU THE PERFECT JOB !
          </h1>
          <p className="text-lg font-medium">11,000+ JOBS to Apply</p>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly align-middle gap-7">
          <div className="bg-skyBlue p-4 pt-7 rounded-md w-full md:w-1/2 mb-2 md:mb-0">
            <div className="flex justify-between gap-3 mb-2">
              <input
                type="text"
                placeholder="Search Jobs Now"
                className="w-full p-2 rounded-md mb-2"
              />
              <button className="bg-yellow-400 text-black px-4 py-2 rounded">
                Search
              </button>
            </div>

            <div className="flex justify-end gap-3">
              <button className="bg-white text-black px-4 py-2 rounded">
                View Jobs
              </button>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded">
                Register For FREE
              </button>
            </div>
          </div>
          <div className="bg-skyBlue p-2 pt-3 rounded-md w-full md:w-1/2">
            <h2 className="text-blue-900 text-lg font-bold mb-2">
              Quick Job Search <i className="fas fa-search"></i>
            </h2>
            <div className="flex flex-wrap text-sm">
              {[
                "#Fresher",
                "#Work From Home",
                "#WFH",
                "#IT",
                "#HR",
                "#Back Office",
                "#BPO Jobs",
                "#ITES",
                "#Finance",
                "#Accounts",
                "#Medical",
                "#Pharma",
                "#Manager",
                "#Developer",
                "#Marketing",
                "#Engineering",
                "#Non Government Jobs",
              ].map((tag) => (
                <span key={tag} className="text-white px-1 py-1 m-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <section>
          <h2 className="text-2xl font-bold mt-4 mb-4 text-blue-800">
            Featured Jobs
          </h2>
          <Carousel1 />
          <h2 className="text-2xl font-bold mt-4 mb-4 text-blue-800">
          Remote Jobs
          </h2>
          <Carousel1 />
          <Slider />
        </section>
      </main>
    </>
  );
};

export default SectionOne;
