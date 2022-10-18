import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountry,selectCountryName } from "../store/action";

const Inputmethods=()=>{

    
    const[covidData,setCovidData]=useState([]);
    const[filterData,setFilterData]=useState()
    const [inputValue,setInputValue]=useState({country:""});
    const[countryNames,setCountryNames]=useState([])
    const[selectCountry,setSelectCountry]=useState("")
    const dispatch=useDispatch();
    // console.log(selectCountry,"select")
    // console.log(countryNames,"countrynames")


    const getData= async()=>{
        const data=await axios.get("https://disease.sh/v3/covid-19/countries");
        setCovidData(data.data)
    }

    const country= async()=>{
        const data=await axios.get("https://disease.sh/v3/covid-19/countries");
        setCountryNames(data.data)
    }


    const handleChange=(even)=>{
        const {name,value}=even.target;
        setInputValue({...inputValue,[name]:value})
        dispatch({type:searchCountry(),payload:value})
        // let filter=covidData.filter((element,index)=>{
        //     return element.country.toLowerCase()==value.toLowerCase()
        // });
        // setFilterData(filter)
    }
    const handleSelect=(event)=>{
        const {value}=event.target;
        setSelectCountry(value)
        dispatch({type:searchCountry(),payload:value})
    }

    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        country()
    },[covidData])

    return(
        <div className="inputs-methods">

              <input onChange={handleChange}  
              className="input-text" 
              type="text" name="country" 
              value={inputValue.country}
              placeholder="Search Country"/>

            <select value={selectCountry} onChange={handleSelect} className="selector" name="SelectCountry" id="">
                    {
                        countryNames.map((element,index)=>{
                        return<option key={index} value={element.country}>{element.country}</option>
                        })
                    }

            </select>
        </div>
    )
}
export default Inputmethods;