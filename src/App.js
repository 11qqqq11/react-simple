import "./App.css";
import React, { useState}  from 'react';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Event from "./pages/Event";
import Contact from "./pages/Contact";
import Vip from "./pages/Vip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuDetail from "./pages/MenuDetail";
import Background from "./components/Background";
import MenuTiec from "./pages/MenuTiec";
import MenuDoan from "./pages/MenuDoan";
import TuyenDung from "./pages/Tuyendung";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">

      <BrowserRouter basename="/react-simple" >
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
        <Background  />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/menu" element={<MenuDetail />} />
          <Route path="/menutiec" element={<MenuTiec />} />
          <Route path="/menudoan" element={<MenuDoan />} />
          <Route path="/event" element={<Event />} />
          <Route path="/vip" element={<Vip />} />
          <Route path="/tuyendung" element={<TuyenDung />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      

    </div>
  );
}

export default App;
