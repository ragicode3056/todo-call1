import classes from './styles/Header.module.css';
import { useState } from 'react';
import { Login } from './Login';
import { Overlay } from './Overlay';
export const Header = () =>{
    const [logInModal,setModalStatus] = useState(false);
    const [personTxt,setPrsonTxt] = useState("Login");

    const logInHandler = () =>{
        setModalStatus(true);
    }
    const submitHandler = () =>{
        setModalStatus(false);
        setPrsonTxt("Welcome Alexa");
    }
    const closeHandler = () =>{
        setModalStatus(false);
    }
    return (
        <div className = {classes.headerTitlle}>
            <div>
                TODO Application
            </div>    
            <div className='btn fnt' onClick = {logInHandler}>
               {personTxt}
            </div>
            {logInModal && <Login onclick = {submitHandler}/>}
            {logInModal && <Overlay onclick = {closeHandler}/>}
            
        </div>
    )
}