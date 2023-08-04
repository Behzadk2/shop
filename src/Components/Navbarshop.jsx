import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDisplay, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import React,{ useContext } from 'react';
import { userContext } from '../App';
const Navbarshop = () => {

  const {user,setUser} = useContext(userContext)
    
  return (
    <div className="navbar navbar-dark bg-dark navbar-expand-lg">
       <div className="container">
       { user ? <a className="navbar-brand">Behzad Kazemi</a>: <a className="navbar-brand">User is : Guest</a>}
        
        <ul className="navbar-nav"> 
          <li className="nav-item"><Link to='/' className='nav-link'>shop</Link></li>
          <li className="nav-item">
            <Link to='/card' className='nav-link'>
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </Link>
          </li>
          <li className="nav-item"><Link to='/Login' className='nav-link'>Login</Link></li>
          <li onClick={

            () => setUser(false)
            
            } className="nav-item"><Link  className='nav-link'>Logout</Link></li>
        </ul>
       </div>
    </div>
  );
};
export default Navbarshop;
