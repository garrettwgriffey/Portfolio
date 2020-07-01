import React from 'react';

const AboutMe = () => {
    return (
        <div className="About-Me">
            <h1>
               About Me
            </h1>
            <p>lorem loremloremloremloremloremloremloremloremloremloremloremlorem</p>
            <img src={require(`../images/collage.jpg`)} alt="Garrett Griffey"/>
        </div>
    )
};

export default AboutMe;