import React from "react";

import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { Routes,Route,Navigate} from "react-router-dom";
const App = () => {
    return(
        <>
 
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<Navigate to = "/"/>} />
        </Routes>       

        </>
    )
};
export default App;