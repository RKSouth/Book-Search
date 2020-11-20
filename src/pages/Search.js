import React, {Component} from "react";
import SearchBox from "../components/SearchBox";
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
             <td>{infoLink}</td>
          </tr>


       )
    })
 }


 handleSearch = event => {
      
  //gets the actual value out of the search box
  const searchValue = event.target.value
  const filteredEmp = this.state.employees.filter(folks => {
      //need to merge the data together to see if user input is anywhere inside
      let values = Object.values(folks).join("").toLowerCase()
      console.log(values);
      return values.indexOf(searchValue.toLowerCase())!== -1
  } )
  this.setState({
      filteredEmployees: filteredEmp
  })

}
 render() {
  return(
       <div>
      < SearchBox />
          <div className="card" >
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