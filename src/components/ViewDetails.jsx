import React from "react";

export const ViewDetails = (props) =>{ 

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Start Date</th>
                        <th>Fitness</th>
                        <th>State</th>
                      
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
                    </tr>
                })}
                </tbody>
               
               
                
            </table>

        </div>
    )
}