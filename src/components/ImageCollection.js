import React from "react";
// for desktop-view
import deepEarth from "../images/desktop/image-deep-earth.jpg";
import night from "../images/desktop/image-night-arcade.jpg";
import soccer from "../images/desktop/image-soccer-team.jpg";
import gridImg from "../images/desktop/image-grid.jpg";
import fromAbove from "../images/desktop/image-from-above.jpg";
import pocket from "../images/desktop/image-pocket-borealis.jpg";
import imgCuriosity from "../images/desktop/image-curiosity.jpg";
import imgFisheye from "../images/desktop/image-fisheye.jpg";
// for mobile-veiw
import deepEarthMobile from "../images/mobile/image-deep-earth.jpg";
import nightMobile from "../images/mobile/image-night-arcade.jpg";
import soccerMobile from "../images/mobile/image-soccer-team.jpg";
import gridImgMobile from "../images/mobile/image-grid.jpg";
import fromAboveMobile from "../images/mobile/image-from-above.jpg";
import pocketMobile from "../images/mobile/image-pocket-borealis.jpg";
import imgCuriosityMobile from "../images/mobile/image-curiosity.jpg";
import imgFisheyeMobile from "../images/mobile/image-fisheye.jpg";


const Collection = () => {
    return (
        <>
            <div className="images-gallery">
                <div className="img-selection">
                    <span>OUR CREATIONS</span>
                    <button className="btn">SEE ALL</button>
                </div>

                <div className="images">
                    <div class="img-card">
                        <img src={deepEarth} alt="" />
                        <div class="card-text">
                            <span>DEEP EARTH</span>
                        </div>
                    </div>
                    <div class="img-card">
                        <img src={night} alt="" />
                        <div class="card-text">
                            <span>NIGHT ARCADE</span>
                        </div>
                    </div>
                    <div class="img-card">
                        <img src={soccer} alt="" />
                        <div class="card-text">
                            <span>SOCCER TEAM VR</span>
                        </div>
                    </div>
                    <div class="img-card">
                        <img src={gridImg} alt="" />
                        <div class="card-text">
                            <span>THE GRID</span>
                        </div>
                    </div>
                    <div class="img-card">
                        <img src={fromAbove} alt="" />
                        <div class="card-text">
                            <span>FROM UP ABOVE VR</span>
                        </div>
                    </div>
                    <div class="img-card">
                        <img src={pocket} alt="" />
                        <div class="card-text">
                            <span>POCKET BOREALIS</span>
                        </div>
                    </div>
                    <div class="img-card">
                        <img src={imgCuriosity} alt="" />
                        <div class="card-text">
                            <span>THE CURIOSITY</span>
                        </div>
                    </div>
                    <div class="img-card">
                        <img src={imgFisheye} alt="" />
                        <div class="card-text">
                            <span>MAKE IT FISHEYE</span>
                        </div>
                    </div>

                </div>

            </div>

            <div className="images-gallery-mobile">
                <p>OUR CREATIONS</p>
                <div class="img-card">
                    <img src={deepEarthMobile} alt="" />
                    <div class="card-text">
                        <span>DEEP EARTH</span>
                    </div>
                </div>
                <div class="img-card">
                    <img src={nightMobile} alt="" />
                    <div class="card-text">
                        <span>NIGHT ARCADE</span>
                    </div>
                </div>
                <div class="img-card">
                    <img src={soccerMobile} alt="" />
                    <div class="card-text">
                        <span>SOCCER TEAM VR</span>
                    </div>
                </div>
                <div class="img-card">
                    <img src={gridImgMobile} alt="" />
                    <div class="card-text">
                        <span>THE GRID</span>
                    </div>
                </div>
                <div class="img-card">
                    <img src={fromAboveMobile} alt="" />
                    <div class="card-text">
                        <span>FROM UP ABOVE VR</span>
                    </div>
                </div>
                <div class="img-card">
                    <img src={pocketMobile} alt="" />
                    <div class="card-text">
                        <span>POCKET BOREALIS</span>
                    </div>
                </div>
                <div class="img-card">
                    <img src={imgCuriosityMobile} alt="" />
                    <div class="card-text">
                        <span>THE CURIOSITY</span>
                    </div>
                </div>
                <div class="img-card">
                    <img src={imgFisheyeMobile} alt="" />
                    <div class="card-text">
                        <span>MAKE IT FISHEYE</span>
                    </div>
                </div>
                <button className="btn">SEE ALL</button>
            </div>
        </>


    )
}

export default Collection;