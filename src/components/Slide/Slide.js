import React from "react";
import { Slide } from "react-slideshow-image";
import moi from "./photo/moi.jpg";
import lespotes from "./photo/lespotes.jpg";
import plage from "./photo/plage.jpg"
import sagi from "./photo/sagi.jpg"
import './Slide.css'

const properties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  arrows: false,
};

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...properties}>
                <div className="moi">
                    <div>
                        <img src={moi} alt="" />
                    </div>
                </div>
                <div className="lespotes">
                    <div>
                        <img src={lespotes} alt="" />
                    </div>
                </div>
                <div className="plage">
                    <div>
                        <img src={plage} alt="" />
                    </div>
                </div>
                <div className="sagi">
                    <div>
                        <img src={sagi} alt="" />
                    </div>
                </div>
            </Slide>
        </div>
    )
};
export default Slideshow;
