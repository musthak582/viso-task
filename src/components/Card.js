import React from "react";
import cardImg from '../images/desktop/image-interactive.jpg';
const Card = () =>{
    return(
        <div className="card">
            <img src={cardImg} alt="" />
            <div className="text-card">
                <span>THE LEADER IN <br />INTERACTIVE VR</span>
                <p>Founded in 2011, loopstudio has been producting world-class virtual relity projects for some of the best compaines around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to theeir brand.</p>
            </div>
        </div>
    )
}

export default Card;