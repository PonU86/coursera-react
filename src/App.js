
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Layout from './Components/LandingPage/Landing_Page';
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path="/" element={<Layout/>}/>
              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;
