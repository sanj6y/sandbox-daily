import React from "react";
import { Routes } from "react-router";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import Services from "./components/Services";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<HomePage/>}/>
        <Route path = "/services" element = {<Services/>}/>
        <Route path = "/servicesBtn" element = {<Services/>}/>
      </Routes>
    </Router>
  );
}

export default App;
