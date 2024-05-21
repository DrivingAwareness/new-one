import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Footer.css";
export default function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="companyDetails">
          <h4 style={{ color: "whitesmoke" }}>Driving Awareness</h4>
          <hr style={{ color: "white" }} />
          <p>
            Driving Awareness aims to offer customers a comprehensive solution
            for their needs. It's important to note that we have no affiliation
            with the government. As a third-party agency, we charge fees for our
            services. However, utilizing our services for test booking or
            driving license applications is optional. Customers have the option
            to directly access government websites for these services, where
            they may not encounter any additional charges.
          </p>
        </div>
        <div className="categories">
          <div className="first">
            <h5>Policy</h5>
            <hr style={{ color: "whitesmoke" }} />
            <li>
              <Link to="/Privacy&Policy">Privacy & Policy</Link>
            </li>
            <li>
              <Link to="/Privacy&Policy">Term & conditions</Link>
            </li>
            <li>
              <Link to="/Privacy&Policy">Refund Policy</Link>
            </li>
          </div>
          <div className="second">
            <h5>Support</h5>
            <hr style={{ color: "whitesmoke" }} />
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/">Contact US</Link>
            </li>
          </div>
          <div className="third">
            <h5>Services</h5>
            <hr style={{ color: "whitesmoke" }} />
            <li>
              <Link to="/TheoryTest">Theory Test</Link>
            </li>
            <li>
              <Link to="/Speed_Awareness">Speed Awarness</Link>
            </li>
          </div>
          <div className="fourth">
            <div className="icons">
              <ul>
              <li><Link to="https://www.instagram.com/driving_awareness/?hl=en"><i
                className="fa-brands fa-square-instagram"
                style={{ marginRight: "1rem" }}
              ></i></Link></li>
              <li><Link to="https://www.facebook.com/profile.php?id=61559891456527"> <i
                className="fa-brands fa-facebook"
                style={{ marginRight: "1rem" }}
              ></i></Link></li>
              <li><Link to="https://www.instagram.com/driving_awareness/?hl=en"><i
                className="fa-brands fa-twitter"
                style={{ marginRight: "1rem" }}
              ></i></Link></li>
              <li><Link to=" drivingawareness499@gmail.com"><i
                className="fa-brands fa-linkedin"
                style={{ marginRight: "1rem" }}
              ></i></Link></li>
              
              </ul>
              
              
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        copyright© by Exleligo innovations pvt ltd
      </div>
    </>
  );
}
