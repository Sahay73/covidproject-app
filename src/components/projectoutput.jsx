import React, { useEffect, useState } from "react";
import Boxview from "./boxview";
import Inputmethods from "./content";
import Header from "./header";
import Listview from "./Listview";
import cards from '../assets/images/cards.png'
import { useSelector } from "react-redux";
import Displaymessage from "./displaymessage";


const Projectoutput=()=>{

let value =useSelector((state)=>state.displayStyle)
console.log(value,"selector")


return(
    <div>
        <Header/>
        <Inputmethods/>
        {/* <Displaymessage/> */}
        {/* <Listview/>
        <Boxview/> */}
        {
            (value==="list")?(
                <>
                    <Listview/>
                </>
            ):(<Boxview/>)
        }
    </div>
)



}
export default Projectoutput;