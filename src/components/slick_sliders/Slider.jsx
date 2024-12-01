import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 6,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const images = [
  "https://www.jobringer.com/images/content/company-logo/hjp5c8fa4ecee4f8974377e40f77f2350c7.png",
  "https://www.jobringer.com/images/content/company-logo/hjpb2bb2bd64a5d7166a127a56d175aa03a.png",
  "https://www.jobringer.com/images/content/company-logo/hjp244f1acb6f4319b7d8634a948a89b5b4.png",
  "https://www.jobringer.com/images/content/company-logo/hjp38cb583b68503911eb9338bf725a70c4.png",
  "https://www.jobringer.com/images/content/company-logo/hjp7b971a309992f9a06d344e73e6a5d0f9.png",
  "https://www.jobringer.com/images/content/company-logo/hjp627792d86439dc930905a592435619a1.png",
  "https://www.jobringer.com/images/content/company-logo/hjp3fcd3c10ba832229f7a87b56fe4bc93e.png",
  "https://www.jobringer.com/images/content/company-logo/hjp721abe0e8aba6a8ff9f3dcc4187c5531.png",
  "https://www.jobringer.com/images/content/company-logo/hjp347d22ae158c78be65faecc3f64e54fa.png",
  "https://www.jobringer.com/images/content/company-logo/hjp46321a2c8c5e0e646eeda8504dec2824.png",
  "https://www.jobringer.com/images/content/company-logo/hjpf41cf5fb6de8def57359ab44366a4e3f.png",
  "https://www.jobringer.com/images/content/company-logo/hjp338aa39f4ae8dd271d4d086e08018404.png",
  "https://www.jobringer.com/images/content/company-logo/hjpc0f1ebe83c9f2e33f46c0195e633a0e4.png",
  "https://www.jobringer.com/images/content/company-logo/hjp100e74b8bd3c536691bab66ca3344cbc.png",
  "https://www.jobringer.com/images/content/company-logo/hjp0896e404cedf7673c246697629c40c94.png",
  "https://www.jobringer.com/images/content/company-logo/hjp638345be31e98994edc223645e2f9d5d.png",
];

const Slider = () => {
  return (
    <div className="relative w-full overflow-hidden">

    <h2 className="text-2xl font-bold text-center mb-3">FEATURED <span className=' text-gray-700'>EMPLOYERS</span></h2>
    
    <div className="p-4">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        arrows={false}
      >
        {images.map((image, index) => (
          <div
            className="m-2 overflow-hidden rounded-lg border border-gray-300 p-4"
            key={index}
          >
            <img
              className="w-4/5 mx-auto rounded-lg h-4/5"
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
    </div>
  );
};

export default Slider;
