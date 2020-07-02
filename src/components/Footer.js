import React from 'react';
import '../App.css';

export default function Footer() {
    return (
        <footer >
           <div className="languages">
<ul className="list-unstyled displayUnder">
  <i className="fab fa-html5 fa-3x lng"></i>
  <span>HTML</span>
  <i className="fab fa-js-square fa-3x lng"></i>
  <span className="displayUnder">JavaScript</span>{" "}
  <i className="fab fa-css3-alt fa-3x lng"></i>{" "}
  <span className="displayUnder">CSS</span>{" "}
  <i className="fab fa-react fa-3x lng"></i>{" "}
  <span className="displayUnder">React</span>{" "}
  <i className="fab fa-npm fa-3x lng"></i>{" "}
  <span className="displayUnder">NPM</span>{" "}
  <i className="fab fa-node fa-3x lng"></i>{" "}
  <span className="displayUnder">Node</span>{" "}
</ul>
</div>
           <h5>Made by Garrett Griffey</h5>
        </footer>
    );
}

