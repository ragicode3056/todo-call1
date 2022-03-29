import classes from './styles/Detail.module.css';
import { useState } from 'react';

export const Details = ({addDetails}) => {

    const [tname,setTname] = useState('');
    const [tdate,setTdate] = useState('');
    const [ttype,setTtype] = useState('');
    
    // console.log("adddetails",addDetails());
    const submitHandler = (e) =>{
        addDetails([tname,tdate,ttype,false]);
        e.preventDefault();
        // clearInp();
    }
    const clearInp = (e) =>{
        setTname("");
        setTdate("");
        setTtype("");
    }

    return (
        <div className={classes.DetailsBox}>
            <div className={classes.detailTxt}> Enter Details</div>
            <div className="grand-parent">
                <div className="parent">
                    <form onSubmit = {e => {submitHandler(e)}}>
                        <div className = {classes.detailsInp}>
                            <div>
                                <label htmlFor = "tast">Enter Task</label>
                                <input
                                 type="text" 
                                 name ="task" 
                                 id="task"
                                 className={classes.detailsInpField}
                                 value= {tname}
                                 onChange = {e =>setTname(e.target.value)}
                                 onFocus = {clearInp}
                                ></input>
                            </div>
                            <div>
                                <label htmlFor = "startDate">Select Date</label>
                                <input 
                                type="date" 
                                name="startDate" 
                                id= "startDate" 
                                className={classes.detailsInpField}
                                value = {tdate}
                                onChange = {e =>setTdate(e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label htmlFor = "group">Select Group</label>
                                <select 
                                className={classes.detailsInpField}
                                onChange = {e =>setTtype(e.target.value)}
                                value = {ttype}
                                >
                                    <option value="Fitness">Fitness</option>
                                    <option value="Personal">Personal</option>
                                    <option value="Office">Office</option>
                                </select>
                            </div>
                        </div>               
                        <div>
                            <button type="submit" className="btn">Add Details</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
    
