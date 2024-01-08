
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
{/*import Layout from './Components/Landing_Page/Landing_Page';*/}
{/*import Signup from './Components/Sign_Up/Sign_Up';*/}
import Login from './Components/Login/Login';
import InstantConsultation from "./Components/Instant_Consultation/InstantConsultation";
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
              {/*<Route path="/" element={<Layout/>}/>*/}
              {/*<Route path="/" element={<Signup/>}/>*/}
              <Route path="/" element={<Login/>}/>
              <Route path="/" element={<InstantConsultation/>}/>
              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;
