import React from "react";
import leftSectionTwoImage from "../assets/images/restaurant.webp";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

const Dining = () => {
  let title = "Book your table today";
  let breadcrumbs = "予約 / Dining";
  let floatingTitle = "予約 / Dining";
  return (
    <section className="section section-dining my-8 flex flex-col md:max-w-[1300px] md:m-auto md:flex-row md:justify-between  md:items-start md:mb-20" id="dining">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col px-2 gap-4 my-8 md:items-start md:max-w-[60%]"
      >
        <Link to="/#dining">
          <h2 className="text-xl font-bold text-pink text-center md:mt-40">{breadcrumbs}</h2>
        </Link>
        <h1 className="font-tokyo text-6xl font-semibold text-blue text-center relative overflow-hidden">
          <span className="floating-title">{floatingTitle}</span>
          {title}
        </h1>
        <p className="text-grey text-lg">
          When it comes to experiencing the{" "}
          <span className="text-pink"> rich and delicious flavors</span>{" "}
          of Japanese cuisine, reserving a dinner table at a Japanese restaurant
          is a must. Whether you're looking to enjoy a sushi platter, indulge in
          a hot bowl of ramen, or savor some authentic Japanese dishes, booking
          a table beforehand ensures you'll have a
          <span className="text-pink">
            {" "}
            hassle-free dining experience.
          </span>
        </p>
          <Link to="/reservation" className="section-button store-button">
            Reservation
          </Link>
      </motion.div>
      <a href="https://unsplash.com/photos/HvhinFxq4_s" className="flex items-center md:mt-40">
        <img
          className="rounded-ee-[5em] rounded-ss-[5em]"
          src={leftSectionTwoImage}
          alt="restaurant pic with lightbulbs outside"
          height={600}
          width={400}
          loading="lazy"
        />
      </a>
    </section>
  );
};
export default Dining;
