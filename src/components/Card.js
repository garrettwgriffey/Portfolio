import React from 'react';

export default function Card(props) {
    return (
        <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        <a className="Card" href={props.link}>
            <h2>{props.title}</h2>
            <img src={props.image}/>
            
        </a>
    )
}








