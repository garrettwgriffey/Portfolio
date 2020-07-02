import React from 'react';
import '../App.css';
import profilePicture from '../images/collage.jpg';

function AboutMe () {
    return (
        <>
        <div className="container" id="about">
            <div className="media w3-black">
            <img src={profilePicture} className="img" alt="Profile" />
          <div className="media-body">             <p>Welcome to my portfolio! I am a skilled full-stack web developer, creative, and enthusiast. Below you will find some of my work and my resume. Hire me for your next web development project!</p> 
            </div> 
          </div> 
          </div>
        </>
    )
};

export default AboutMe;