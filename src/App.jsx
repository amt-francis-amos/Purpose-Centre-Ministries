import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import Events from './pages/Events';
import Donation from './pages/Donation';
import Ministries from './pages/Ministries';
import VirtualChurch from './pages/VirtualChurch';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import About from './pages/About';
import MembershipForm from './pages/MembershipForm';
import ChildrenMinistry from './pages/ChildrenMinistry';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> 
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/event" element={<Events />} />
          <Route path="/membership" element={<MembershipForm />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/virtual" element={<VirtualChurch />} />
          <Route path="/children" element={<ChildrenMinistry />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
