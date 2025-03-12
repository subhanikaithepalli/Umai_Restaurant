import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/footer.css";

const MyFooter = () => {
  return (
    <>
      <div className="footer-helper">
        <footer>
          <div className="footer-flex-top">
            <a
              href="https://github.com/subhanikaithepalli"
              className="footer-link"
              rel="noopener noreferrer"
            >
              ©subhanikaithepalli
            </a>

            <ul className="footer-navigation flex" data-visible="false">
              <li>
                <Link to="/#home">Home</Link>
              </li>
              <li>
                <Link to="/#tradition">Tradition</Link>
              </li>
              <li>
                <Link to="/#delivery">Delivery</Link>
              </li>
              <li>
                <Link to="/#dining">Dining</Link>
              </li>
              <li>
                <Link to="/reservation">Book Table</Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};
// change cart icon to display cuter stuff ? icons maybe ?
export default MyFooter;
