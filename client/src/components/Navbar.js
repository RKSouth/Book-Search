import React from "react";



function Navbar() {
  
  return (


    <div className="row-3">
    <nav className="navbar fixed-top navbar-light bg-light">
  

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><h1>The Book Nook</h1></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item active">
        <a className="nav-link" href="#Home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
      {/* <Link to="/About">About Me</Link> */}
        <a className="nav-link" href="#Search">Search <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Saved">Saved</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#About">About</a>
      </li>
     
    </ul>
  </div>
</nav>
</nav>
</div>

  );
}
export default Navbar;