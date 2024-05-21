import React from "react";
import "../assets/css/About.css";
// import Button from "./Button";
import Footer from "./Footer";
import Upper from "./Upper";

function AboutUs() {
  return (
    <div>
      <div className="About">
         <Upper />
        <h1>About Us</h1>
        <p>
          Welcome to Driving Awareness, your trusted destination for speed
          awareness courses and theory test preparation for driving licenses in
          the United Kingdom. At Driving Awareness, we are dedicated to helping
          drivers become safer and more informed on the road. Our mission is to
          provide accessible, comprehensive, and effective resources to support
          individuals in their journey towards becoming responsible drivers.
          Whether you're a new driver preparing for your theory test or seeking
          to enhance your driving skills through a speed awareness course, we're
          here to guide you every step of the way.
        </p>
        <p>
          What sets us apart is our commitment to excellence and customer
          satisfaction. Our team consists of experienced driving instructors and
          road safety experts who are passionate about empowering drivers with
          the knowledge and skills they need to navigate the roads safely and
          confidently. Driving Theory Test Since its inception in 1996, the
          driving theory test has been an integral part of ensuring drivers
          possess comprehensive knowledge of road awareness and safety beyond
          just practical driving skills.
        </p>
        <p>
          Introduced in 2001, the hazard perception test added another dimension
          to this examination, evaluating individuals' ability to identify
          potential hazards on the road through video-based scenarios.
          Successfully passing the theory test is a prerequisite before
          undertaking the practical driving test. Preparing for the theory test
          is a vital component of learning to drive. Concurrently revising and
          mastering driving theory alongside practical lessons can greatly
          enhance your overall driving skills. To obtain your driving theory
          test certificate, you must pass both segments of the test – the theory
          questions and the hazard perception section. Failing either component
          necessitates retaking the entire test, underscoring the importance of
          thorough preparation.
        </p>
        {/* <div className="button">
          <button >Book Now</button>
          <button>Email Us</button>
        </div> */}
      </div>
        <Footer/>
    </div>
  );
}

export default AboutUs;
