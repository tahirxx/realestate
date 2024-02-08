import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Login from './components/Login'
import Home from './components/Home';
import './index.css'
import Listing from './components/Listing';
import Register from './components/Register';


function App() {

 return (
   <Router>
     <div>
       <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Listing" element={<Listing />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
       </Routes>

     </div>
   </Router>
   )
}



export default App
