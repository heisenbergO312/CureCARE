import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import Doctors from "../../pages/Doctors";
import Contact from "../../pages/Contact";
import Services from "../../pages/Services";
import DoctorDetails from "../../pages/DoctorDetails";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import About from "../../pages/About";
import Profile from "../../pages/Profile";
import Booking from "../../pages/Booking";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Dashboard from "../../pages/Dashboard";
import Blogs from "../../pages/Blogs";

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};

const App = () => {
  return (
    <div className="app">
      <AlertProvider template={AlertTemplate} {...options}>
        <BrowserRouter>
          <Navbar />
          <div className="app-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/doctors/:id" element={<DoctorDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/blog" element={<Blogs />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AlertProvider>
    </div>
  );
};

export default App;
