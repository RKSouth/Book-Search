import React from "react";
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
                 description: bookData[i].description,
                //  imageLinks: bookData[i].imageLinks.smallThumbnail,
                 infoLink: bookData[i].infoLink,
                
              };
              bookTemp.push(erecord);
           }
           this.setState({ books: bookTemp });
           console.log(this.state.books);
        });
  };

  renderTableData() {
    return this.state.books.map((books, index) => {
       const { id, title, author, description, infoLink } = books //destructuring
       return (


          <tr key={id}>
             {/* <td><img className="img-responsive" src={imageLinks} alt="folks"/></td> */}
             <td>{title}</td>
             <td>{author}</td>
             <td>{description}</td>
             <td>{infoLink}</td>
          </tr>


       )
    })
 }

 render() {
  return(
       <div>
          <form className="form-inline">
             <div className="card" >
              <input className="form-control" type="search" placeholder="search"onChange={event => this.handleSearch(event)}/>
              <button>Search</button>
                 {/* <button onClick ={event => this.handleSearch(event)}>Search</button> */}
                 </div>
          </form>

          <table id='books' className="table">
                <tbody>
              
                   {/* <tr>{this.renderTableHeader()}</tr> */}
                   {this.renderTableData()}
                </tbody>
             </table>
       </div>
  )
 }
// function Search() {
//   return (
//     <div
//       style={{ height: 200, clear: "both", paddingTop: 120, textAlign: "center" }}
      
//     >
//         <input className="searching"></input>
//         <button>Search</button>
//     </div>
//   );
 }
export default Search;