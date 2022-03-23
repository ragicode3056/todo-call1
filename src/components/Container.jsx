import { Header } from "./Header";
import { Details } from "./Details";
import { ViewDetails } from "./ViewDetails";
import { Submit } from "./Submit";
import { useRef, useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom';

export const Container  =(props) =>{
    const [details,setDetails] = useState([]);
    
    const addDetails = (log) =>{
        let logs = [...details,log];
        console.log("logs",logs,details,log);
        setDetails(logs);
    }

    const onsubmitClick = ()=>{
        console.log('clicked');
        let copy = details.filter(e=>!e[3]);
        console.log("filter array",copy);
        setDetails(copy);
    }

    const changeStatus = (id)=>{
        let copy = [...details];
        copy[id][3]=!copy[id][3];   
        console.log(copy,"copy");
       setDetails(copy);
    }
    return (
        <div className = "container">
            <Header/>
            <Details addDetails={addDetails}/> 
            <ViewDetails details = {details} changeStatus={changeStatus}/>
            <Submit onSubmitClick={onsubmitClick}/>
        </div>
    )
}

 // i/p clear data 
 // validation -- same entries 
 // add new column - edit details -- name - disabled -- "Edit dEtails"
 // login feature 