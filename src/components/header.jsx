import React, { useEffect, useState } from "react";
import virus from '../assets/images/virus.png'
import listpng from "../assets/images/checklist.png"
import card from '../assets/images/redcard.png'
import Displaymessage from "./displaymessage";
import { useDispatch } from "react-redux";
import { displayOutput } from "../store/action";

const Header=(props)=>{


    const[displayStyle,setDisplayStyle]=useState("box")
    const[Show,setShow]=useState(false)
    const dispatch=useDispatch();
    // console.log(displayStyle,"state update")



    const handleClick=(value)=>{
        setDisplayStyle(value)
        // console.log(value,"value")
        // dispatch({type:displayOutput(),payload:displayStyle})
        
    }

    const passData=()=>{
        dispatch({type:displayOutput(),payload:displayStyle})
    }


    const Hidemyinfo=()=>{
        setShow()
    }

    useEffect(()=>{
        setShow(true)
    },[])

    useEffect(()=>{
       passData()
    },[displayStyle])

    return(
        <div className="header-style">
            <div className="header-content">
            <img className="header-image" src={virus} alt="" />
            <h1 className="header-title">COVID <b>TRACKER</b> </h1>
            </div>

            <div className="header-img-continer">
            <img src={listpng} 
            className="header-image-2" 
            onClick={()=>handleClick("list")} alt=""/>
            <img src={card}
            className="header-image-2" 
            onClick={()=>handleClick("box")} alt=""/>
            </div>
          {/* {
            (Show)&&<Displaymessage Hide={Hidemyinfo}/>
          }  
           */}

        </div>
        
    )
}
export default Header;