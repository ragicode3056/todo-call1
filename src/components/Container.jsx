import { Header } from "./Header";
import { Details } from "./Details";
import { ViewDetails } from "./ViewDetails";
import { Submit } from "./Submit";
import { useRef, useState } from "react";
import React from 'react';
import { SubHeader } from "./SubHeader";
import ReactDOM from 'react-dom';

export const Container  =(props) =>{
    const [details,setDetails] = useState([]); // initial details
    const [loadedDetails,setLoadedDetails] = useState([]); // loading elements on clicking edit
    const [logIn,setLogin] = useState(false);


    const updateDetails = (log)=>{
        let copy = [...details];
        copy = copy.map((e,index)=>{
            if(e[0]==log[0]) return log;
            else return e;
        });
        setDetails(copy);
        setLoadedDetails([]);
    }

    const addDetails = (log) =>{
        if(loadedDetails.length){
            updateDetails(log);
            return;
        }
        // duplicate entries check 
        // if(details.some((e)=>{
        //     return e[0]==log[0];
        // })) {
        //     console.log(`duplicate record ${log}`);
        //     alert("duplicate entry found");
        //     return;
        // }
        let logs = [...details,log];
        console.log("logs",logs,details,log);
        setDetails(logs);        
    }

    const onsubmitClick = ()=>{
        // console.log('clicked');
        let copy = details.filter(e=>!e[3]);
        // console.log("filter array",copy);
        setDetails(copy);
    }

    const changeStatus = (id)=>{
        let copy = [...details];
        copy[id][3]=!copy[id][3];   
        // console.log(copy,"copy");
       setDetails(copy);
    }

    const editHandler = (index)=>{
         console.log(index,details);
         setLoadedDetails(details[index]);
         console.log(details[index],"details-view");
         setLogin(true);
    }

    console.log(loadedDetails);

    return (
        <div className = "container">
            <Header loginStatus = {setLogin}/>
            <Details addDetails={addDetails} name={loadedDetails[0]} date={loadedDetails[1]} type={loadedDetails[2]} editable={loadedDetails.length==0} loginStatus = {setLogin}/> 
            <SubHeader/>
            <ViewDetails details = {details} changeStatus={changeStatus} editHandler={editHandler} loginStatus = {logIn} />
            <Submit onSubmitClick={onsubmitClick}/>
        </div>
    )
}

 // i/p clear data 
 // validation -- same entries 
 // add new column - edit details -- name - disabled -- "Edit dEtails"
 // login on submit - enable eit -- no need authentication