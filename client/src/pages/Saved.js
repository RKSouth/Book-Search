import React from "react";
import API from "../utils/API";

class Saved extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
        savedbooks: [],
   
       };
    }

    // componentDidMount = () => {
    //     API.saveBooks().then(response => {
    //         console.log("Your Component Did mount");
    //         this.setState({ savedbooks: response.dat});
    //        this.showBooks();
    
    //     })
    // }

    componentDidMount = () => {
        API.eatBooks().then(response => {
            console.log("Your Component Did mount");
            this.setState({ savedbooks: response});
            this.showBooks();
    
        })
    }
  
    showBooks() {
        console.log(this.state.savedbooks)
        return this.state.savedbooks.map((savedbooks, index) => {
            const { id, title, author, imageLinks, description, infoLink } = savedbooks //destructuring
            return (
               <tr key={id}>
                  <td><img className="img-responsive" src={imageLinks} alt="folks"/></td>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>{description}</td>
                  <td><a className="Link" href={infoLink}>View</a>
                  <button onClick={event => this.deletehandler(event,id)}>Delete</button></td>
               </tr>
            )
         })
    }

// SavedBooks() {
//     API.eatBooks()
//     .then((response) => {
//         const savedbooks = response;
//         console.log(response)
//     return savedbooks.map((savedbooks, index) => {
//         const { id, title, author, imageLinks, description, infoLink } = savedbooks //destructuring
//         return (
//            <tr key={id}>
//               <td><img className="img-responsive" src={imageLinks} alt="folks"/></td>
//               <td>{title}</td>
//               <td>{author}</td>
//               <td>{description}</td>
//               <td><a className="Link" href={infoLink}>View</a>
//               <button onClick={event => this.deletehandler(event,id)}>Delete</button></td>
//            </tr>
//         )
//      })

//     })
// }

render() {
    return(
    

<div>
    <div id="Saved">
        <div className="card">
            <h3>Your Saved Results</h3>
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
                 {this.showBooks()}
           </tbody>
           </table>
        </div>
    </div>    
</div>
    
 )}        
}
  
export default Saved;