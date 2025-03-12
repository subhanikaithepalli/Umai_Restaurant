import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import bookTableImageLeft from "../assets/images/leftbannerfix.png";
import bookTableImageRight from "../assets/images/rightbanner.png";
import { motion } from "framer-motion";
import "../styles/contact.css";

const Reservation = ({ setActiveSection }) => {
  let title = "Make a Reservation at Umaī";
  let breadcrumbs = "席を予約する / Book Table";
  let floatingTitle = "席を予約する / Book Table";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reservDate, setReservDate] = useState("");
  const [notes, setNotes] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createPopup();
  };
  const createPopup = () => {
    const popupAlert = document.createElement("div");
    popupAlert.classList.add("popup");
    popupAlert.innerText = `Your reservation has been submitted on the date of ${reservDate} for ${name}`;
    document.querySelector(".section-contact").append(popupAlert);
    setTimeout(() => {
      popupAlert.remove();
      setName("");
      setEmail("");
      setPhone("");
      setReservDate("");
      setNotes("");
    }, 2000);
  };
  useEffect(() => {
    setActiveSection(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section
      className=" section section-subscribe section-contact flex flex-col md:flex-row md:justify-between md:min-h-[87vh]"
      id="reservation"
    >
      <img
        src={bookTableImageLeft}
        alt="animated sushi table"
        className="max-w-[100px] self-start md:min-w-[200px]"
        height="auto"
        loading="lazy"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:self-center"
      >
        <Link to="/contact">
          <h2 className="text-xl font-bold text-white text-center hover:cursor-pointer">
            {breadcrumbs}
          </h2>
        </Link>
        <h1 className="text-6xl font-bold text-white text-center font-tokyo relative overflow-hidden">
          <span className="floating-title">{floatingTitle}</span>
          {title}
        </h1>
        {/* <p className="section-paragraph">
          This reservation form works.
        </p> */}
        <form className="section-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <div className="form-label-group">
              <label htmlFor="name">*Name: </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-label-group">
              <label htmlFor="email">*Email: </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="john.doe@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-label-group">
              <label htmlFor="phone">*Phone: </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="0012-345-567"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-label-group">
              <label htmlFor="res-date">*Reservation Date: </label>
              <input
                type="date"
                name="res-date"
                id="res-date"
                value={reservDate}
                onChange={(e) => setReservDate(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-label-group">
              <label htmlFor="notes">Notes: </label>
              <input
                type="text"
                name="notes"
                placeholder="Optional preferences, table size.."
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>
          <button
            className="section-button submit-reservation-button"
            aria-label="Submit reservation"
            type="submit"
          >
            Submit Reservation
          </button>
        </form>
      </motion.div>
      <img
        className="max-w-[100px] self-end md:min-w-[200px]"
        src={bookTableImageRight}
        alt="animated sushi table"
        loading="lazy"
      />
    </section>
  );
};
export default Reservation;
