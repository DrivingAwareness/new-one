import React from "react";
import "../assets/css/Upper.css";
import { Link } from "react-router-dom";

export default function Upper() {
  return (
    <>
      <div>
        <div className="header">
          <nav>
            <Link to="/">
            <div className="logo">
              <img
                src="public\Screenshot_2024-05-13_172814-removebg-preview.png"
                alt=""
              />
            </div>
            </Link>
            <div className="nav-part2">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Speed_Awareness">Speed Awareness</Link>
                </li>
                <li>
                  <Link to="/TheoryTest">Theory Test</Link>
                </li>
              </ul>
            </div>
            <div className="nav-part3">
              <ul>
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="tel:+91906735982">906735982</Link>
                </li>
              </ul>
            </div>
            <div className="hamburger-menu">
              <i
                className="fa-solid fa-bars fa-xl btn btn-danger"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              ></i>

              <div
                className="offcanvas offcanvas-end w-75"
                tabindex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasRightLabel">
                    Menu
                  </h5>
                  <i
                    className="fa-solid fa-xmark fa-2xl "
                    type="button"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></i>
                </div>
                <div className="offcanvas-body">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/Speed_Awareness">Speed Awareness</Link>
                    </li>
                    <li>
                      <Link to="/TheoryTest">Theory Test</Link>
                    </li>
                    <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      <Link to="tel:+917018324802">7018324802</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
