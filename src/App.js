import React from 'react';
import NavBar from './components/NavBar';
import Project from './components/Project';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import './App.css';

export default function App(){
    return (
        <div>
            <NavBar />
            <AboutMe />
            <Project />
            <img src='./images/logo.png' />
            <Footer />
        </div>
    )
}


