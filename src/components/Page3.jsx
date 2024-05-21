import React from "react";
import { Link, Router } from "react-router-dom";
import "../assets/css/Page3.css";

export const Page3 = () => {
  return (
    <>
      <div className="page3">
        <div className="contain">
          <div className="page3left">
            <h1>About Us</h1>
            <p>
              Welcome to Driving Awareness, your trusted destination for speed
              awareness courses and theory test preparation for driving licenses
              in the United Kingdom. At Driving Awareness, we are dedicated to
              helping drivers become safer and more informed on the road. Our
              mission...<Link to="/about">read more</Link>
            </p>
          </div>
          {/* <div className="page3right">
            <img
              src="https://media.istockphoto.com/id/1277410351/photo/overjoyed-diverse-employees-giving-high-five-at-corporate-meeting.webp?b=1&s=170667a&w=0&k=20&c=zdH9qCyc7lCdbUh6z7TuKgBw6RItX4iIfc4bmf7pYuc="
              alt=""
            />
          </div> */}
        </div>
      </div>
    </>
  );
};
