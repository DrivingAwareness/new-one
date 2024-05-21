import React from "react";
import "../assets/css/TheoryTest.css";
import Footer from "./Footer";
import Upper from "./Upper";

function TheoryTest() {
  return (
    <div>
      <div className="Theory-Test">
       <Upper />
        <div className="Theory-upper">
          <h1>Driving Theory Test</h1>
          <p className="paragraph">
            Since its inception in 1996, the driving theory test has been an
            integral part of ensuring drivers possess comprehensive knowledge of
            road awareness and safety beyond just practical driving skills.
            Introduced in 2001, the hazard perception test added another
            dimension to this examination, evaluating individuals' ability to
            identify potential hazards on the road through video-based
            scenarios. Successfully passing the theory test is a prerequisite
            before undertaking the practical driving test. Preparing for the
            theory test is a vital component of learning to drive. Concurrently
            revising and mastering driving theory alongside practical lessons
            can greatly enhance your overall driving skills. To obtain your
            driving theory test certificate, you must pass both segments of the
            test – the theory questions and the hazard perception section.
            Failing either component necessitates retaking the entire test,
            underscoring the importance of thorough preparation..
          </p>
        </div>
        <h1>Syllabus For Theory Test</h1>
        <p className="midddleparagraph">
          <span className="middleparagraph-heading">
            The theory test encompasses a broad spectrum of topics derived from
            three authoritative sources: The Highway Code, Driving – the
            Essential Skills, and Know Your Traffic Signs. Here's an overview of
            the subjects covered:
          </span>
          <ol>
            <li>Road conditions and vehicle handling</li>
            <li>Motorway driving</li>
            <li>Rules of the road</li>
            <li>Road and traffic signs</li>
            <li>Essential documents</li>
            <li>Incidents, accidents, and emergencies</li>
            <li>Vehicle loading</li>
            <li>Alertness</li>
            <li>Attitude</li>
            <li>Safety and your vehicles</li>
            <li>Safety margins</li>
            <li> Hazard awareness</li>
            <li>Vulnerable road users</li>
            <li> Other types of vehicles</li>
          </ol>
          <p className="lowerparagraph">
            These topics collectively provide a comprehensive understanding of
            road safety, regulations, and responsible driving practices,
            ensuring that candidates are well-prepared to navigate various
            driving scenarios with confidence and competence.
          </p>
        </p>
        <h1>Book your driving theory test?</h1>
        <p>
          Looking to schedule your driving theory test? It's easy! Theory tests
          are conducted at DVSA test centres, and booking in advance is
          essential to secure your spot. Fortunately, you can conveniently book
          online. With us, booking your Driving Theory Test is a breeze. We
          offer a seamless booking service, with just a small admin fee of £22,
          in addition to the DVSA theory test booking fee. In the UK, the test
          fee for car drivers is £23. Whether you choose to book through us or
          directly via the DVSA website, we've got you covered.
        </p>
        <h1>
          Curious about the structure of the driving theory test? Here's what
          you can expect
        </h1>
        <p>
          The multiple-choice test consists of 50 questions covering various
          topics, including alertness, attitude, safety, road signs, and more.
          You'll have 57 minutes to complete the first part of your Theory Test,
          aiming to answer at least 43 questions correctly to pass. Before the
          test commences, you'll receive detailed instructions on how the
          process works. Pay close attention to ensure you're prepared and can
          navigate the test effectively. To familiarize yourself with the test
          format, you can opt for a practice session featuring multiple-choice
          questions. This practice session allows you to acclimate to the test
          layout before the actual examination.
        </p>
        {/* <div className="button">
          <button>Book Now</button>
          <button>Email Us</button>
        </div> */}
      </div>
      <Footer/>
    </div>
  );
}

export default TheoryTest;
