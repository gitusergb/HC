import React from "react";

const SectionTwo = () => {
  return (
    <div className="text-center">
        <div className="flex justify-normal mt-3 bg-[url('https://i.ibb.co/Y84gjn8/1mobile-bg.jpg')] h-[325px]" >
      <div className="flex flex-col text-left ml-28 ">
        <h2 className="text-2xl font-semibold">APPLY TO JOBS ON-THE-GO</h2>
        <p className="text-blue-800 text-2xl font-thin">Jobringer Mobile App</p>
        <div className="flex  justify-center my-4">
          <img
            src="https://www.jobringer.com/images/anroid.png"
            alt="Google Play Store"
            className="mr-2"
          />
          <img
            src="https://www.jobringer.com/images/ios.png"
            alt="Apple App Store"
            className="mr-2"
          />
        </div>
        <p className="text-3xl font-bold">
          Mobile App <span className="text-blue-600">Download</span>
        </p>
        </div>
        </div>

      <div className=" bg-lightblue p-4 ">
        <div className="flex justify-around  bg-lightblue">
          <div className="relative bg-lightblue bg-[url('https://www.jobringer.com/images/city-job-bg.jpg')] bg-cover bg-opacity-10">
            <h2 className="text-2xl font-bold">JOBS IN INDIA</h2>
            <span className=" px-4">
                  <ul className="flex flex-wrap gap-4 px-4">
                      <li>#Mumbai</li>
                      <li>#Delhi</li>
                      <li>#Ajmer</li>
                      <li>#Pune</li>
                      <li>#Hyderabad</li>
                      <li>#Chennai</li>
                      <li>#Kolkata</li>
                      <li>#Indore</li>
                      <li>#Gurugram</li>
                      <li>#Jaipur</li>
                      <li>#Ahmedabad</li>
                    </ul>
            </span>
          </div>
          <div className="relative bg-customTransparent bg-[url('https://www.jobringer.com/images/city-job-bg.jpg')] bg-cover bg-opacity-30">
            <h2 className="text-2xl font-bold">INTERNATIONAL JOBS</h2>
            <span className=" px-4 ">
            <ul className="flex flex-wrap gap-4 px-4">
                    <li>#Africa</li>
                    <li>#USA</li>
                    <li>#UK</li>
                    <li>#Australia</li>
                    <li>#Canada</li>
                    <li>#Singapore</li>
                    <li>#Dubai</li>
                    <li>#Saudi Arabia</li>
                    <li>#New Zealand</li>
                  </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
