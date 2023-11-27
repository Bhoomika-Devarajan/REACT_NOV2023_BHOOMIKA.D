// import "./App.css";


// import Home from "./components/Home";
// function App()
// {
//   return(
//     <div className="App">
//       <Home />
     
     
//     </div>
//   );
// }
// export default App;


import './App.css';
import Pro from './components/Pro';
import Exotic from './components/Exotic';
import Other from './components/Other';
import Veg from './components/Veg';
import About from './components/About';
import Fruit from './components/Fruit';
import Contact from './components/Contact';
import React from 'react';
import Loginnew from './components/Loginnew';
import Home from './components/Home';
import Reg from './components/Reg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Set the default route to the Login page */}
          <Route path="/" element={<Reg />} />
          <Route path="/registration" element={<Reg />} />
          <Route path="/login" element={<Loginnew />} />
          <Route path="/h" element={<Home />} />
          <Route path="/pro" element={<Pro />} />
          <Route path="/con" element={<Contact />} />
          <Route path="/ab" element={<About />} />
          <Route path="/f" element={<Fruit />} />
          <Route path="/v" element={<Veg/>} />
          <Route path="/e" element={<Exotic/>} />
          <Route path="/o" element={<Other/>} />
          

        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;