import React from "react";
import "../assets/css/assessment.css";
import Upper from "./Upper";
import Footer from "./Footer";

function Assessment() {
  return (
    <div>
      <div className="assessment">
        <Upper />

        <p>
          On the speed-awareness course, the trainer will use videos and other
          visual aids to encourage you to respect speed limits in future and
          improve your driving skills. Don’t worry, it’s not all gruesome crash
          footage. The emphasis is on getting drivers to think about why they
          should avoid speeding and teaching them practical ways they can drive
          more safely. There’s a lot of focus on group discussion and
          participation.
        </p>
        <h1><strong> Attendees will learn: </strong></h1>

        <ol>
          <li>
            How to identify speed limits, and work out the speed limit of
            unfamiliar roads
          </li>
          <li>
            Why it’s dangerous to speed and the potential consequences to
            themselves and others if they were to crash as a result of speeding
          </li>
          <li>
            The importance of giving other motorists space and how speeding can
            affect stopping distance
          </li>
          <li>
            How to improve awareness of your surroundings, the importance of
            concentration to recognise potential hazards
          </li>
          <li>
            How to recognise and resist pressure to speed from themselves and
            others.
          </li>
        </ol>

      </div>
      <Footer />
    </div>
  );
}

export default Assessment;
