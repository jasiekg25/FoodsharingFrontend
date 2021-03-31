import logo from './logo.svg';
import './App.css';
import AppNavbar from "./components/home/AppNavbar";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/home/About";
import Rules from "./components/home/Rules";
import Footer from "./components/home/Footer";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <AppNavbar/>
            <Home/>
            <About/>
            <Rules/>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
