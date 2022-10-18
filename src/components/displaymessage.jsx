import React from "react";
import handwash from "../assets/images/handwash.png"
import mask from "../assets/images/face-mask.png"
import sick from "../assets/images/sick.png"
import hospital from "../assets/images/hospital.png"
import paw from "../assets/images/paw.png"


const Displaymessage=(props)=>{

    const whileclick=()=>{
        props.Hide(false)
    }

return(
    <div onClick={whileclick} className="flip-card-continer">
    <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <img className="flip-card-img" src={handwash} alt="" height={300} width={300} />
        </div>
        <div className="flip-card-back">
            <h1 className="flip-card-text">Wash hands often. Use soap and
water or an alcohol-based hand rub</h1>
        </div>
    </div>
   </div>
   <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <img className="flip-card-img" src={mask} alt="" height={300} width={300} />
        </div>
        <div className="flip-card-back">
            <h1 className="flip-card-text">Cover your mouth and nose if you cough or sneeze
with the inside of your elbow</h1>
        </div>
    </div>
   </div>
   <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <img className="flip-card-img" src={sick} alt="" height={300} width={300} />
        </div>
        <div className="flip-card-back">
            <h1 className="flip-card-text">Don't get close to anyone who
has cold or flu-like symptoms</h1>
        </div>
    </div>
   </div>
   <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <img className="flip-card-img" src={hospital} alt="" height={300} width={300} />
        </div>
        <div className="flip-card-back">
            <h1 className="flip-card-text">Go to the doctor if you have a fever, cough or feel
that it is difficult to breathe</h1>
        </div>
    </div>
   </div>
    </div>
    
    
)
}
export default Displaymessage;