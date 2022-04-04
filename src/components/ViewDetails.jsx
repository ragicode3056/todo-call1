import React from "react";
import { useState } from "react";
import edit from './edit.png';

export const ViewDetails = ({editHandler,...props}) =>{   
    
    
    // const hideClm ={
    //     display: "none"
    // }
    // // const showClm = {
    // //     display:"block"
    // // }
  
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Start Date</th>
                        <th>Type</th>
                        <th>State</th>
                        <th>{props.loginStatus ? "Edit" : "" }</th>
                      
                    </tr>
                </thead>
                <tbody>
                {props.details.map((v,i) => {       
                    console.log(v[3]);        
                    return <tr key={i}>
                    <td>{v[0]}</td>
                    <td>{v[1]}</td>
                    <td>{v[2]}</td>
                    <td><input type="checkbox" checked={v[3]} onChange={((id)=>{
                        return ()=>{
                                console.log(id);
                                props.changeStatus(id);   
                        }
                    })(i)}>
                    </input></td>
                    <td > {props.loginStatus ?  <img src = {edit} onClick = {((id)=>{
                            return ()=>{
                                editHandler(id);
                            }
                        })(i)}className ="edit-icon"/> : ""}
                       
                       
                      
                        
                    </td>
                    </tr>
                })}
                </tbody>
               
               
                
            </table>

        </div>
    )
}