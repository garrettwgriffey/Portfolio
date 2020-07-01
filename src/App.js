import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Project from './components/Project';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Card from './components/Card';


function App(){
    return (
        <div>
            <NavBar />
            <AboutMe />
            <Project />
            <Footer />
        </div>
    )
}

export default App;
