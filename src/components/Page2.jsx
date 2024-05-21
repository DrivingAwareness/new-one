import React from 'react';
import '../assets/css/Page2.css'

export default function Page2() {
   const array = [
    {image:"https://www.iconsdb.com/icons/preview/red/money-bag-xxl.png",title:"cost" ,about:"Lowest Price For 1 Day Course"},
    {image:"https://marveltraining.co.uk/p/assets/img/Duration.png",title:"Duration" ,about:" 1 day"},
    {image:"https://marveltraining.co.uk/p/assets/img/Timing.png",title:"Timing" ,about:"Course Timings 10:00 - 18:30"},
    {image:"https://marveltraining.co.uk/p/assets/img/Age.png",title:"Age" ,about:"Minimum age requirement is 18"},
    {image:"https://marveltraining.co.uk/p/assets/img/Assessment.png",title:"Assessment" ,about:"Complete assessment materials"},
    {image:"https://marveltraining.co.uk/p/assets/img/Result.png",title:"Results" ,about:"Provisional results are available on the same day!"},
   ]
    return (

        <div className="Page2">
            <div className="heading">
                <h1>Apply for a Speed Awareness Today!</h1>
            </div>
            <div className="card">
            {array.map((value, index) => (
                <div className='smallcontainer'>
                <img key={index} src={value.image} alt=""/>
                <h4>{value.title}</h4>
                <p>{value.about}</p>
                    </div>
                ))}
                </div>
            </div>
        );
    }
