import React, { useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import HomeImg from "../assets/images/homeimg.webp";
import flowerIcon from "../assets/icons/flowericon.png";
import Dining from "./Dining";
import Tradition from "./Tradition";
import Delivery from "./Delivery";
import Subscribe from "./Subscribe";
import Testimonials from "./Testimonials";
import { motion } from "framer-motion";

const Home = ({ products, handleCartAdd, setActiveSection, applyDiscount }) => {
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        )?.target;
        if (visibleSection) {
          setActiveSection(visibleSection.id);
        }
      },
      {
        threshold: 0.5,
      }
    );
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      observer.current.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <section className="section section-home flex flex-col my-8 md:max-w-[1300px] md:m-auto md:flex-row md:justify-between md:items-start md:mt-20">
          <div className="flex flex-col px-2 gap-4 my-8 md:items-start md:max-w-[60%]">
            <h1 className="font-tokyo text-6xl font-semibold text-blue">
              ENJOY THE TASTE OF
              <br /> <span className="text-pink">UMAī</span> FOOD
            </h1>
            <p className="text-grey text-xl md:text-base md:max-w-[70%]">
              Sushi, one of the most popular Japanese dishes, has a rich and
              fascinating history that dates back to the 8th century. <br />

            </p>
            <ul className="flex flex-col gap-2 text-grey text-lg md:flex-row md:items-start md:text-base">
              <li className="flex w-full justify-between p-3 bg-white border-b-2 border-solid border-pink drop-shadow md:h-48 hover:cursor-pointer hover:translate-y-[-10px]">
                <p className="self-start">
                Experience the essence of Japan with Umaī! From street-style takoyaki to elegant sushi platters,
                 we bring authentic flavors straight to your table.
                 
                </p>
                <img
                  src={flowerIcon}
                  width={25}
                  height={25}
                  alt="flower icon"
                  className="md:self-end"
                />
              </li>
              <li className="flex w-full justify-between p-3 bg-white border-b-2 border-solid border-pink drop-shadow md:h-48 hover:cursor-pointer hover:translate-y-[-10px]">
                <p className="self-start">
                "Umaī" (うまい) means 'delicious' in Japanese! Every dish we feature is crafted to bring
                 you the true flavors of Japan, making every bite an unforgettable experience.
                </p>
                <img
                  src={flowerIcon}
                  width={25}
                  height={25}
                  alt="flower icon"
                  className="md:self-end"
                />
              </li>
              <li className="flex w-full justify-between p-3 bg-white border-b-2 border-solid border-pink drop-shadow md:h-48 hover:cursor-pointer hover:translate-y-[-10px]">
                <p className="self-start">
                Explore the menu, place an order, or reserve your spot at a top Japanese restaurant—all in just a few clicks!
                </p>
                <img
                  src={flowerIcon}
                  width={25}
                  height={25}
                  alt="flower icon"
                  className="md:self-end"
                />
              </li>
            </ul>
            <Link
              to="/#delivery"
              className="section-button"
              aria-label="Go to Order Food"
            >
              Order Online
            </Link>
          </div>
          <a href="https://unsplash.com/photos/NVX55qVyEkE" className="flex items-center">
            <img
              className="rounded-ee-[5em] rounded-ss-[5em]"
              src={HomeImg}
              alt="japanese restaurant outdoors"
              height={600}
              width={400}
              loading="lazy"
            />
          </a>
        </section>
        <Tradition />
        <Delivery products={products} handleCartAdd={handleCartAdd} />
        <Dining />
        <Testimonials />
        <Subscribe applyDiscount={applyDiscount} />
      </motion.div>
    </>
  );
};

export default Home;
