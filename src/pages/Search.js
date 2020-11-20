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
           const bookData = response.items[0].volumeInfo.title;
           const bookTemp = [];
           console.log(bookData)
           for (let i = 0; i < 5; i++) {
              let erecord = {
                 id: i + 1,
                 title: bookData[i].volumeInfo.title,
                 author: bookData[i].volumeInfo.author,
                 email: bookData[i].email,
                 image: bookData[i].picture.medium,
                 phone: bookData[i].cell,
                 age: bookData[i].dob.age,
              };
              bookTemp.push(erecord);
           }
           this.setState({ books: bookTemp });
           console.log(this.state.books);
        });
  };

  renderTableData() {
    return this.state.books.map((books, index) => {
       const { image, id, firstname, lastname, age, email } = books //destructuring
       return (


          <tr key={id}>
             <td><img className="img-responsive" src={image} alt="folks"/></td>
             <td>{firstname}</td>
             <td>{lastname}</td>
             <td>{age}</td>
             <td>{email}</td>
          </tr>


       )
    })
 }

 render() {
  return(
       <div>
          <form className="form-inline">
             <div className="card">
              <input className="form-control" type="search" placeholder="search"onChange={event => this.handleSearch(event)}/>
                 {/* <button onClick ={event => this.handleSearch(event)}>Search</button> */}
                 </div>
          </form>
          {/* <h1 id='title'>React Dynamic Table</h1> */}
          {/* < Data /> */}
          <table id='employees' className="table">
            
                <thead>
                   <tr>
                <th scope="col">image</th>
                      <th scope="col">firstname</th>
                      <th scope="col">lastname</th>
                      <th scope="col">age</th>
                      <th scope="col">email</th>
                   </tr>
                </thead>

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