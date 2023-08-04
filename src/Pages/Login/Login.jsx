import { useContext } from "react";
import { userContext } from "../../App";

const Login = () => {
        const { setUser }= useContext(userContext)

        
        
    return(
     <>
    
     <br></br>
    
     <button onClick={ () =>
      { 
        
        setUser(true) ;
     
        
      
     } 
    } className="btn btn-bg btn-success"> Login First</button>
     </>
    )
 }
 export default Login;