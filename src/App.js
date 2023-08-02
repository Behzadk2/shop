import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Card from './Pages/Card/Card';
import Shop from './Pages/Shop/Shop';
import Login from './Pages/Login/Login';
import Navbarshop from './Components/Navbarshop';
import { createContext, useState } from 'react';

 export const userContext = createContext(null)

function App() {
 
  const [user,setUser]= useState(false);
  return (

    <userContext.Provider value={{user,setUser}}>
      <div className="App">
     <Router>
      <Navbarshop/>
      <Routes>
        <Route path='/' element={<Shop />}  />
        <Route path='/card'  element={<Card />} />
        <Route path='/Login'  element={<Login />} />
      </Routes>
     </Router>
    </div>
    </userContext.Provider>
    
  );
}

export default App;
