import React from "react";
import '../assets/css/Cost.css'
import Upper from "./Upper";
import Footer from "./Footer";

function Cost() {
  return (
    <div>
      <div className="cost">
        <Upper/>

      <h1><strong> Speed Awareness Course Pricing </strong></h1>
      <p>
        The pricing for a speed awareness course can fluctuate based on your
        geographical area, typically falling within the range of £80 to £120.
        This range closely aligns with the expense of a typical speeding fine;
        however, opting for a speed awareness course enables you to sidestep
        accruing penalty points on your license.
      </p>
      </div>
      <Footer/>
    </div>
  );
}

export default Cost;
