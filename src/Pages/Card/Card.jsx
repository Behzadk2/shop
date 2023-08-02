
import { useContext } from "react";
import Login from "../Login/Login";
import { userContext } from "../../App";

const Card = ()=>{

    const {user}= useContext(userContext)
    return(
    
        <div>
            <h1>Card</h1>
            { user ? <h1> you are logged in Behzad Kazemi</h1> : <Login></Login>}
        </div>
    )
    }
    export default Card;