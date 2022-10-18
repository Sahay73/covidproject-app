import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Boxview =()=>{

    const[boxData,setBoxData]=useState([]);
    const [covidData,setCovidData] = useState([])
    let countrySearched=useSelector((state)=>state.searchCountry)
    let countrySelected=useSelector((state)=>state.selectCountry)
    console.log(countrySelected,"selector")


    const passData= async()=>{
        const data=await axios.get("https://disease.sh/v3/covid-19/countries");
        setBoxData(data.data);
        setCovidData(data.data);
    }


    const searchedData=()=>{
        console.log(countrySearched,"searched-filter")
        let searched=boxData.filter((element,index)=>{
            if(element.country.toLowerCase().includes(countrySearched.toLowerCase())){
                return element
            } 
        })
        console.log(searched)
        if(searched.length>0 && countrySearched.length!=0){
            setBoxData(searched)
        }else{
            setBoxData(covidData)
        }
    }

    useEffect(()=>{
        searchedData()
    },[countrySearched])

    useEffect(()=>{
        passData()
    },[]) 

    return(
        <>
        <h1 className="card-header-h1">
           <b className="card-header-b">BOX</b>-VIEW</h1>
        <div className="row">
            {
                boxData.map((element,index)=>{
                    return(
                        <div className="column">
                            <div key={index} className="card" >
                            <h1 className="card-h1">{element.country}</h1>
                            
                            <p> <b className="card-b">Cases:</b>{element.cases}</p>
                            
                            <p><b className="card-b">Recovered:</b>{element.recovered}</p>
                            
                            <p><b className="card-b">Critical:</b>{element.critical}</p>
                            
                            <p><b className="card-b">Tests:</b>{element.tests}</p>
                            
                            <p><b className="card-b">Deaths:</b>{element.deaths}</p>
                        </div>
                        </div>
                    )
                   
                })
            }
        </div>
        </>
    )



}
export default Boxview;

