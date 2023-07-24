import './App.css';
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './components/user/AddUsers';
import Eidituser from './components/user/EditUsers';
import Users from './components/user/Users';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/users/add' element={<AddUser />} />
          <Route path='/users/edit/:id' element={<Eidituser />} />
          <Route path='/users/:id' element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
