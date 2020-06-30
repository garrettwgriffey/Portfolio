import React from 'react';

export default function Card(props) {
    return (
        
        <div class="card" style="width: 18rem;">
  <img src={props.image} class="card-img-top" alt={props.title}>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href={props.link} class="btn btn-primary">{props.title}</a>
    </div>
    
  

        
    );
};








