import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Card from './Pages/Card/Card';
import Shop from './Pages/Shop/Shop';
import Navbarshop from './Components/Navbarshop';


function App() {
  return (
    <div className="App">
     <Router>
      <Navbarshop/>
      <Routes>
        <Route path='/' element={<Shop />}  />
        <Route path='/card'  element={<Card />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
