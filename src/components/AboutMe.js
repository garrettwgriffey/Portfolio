import React from 'react';
import '../App.css';

const AboutMe = () => {
    return (
        <div className='About-Me'>
            <h1>
               About Me
            </h1>
            <p>Welcome to my portfolio! I am a skilled full-stack web developer, creative, and enthusiast. Below you will find some of my work and my resume. Hire me for your next web development project!</p>
            <img src={require(`../images/collage.jpg`)} className='collage' style={{width: "18rem"}} alt='Garrett Griffey'/>
        </div>
    )
};

export default AboutMe;