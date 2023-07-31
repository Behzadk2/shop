import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
const Navbarshop = () => {
  return (
    <div className="navbar navbar-dark bg-dark navbar-expand-lg">
       <div className="container">
        <a className="navbar-brand">Behzad Shop</a>
        <ul className="navbar-nav"> 
          <li className="nav-item"><Link to='/' className='nav-link'>shop</Link></li>
          <li className="nav-item">
            <Link to='/card' className='nav-link'>
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </Link>
          </li>
        </ul>
       </div>
    </div>
  );
};
export default Navbarshop;
