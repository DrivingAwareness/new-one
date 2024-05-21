import React from "react";
import "../assets/css/Main2.css";
import { Link } from "react-router-dom";

export default function Main2() {
  const Array = [
    {
      image: "public/money-bag_7892641.png",
      title: "cost",
      about: "Lowest Price For 1 Day Course",
      Path : "/cost",
    },
    {
      image: "public/pngwing.com (3).png",
      title: "Duration",
      about: " 1 day",
      Path :"/duration"
    },
    {
      image: "public/_Pngtree_red_clock_illustration_vector_on_5292675-removebg-preview.png",
      title: "Timing",
      about: "Course Timings 10:00 - 18:30",
      Path : "/Timing"
    },
    {
      image: "public/download-removebg-preview.png",
      title: "Age",
      about: "Minimum age requirement is 18",
      Path : "/"
    },
    {
      image: "public/download__1_-removebg-preview-removebg-preview.png",
      title: "Assessment",
      about: "Complete assessment materials",
      Path : "/assessment"
    },
    {
      image: "public/340-3409000_bbsa-icon-results-homework-logo-transparent-hd-png-removebg-preview.png",
      title: "Results",
      about: "Provisional results are available on the same day!",
      Path : "/"
    },
  ];

  return (
    <div className="Main2">
      <div className="main2-container">
      <h1>Speed Awareness Application Procedure</h1>
      <div className="Main2-content">
        {Array.map((item, index) => (
          <div className="card" key={index}>
            <Link to= {item.Path}><img src={item.image} alt="Logo" /></Link>
            <h4>{item.title}</h4>
            <p>{item.about}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
