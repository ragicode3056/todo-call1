import classes from './styles/Detail.module.css';
import { useMemo, useState } from 'react';

export const Details = ({addDetails,name='',date='',type='',editable=true}) => {

    
    // Make use of objs 
    const [tname,setTname] = useState(name);
    const [tdate,setTdate] = useState(date);
    const [ttype,setTtype] = useState(type);
    
    console.log({tname,tdate,ttype,name,date,type});
    useMemo(()=>{
        setTname(name);
        setTtype(type);
        //add date
            },[name,type,date])

    // console.log("adddetails",addDetails());
    const submitHandler = (e) =>{
        addDetails([tname,tdate,ttype,false]);
        e.preventDefault();
        // clearInp();
    }
    const clearInp = (e) =>{
    //   if(props.loginStatus == false){
    //       console.log(props.loginStatus);
        //  setTname("");
        // setTdate("");
        // setTtype("");
    //   }
        // setTname("");
        // setTdate("");
        // setTtype("");
    //  console.log(props.loginStatus);
    }

    return (
        <div className={classes.DetailsBox}>
            <div className={classes.detailTxt}> Enter Details</div>
            <div className="grand-parent">
                <div className="parent">
                    <form onSubmit = {e => {submitHandler(e)}}>
                        <div className = {classes.detailsInp} >
                            <div>
                                <label htmlFor = "tast">Enter Task</label>
                                <input
                                 type="text" 
                                 name ="task" 
                                 id="task"
                                 className={classes.detailsInpField}
                                 value= {tname}
                                 onChange = {e => editable && setTname(e.target.value)}
                                
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
                            <button type="submit" className={`${classes.btnColor} btn` }  >Add Details</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

