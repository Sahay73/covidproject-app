import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Listview=()=>{

    const [covidList,setCovidList]=useState([]);
    const[covidData,setCovidData]=useState([])
    // const[customiz,setCustomiz]=useState("")
    let countrySearched=useSelector((state)=>state.searchCountry)
    // let selector=useSelector((state)=>state.selectCountry)
    console.log(countrySearched,"listSearched");
    

    const passData= async()=>{
            const data=await axios.get("https://disease.sh/v3/covid-19/countries");
            setCovidList(data.data);
            setCovidData(data.data);
        }

    const customizedData=()=>{
        // console.log(filterValue,"filter")
       let filterValue=covidList.filter((element,index)=>{
        if(element.country.toLowerCase().includes(countrySearched.toLowerCase())){
            return element
        }
       })
       if(filterValue.length>0 && countrySearched.length!=0){
        setCovidList(filterValue)
       }else{
        setCovidList(covidData);
       }
    }

        useEffect(()=>{
            customizedData()
        },[countrySearched])

        useEffect(()=>{
            passData()
        },[])

    return(
        <>
        <h1 className="card-header-h1">
           <b className="card-header-b">LIST</b>-VIEW</h1>
       <div className="table-content">
        <table>
            <thead>
        <tr>
            <th>
                Country
            </th>
            <th>
                Cases
            </th>
            <th>
                Recovered
            </th>
            <th>
                Critical
            </th>
            <th>
                Tests
            </th>
            <th>
                Deaths
            </th>
        </tr>
        </thead>
        {
            covidList.map((element,index)=>{
                return(
                    <tbody>
                    <tr key={index}>
                        <td>{element.country}</td>
                        <td>{element.cases}</td>
                        <td>{element.recovered}</td>
                        <td>{element.critical}</td>
                        <td>{element.tests}</td>
                        <td>{element.deaths}</td>
                    </tr>
                    </tbody>
                    
                )
                    
            })
        }
       </table>
       </div>
       </>
    )

}
export default Listview;