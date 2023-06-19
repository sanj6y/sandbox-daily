import React from "react";
import { Routes } from "react-router";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import Services from "./components/Services";
import ArticlesPage from "./components/ArticlesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<HomePage/>}/>
        <Route path = "/home" element = {<HomePage/>}/>
        <Route path = "/services" element = {<Services/>}/>
        <Route path = "/articles" element = {<ArticlesPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
