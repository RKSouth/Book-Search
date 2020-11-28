import React from "react";
import API from "../utils/API";

class Saved extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
        savedbooks: [],
   
       };
    }

    componentDidMount = () => {
        API.eatBooks().then(response => {
            console.log("Your Component Did mount");
            console.log(response);
            const saveTemp = [];
            for (let i = 0; i <response.length ; i++){
                console.log(response[i])
                let saveRecord = {
                    id:response[i].id,
                    title:response[i].title,
                    author:response[i].author,
                    description:response[i].description,
                    imageLinks:response[i].imageLinks,
                    infoLink:response[i].infoLink
                };
                   saveTemp.push(saveRecord);
            }
            this.setState({ savedbooks: saveTemp});
            console.log(this.state.savedbooks)
         
    
        })
    }

    deletehandler(event, id) {
        
        console.log("delete "  + id );
        console.log(id);
 const bookIndex = this.state.savedbooks.findIndex(savedbooks => savedbooks.id === id);
 console.log(bookIndex)
  
   console.log(this.state.savedbooks[bookIndex]);
   API.deleteBook(this.state.savedbooks[bookIndex])
//    .then(this.setState({savedbooks: this.state.savedbooks}))
    }
  
    renderSavedTable() {
        return this.state.savedbooks.map((savedbooks, index) => {
            const { id, title, author, imageLinks, description, infoLink} = savedbooks
            return (
                
          <tr key={id} >
          <td><img className="img-responsive" src={imageLinks} alt="folks"/></td>
          <td>{title}</td>
          <td>{author}</td>
          <td>{description}</td>
          <td><a className="Link" href={infoLink}>View</a>
          <button onClick={ event => this.deletehandler( event, id)}>Delete</button></td>
  
       </tr>
            )
        })
    }



render() {
    return(
    

<div>
    <div id="Saved" style={{ height: 650, clear: "both", paddingTop: 120, textAlign: "center", marginTop: 108 }}>
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
                 {this.renderSavedTable()}
           </tbody>
           </table>
        </div>
    </div>    
</div>
    
 )}        
}
  
export default Saved;