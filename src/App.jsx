import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar'
import Login from './components/Login'
import Home from './components/Home';
import './index.css'
import Listing from './components/Listing';
import Register from './components/Register';


function App() {
const [currentForm, setCurrentForm] = useState('Login');

const toggleForm = () => {
  setCurrentForm(currentForm === 'Login' ? 'Register' : 'Login');
}

 return (
   <Router>
     <div>
       <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Listing" element={<Listing/>} />
         <Route path="/login" element={currentForm === 'Login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />} />
          
       </Routes>

     </div>
   </Router>
 )
}



export default App
