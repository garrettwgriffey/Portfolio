import React from 'react';
import NavBar from './components/NavBar';
import Project from './components/Project';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import './App.css';
import Wrapper from './components/Wrapper';

export default function App(){
    return (
        <>
            <NavBar />
            <Wrapper >
            <AboutMe />
            <Project />
            </Wrapper>
            <Footer />
        </>
    )
}


