
import Login from "../Login/Login";

const Card = ()=>{
    return(
    
        <div>
            <h1>Card</h1>
            {false ? <h1> you are logged in</h1> : <Login></Login>}
        </div>
    )
    }
    export default Card;