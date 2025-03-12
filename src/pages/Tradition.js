import React from "react";
import TraditionImg from "../assets/images/tradition.webp";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

const Tradition = () => {
  let breadcrumbs = "寿司の伝統 / Sushi Tradition";
  let floatingTitle = "寿司の伝統 / Sushi Tradition";
  return (
    <section className="section section-tradition my-8 flex flex-col md:max-w-[1300px] md:m-auto md:flex-row md:justify-between  md:items-start" id="tradition">
      <a
        href="https://unsplash.com/photos/9sM53e9wTTY"
        className="flex items-center"
      >
        <img
          className="rounded-ee-[5em] rounded-ss-[5em] md:mt-40"
          src={TraditionImg}
          alt="japanese restaurant outdoors"
          height={600}
          width={400}
          loading="lazy"
        />
      </a>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="my-8 flex flex-col gap-4 px-5 md:items-start md:max-w-[60%]"
      >
        <Link to="/#tradition">
          <h2 className="text-xl font-bold text-pink text-center md:mt-40">{breadcrumbs}</h2>
        </Link>
        <h1 className="font-tokyo text-6xl font-semibold text-blue text-center relative overflow-hidden">
          <span className="floating-title">{floatingTitle}</span>
          OUR UMAī <span className="text-pink">TRADīTīON</span>
        </h1>
        <p className="text-grey text-lg md:text-base md:max-w-md">
          We are a Japanese restaurant that has been serving authentic Japanese
          cuisine for over 50 years. Our restaurant has been a
          <span className="text-pink"> family tradition </span>
          for generations, and we take great pride in continuing to provide our
          customers with the{" "}
          <span className="text-pink">
            highest quality dishes and unparalleled service.
          </span>
        </p>
        <Link
          to="/#delivery"
          className=" section-button store-button"
          aria-label="Go to Order Food"
        >
          Order Online
        </Link>
      </motion.div>
    </section>
  );
};
export default Tradition;
