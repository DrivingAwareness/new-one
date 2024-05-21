import React from "react";
import "./App.css";
import TheoryTest from "./components/TheoryTest";
import About from "./components/About";
import { BrowserRouter, Routes , Route} from "react-router-dom";
import Home from "./components/Home";
import SpeedAwareness from "./components/SpeedAwareness";
import Privacy from "./components/Privacy";
import Cost from "./components/Cost";
import Duration from "./components/Duration";
import Timing from "./components/Timing";
import Assessment from "./components/Assessment";


function App() {;
  return (
    <><BrowserRouter> 
    <div className="bigmaincontainer">
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/Speed_Awareness" element={<SpeedAwareness/>}/>
          <Route path="/TheoryTest" element={<TheoryTest/>}/>
          <Route path="/Privacy&Policy" element={<Privacy/>}/>
          <Route path="/cost" element={<Cost/>}/>
          <Route path="/duration" element={<Duration/>}/>
          <Route path="/timing" element={<Timing/>}/>
          {/* <Route path="/age" element={<Cost/>}/> */}
          <Route path="/assessment" element={<Assessment/>}/>
          {/* <Route path="/results" element={<Cost/>}/> */}
        </Routes>

    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
