import React from "react";
import API from "../utils/API"
import "../App.css"
import Search from "../pages/Search"



class SearchBox extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
        books: [],
        searchValue:""
       };
    }


render() {
    return (
        <div
            style={{ height: 460, clear: "both", paddingTop: 120, textAlign: "center", marginTop: 98 }}
            className="jumbotron"
        >
            <h1>Search at the Book Nook!</h1>
            <div className="card-center">
            <h3>Begin your search!</h3>
            <div>
                <form className="form-inline my-2 my-lg-0" >
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={event => this.searchValue=event.target.value}/>
                        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit"    onClick={event => this.handleSearch(event)}>Search</button>
                        </form >
                        </div>
    </div>
    </div>
  );
}
}
export default SearchBox;