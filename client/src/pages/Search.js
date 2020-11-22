import React, {Component} from "react";

import API from "../utils/API";
console.log(API.getBooks());



class Search extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
        books: [],
 
     };
  }
  componentDidMount = () => {
     console.log(API.getBooks())
     API.getBooks()
        .then((response) => {
           const bookData = response.items;
           const bookTemp = [];
           console.log(bookData)
           for (let i = 0; i < 5; i++) {
              let erecord = {
                 id: i + 1,
                 title: bookData[i].volumeInfo.title,
                 author: bookData[i].volumeInfo.authors,
                 description: bookData[i].volumeInfo.description,
                 imageLinks: bookData[i].volumeInfo.imageLinks.smallThumbnail,
                 infoLink: bookData[i].volumeInfo.infoLink,
                
              };
              bookTemp.push(erecord);
           }
           this.setState({ books: bookTemp });
           console.log(this.state.books);
        });
  };

  renderTableData() {
    return this.state.books.map((books, index) => {
       const { id, title, author, imageLinks, description, infoLink } = books //destructuring
       return (


          <tr key={id}>
             <td><img className="img-responsive" src={imageLinks} alt="folks"/></td>
             <td>{title}</td>
             <td>{author}</td>
             <td>{description}</td>
             <td><a className="Link" href={infoLink}>View</a>
             <button onClick={event => this.savehandler(event,id)}>Save</button></td>
          </tr>


       )
    })
 }

savehandler(event, id) {
   event.preventDefault();
   console.log("saveclick");
   console.log(this.state.books[id-1]);
   API.saveBooks(this.state.books[id-1])
 }

handleSearch = event => {
    event.preventDefault();
    console.log("clicked");
    // const searchValue = event.target.value
    console.log(this.searchValue)
    API.getBooks(this.searchValue)
    .then((response) => {
       const bookData = response.items;
       const bookTemp = [];
       console.log(bookData)
       for (let i = 0; i < 5; i++) {
          let erecord = {
             id: i + 1,
             title: bookData[i].volumeInfo.title,
             author: bookData[i].volumeInfo.authors,
             description: bookData[i].volumeInfo.description,
             imageLinks: bookData[i].volumeInfo.imageLinks.smallThumbnail,
             infoLink: bookData[i].volumeInfo.infoLink,
            
          };
          bookTemp.push(erecord);
       }
       this.setState({ books: bookTemp });
       console.log(bookTemp);
    });
  
    
}


 render() {
  return(
   <div>
   <div
   style={{ height: 860, clear: "both", paddingTop: 120, textAlign: "center", marginTop: 98 }}
   className="jumbotron" id ="Search"
>
       <div>
             <h1>Search at the Book Nook!</h1>
            <div className="card-center">
            <h3>Begin your search!</h3>
            <div>
                <form className="form-inline my-2 my-lg-0" >
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={event => this.searchValue=event.target.value}/>
                        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit"    onClick={event => this.handleSearch(event)}>Search</button>
                        </form >
                        <a className="nav-link" href="#Results">Results</a>
                        </div>
    </div>
    <div id="Results"></div>
    </div>
    </div >
          <div className="card"  >
             <h3>Your Search Results</h3>
          <table id='books' className="table">
          <thead>
                     <tr>
                  <th scope="col">image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Author(s)</th>
                        <th scope="col">Description</th>
                        <th scope="col">Link</th>
                     </tr>
                  </thead>
                <tbody>
              
                   {/* <tr>{this.renderTableHeader()}</tr> */}
                   {this.renderTableData()}
                </tbody>
             </table>
             </div>
       </div>
  )
 }

 }
export default Search;