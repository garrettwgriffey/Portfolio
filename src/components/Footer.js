import React from 'react';
import '../App.css';

export default function Footer() {
    return (
        <footer >
           <div className="languages">
<ul className="list-unstyled displayUnder">
  <i className="fab fa-html5 fa-2x"></i>
  <i className="fab fa-js-square fa-2x"></i>{" "}
  <i className="fab fa-css3-alt fa-2x"></i>{" "}{" "}
  <i className="fab fa-react fa-2x"></i>{" "}{" "}
  <i className="fab fa-npm fa-2x"></i>{" "}{" "}
  <i className="fab fa-node fa-2x"></i>{" "}{" "}
</ul>
</div>
           <h5>Made by Garrett Griffey</h5>
        </footer>
    );
}

