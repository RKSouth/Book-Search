import React from "react";
function SearchBox() {
  return (
    <div
      style={{ height: 460, clear: "both", paddingTop: 120, textAlign: "center", marginTop: 98 }}
      className="jumbotron"
    >
     <h1>Search at the Book Nook!</h1>
     <h3>Begin your search!</h3>
     <div className="form-center" style={{ clear: "both", marginRight: 700, marginLeft: 700, marginTop: 100, textAlign: "center" }} >
             <div className="card" >
              <input className="form-control" type="search" placeholder="search"onChange={event => this.handleSearch(event)}/>
              <button>Search</button>
                 {/* <button onClick ={event => this.handleSearch(event)}>Search</button> */}
                 </div>
          </div>
    </div>
  );
}
export default SearchBox;