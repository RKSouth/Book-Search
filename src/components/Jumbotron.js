import React from "react";
function Jumbotron() {
  return (
    <div
      style={{ height: 360, clear: "both", paddingTop: 120, textAlign: "center", marginTop: 98 }}
      className="jumbotron" id="Home"
    >
     <h1>Welcome to the Book Nook!</h1>
     <h3>Search for and save Books of Interest</h3>
    </div>
  );
}
export default Jumbotron;