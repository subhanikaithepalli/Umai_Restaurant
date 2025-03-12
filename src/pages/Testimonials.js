import React from "react";
import profilePic from "../assets/images/alexander-hipp.webp"

const Testimonials = () => {
  return (

        <div className="section-testimonials bg-yellow px-2 py-10 flex flex-col gap-2 md:flex-row md:justify-center md:gap-40 md:py-20">
        <div className="flex flex-col gap-1">
          <div className="font-bold italic text-4xl text-blue"> 20k+</div>
          <p className="text-blue text-xl">Happy Customers</p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row max-w-[400px]">
          <a
            href="https://unsplash.com/photos/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA"
            alt="source for the image of alexander hipp"
            className="flex items-center"
          >
            <img
              src={profilePic}
              loading="lazy"
              alt="testimonial person"
              width={100}
              height="auto"
              className="rounded-full max-w-[100px]"
            />
          </a>
          <div className="text-blue text-base text-center">
            If you're a sushi lover, this restaurant is
            <span className="text-pink"> an absolute must-visit. </span>
            If you want to experience <span className="text-pink">the best sushi</span> in town, look no further
            than this restaurant.
          </div>
        </div>
      </div>
  );
};

export default Testimonials;
