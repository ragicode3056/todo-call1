import classes from './styles/Detail.module.css';

export const Submit = ({onSubmitClick}) =>{
    const submitHandler = () =>{
        onSubmitClick();
    }
    return (
        <div className={classes.mrgn}>
            <button type = "submit" className="btn" onClick = {submitHandler}>Submit</button>
        </div>
    )
}