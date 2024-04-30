import logo from './logo.svg';
import './App.css';
import Homepage from './Component/Homepage';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Navbar from './Component/Navbar';
import Menu from './Component/Menubar';
import Offers from './Component/Offers';
import Feedback from './Component/Feedback';

import { Route, Routes } from 'react-router-dom';


import RestaurantDashboard from './Component/RestaurantDashboard';

import AdminDashboard from './Component/AdminDashboard';
import AdminPanel from './Component/AdminPanel';
import Placed from './Component/Placed';
import Menubar from './Component/Menubar';
import { Place } from '@mui/icons-material';
// import { Feedback } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
     
       
        

       

      <Routes>
      <Route path='/' element={<><Homepage/></>}/>
        <Route path='/' element={<><Navbar/></>}/>
      
        <Route path='/AdminDashboard' element={<><Navbar/><AdminDashboard/><AdminPanel/></>}/>
        <Route path='/Login' element={<><Login/></>}/>
        <Route path='/Signup' element={<><Navbar/><Signup/></>}/>
        <Route path='/Homepage' element={<><Homepage/></>}/>
        <Route path='/Placed' element={<><Placed/></>}/>

        <Route path='/Menubar' element={<><Menubar/></>}/>

        <Route path='/Offers' element={<><Offers/></>}/>
        <Route path='/RestaurantDashboard' element={<><Navbar/><RestaurantDashboard/></>}/>
        <Route path='Feedback' element={<><Navbar/><Feedback/></>}/>
        




      </Routes> 
      
     
      {/* <Menubar/> */}

      {/* <Order/> */}
      
      {/* <RestaurantDashboard/> */}

      
          </div>
  );
}

export default App;
