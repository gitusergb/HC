import React, { useState, useEffect } from "react";

const Carousel1 = () => {
  const slides = [
    {
      id: 0,
      title: "Canada Tax Accountant",
      company: "HireBloc Ventures Pvt. Ltd.",
      type: "Remote job",
      time: "Full Time - Permanent",
      experience: "1 - 3 Years",
      location: "New Delhi / India",
      apply: "Apply",
    },
    {
      id: 1,
      title: "Wind Turbine Technician",
      company: "Pearce Services",
      type: "In Office job",
      time: "Full Time - Permanent",
      experience: "5 - 10 Years",
      location: "USA, United States of America",
      apply: "Apply",
    },
    {
      id: 2,
      title: "Sr Full Stack Developer (.Net)",
      company: "Becker Alliance",
      type: "In Office job",
      time: "Full Time - Permanent",
      experience: "4 - 8 Years",
      location: "Chandigarh / India",
      apply: "Apply",
    },
    {
      id: 3,
      title: "Canada Tax Accountant",
      company: "HireBloc Ventures Pvt. Ltd.",
      type: "Remote job",
      time: "Full Time - Permanent",
      experience: "1 - 3 Years",
      location: "New Delhi / India",
      apply: "Apply",
    },
    {
      id: 4,
      title: "Navision Technical Consultant",
      company: "Bhargava Consulting Group",
      type: "In Office job",
      time: "Full Time - Permanent",
      experience: "4 - 6 Years",
      location: "Faridabad | Delhi NCR | Ghaziabad | Noida / India",
      apply: "Apply",
    },

    {
      id: 5,
      title: "Wind Turbine Technician",
      company: "Pearce Services",
      type: "In Office job",
      time: "Full Time - Permanent",
      experience: "5 - 10 Years",
      location: "USA, United States of America",
      apply: "Apply",
    },

    {
      id: 6,
      title: "Sr Full Stack Developer (.Net)",
      company: "Becker Alliance",
      type: "In Office job",
      time: "Full Time - Permanent",
      experience: "4 - 8 Years",
      location: "Chandigarh / India",
      apply: "Apply",
    },

    {
      id: 7,
      title: "Canada Tax Accountant",
      company: "HireBloc Ventures Pvt. Ltd.",
      type: "Remote job",
      time: "Full Time - Permanent",
      experience: "1 - 3 Years",
      location: "New Delhi / India",
      apply: "Apply",
    },
    {
      id: 8,
      title: "Navision Technical Consultant",
      company: "Bhargava Consulting Group",
      type: "In Office job",
      time: "Full Time - Permanent",
      experience: "4 - 6 Years",
      location: "Faridabad | Delhi NCR | Ghaziabad | Noida / India",
      apply: "Apply",
    },
    {
      id: 9,
      title: "Wind Turbine Technician",
      company: "Pearce Services",
      type: "In Office job",
      time: "Full Time - Permanent",
      experience: "5 - 10 Years",
      location: "USA, United States of America",
      apply: "Apply",
    },

    {
      id: 10,
      title: "Sr Full Stack Developer (.Net)",
      company: "Becker Alliance",
      type: "In Office job",
      time: "Full Time - Permanent",
      experience: "4 - 8 Years",
      location: "Chandigarh / India",
      apply: "Apply",
    },

    {
      id: 11,
      title: "Canada Tax Accountant",
      company: "HireBloc Ventures Pvt. Ltd.",
      type: "Remote job",
      time: "Full Time - Permanent",
      experience: "1 - 3 Years",
      location: "New Delhi / India",
      apply: "Apply",
    },
    {
      id: 12,
      title: "Navision Technical Consultant",
      company: "Bhargava Consulting Group",
      type: "In Office job",
      time: "Full Time - Permanent",
      experience: "4 - 6 Years",
      location: "Faridabad | Delhi NCR | Ghaziabad | Noida / India",
      apply: "Apply",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); 

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
 
      prevIndex === 0 ? slides.length - 1: prevIndex - 1

    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
  
    );
  };

  return (
    <main className="container mx-auto py-3 px-5 flex justify-between items-center min-h-2 bg-gray-50">
      <section className="w-full h-64 overflow-hidden relative">
        {/* Slides Container */}
        <div
          className=" w-max flex transition-transform text-sm duration-700 ease-in-out gap-5"
          style={{ transform: `translateX(-${currentIndex *(13/4)}%)` }}
        >
          {slides.map((job) => (
            <div
              key={job.id}
              className=" bg-white p-4 rounded-md shadow-md  shadow-gray-800 text-sm text-left m-2"
            >
              <div className="flex justify-between text-sm items-center mb-2">
                <h3 className="text-sm font-bold text-blue-900 mr-3">{job.title}</h3>
                <span className="bg-yellow-500 text-black font-semibold px-2 py-1 rounded ">
                  {job.type}
                </span>
              </div>
              <p className="text-black ">{job.company}</p>
              <p className="text-gray-600">{job.time}</p>
              <div className="flex items-center text-gray-600 my-2">
                <i className="fas fa-briefcase mr-2"></i>
                <span>{job.experience}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <span>{job.location}</span>
              </div>
              <button className="bg-skyBlue text-white px-4 py-2 rounded box-content font-semibold">
                {job.apply}
              </button>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-skyBlue  rounded-full hover:bg-gray-700 z-10"
        >
          &#11207;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-skyBlue  rounded-full hover:bg-gray-700 z-10"
        >
          &#11208;
        </button>
      </section>
    </main>
  );
};

export default Carousel1;