import React from "react";
import '../assets/css/duration.css'
import Upper from "./Upper";
import Footer from "./Footer";

function Duration() {
  return (
    <div>
      <div className="duration"> 
      <Upper/>

      <h1><strong>Speed Awareness Course Duration</strong></h1>
      <p>
        The Speed Awareness course typically spans 4 to 5 hours, encompassing a
        break midway. Participants have the flexibility to opt for daytime,
        evening, or nighttime sessions based on their convenience. Furthermore,
        each speed awareness course typically accommodates around 9
        participants.
      </p>
      </div>
      <Footer/>
    </div>
  );
}

export default Duration;
