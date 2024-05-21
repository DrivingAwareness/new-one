import React from "react";
import Upper from './Upper'
import "../assets/css/content.css";
import { Link } from "react-router-dom";

export default function Content() {
  return (
    <>
    <div className="contant-main">
      <Upper/>
    <div className="content">
      <div className="left-content">
        <div className="Left-content-heading">
          <h1>
            <span className="Book">Book your Speed Awareness course</span>
            <span className="today">Today !</span>
          </h1>
        </div>
        <div className="Left-content-paragraph">
          <p>
            Stay informed about UK traffic regulations! Breaking the speed limit
            can result in a £100 fine and 3 points on your license. To avoid
            these penalties, drivers may be required to attend a speed awareness
            course. Recent data from a survey by RAC reveals that in 2023, a
            staggering 1.48 million UK drivers participated in such courses.
            Stay safe and compliant on the road by staying up-to-date with our
            resources.
          </p>
        </div>
      </div>
      <div className="right-content">
        <div className="form-box">
          <h4>Contact Now</h4>
         <h6> <Link to="mailto:Booking@Drivingawareness.com">[Booking@Drivingawareness.com]</Link></h6>
          <form action="/">
            <input type="text" placeholder="Fullname" />
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Mobile"/>
            <textarea
              style={{ resize: "none" }}
              placeholder="message"
            ></textarea>
            <input className="submit" type="submit" placeholder="submit" />
          </form>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
