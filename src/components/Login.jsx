export const Login = (props) =>{
    return (
        <div className="modal">
            <div className="modal-style">
                <div className="modal-entries">
                    <label htmlFor = "name" >Enter Name</label>
                    <input type="text" ></input>
                </div>
                <div className="modal-entries">
                     <label htmlFor = "password" >Enter Password</label>
                    <input type="password" ></input>
                </div>
                <div className="btn-modal">
                    <buton type="submit" className="btn" onClick = {props.onclick}>Submit</buton>
                </div>
            </div>
        </div>
    )
}