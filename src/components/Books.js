import React from "react";

// * `title` - Title of the book from the Google Books API

// * `authors` - The books's author(s) as returned from the Google Books API

// * `description` - The book's description as returned from the Google Books API

// * `image` - The Book's thumbnail image as returned from the Google Books API

// * `link` - The Book's information link as returned from the Google Books API

import "./style.css";
const Books = props => {
  
    return (
        <div className="card">

   
        
        <img
                  className="img-fluid"
                  onClick={props.onClick}
                  src={props.image}
                  alt={props.name}
                  clicked={props.clicked} />
        
        
      </div>
  
    );
}

export default Books
