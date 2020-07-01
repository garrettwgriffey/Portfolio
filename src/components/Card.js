import React from 'react';

export default function Card(props) {
    return (
        
        <div className="card" style={{width: "18rem"}}>
            <img src={require(`../images/${props.image}`)} className="card-img-top" alt={props.title} />
            {console.log(`../images/${props.image}`)}
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href={props.link} className="btn btn-primary">{props.title}</a>
        </div>
        </div>
    
  

        
    );
};








