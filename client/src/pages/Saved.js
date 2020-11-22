import React, { useEffect, useState } from "react";
import API from "../utils/API";

// class Search extends React.Component {
// constructor(props) {
//     super(props)
//     this.state = {
//        books: [],

//     };
//  }
//  componentDidMount = () => {
//     console.log(API.getBooks())
//     API.getBooks()
//        .then((response) => {
//           const bookData = response.items;
//           const bookTemp = [];
//           console.log(bookData)
//           for (let i = 0; i < 5; i++) {
//              let erecord = {
//                 id: i + 1,
//                 title: bookData[i].volumeInfo.title,
//                 author: bookData[i].volumeInfo.authors,
//                 description: bookData[i].volumeInfo.description,
//                 imageLinks: bookData[i].volumeInfo.imageLinks.smallThumbnail,
//                 infoLink: bookData[i].volumeInfo.infoLink,
               
//              };
//              bookTemp.push(erecord);
//           }
//           this.setState({ books: bookTemp });
//           console.log(this.state.books);
//        });
//  };

function SavedBooks({ books, deleteBooks }) {
    return( <div>
        Saved Books Go Heeeeere
    </div>) 
   
  };

function Saved() {
    const [books, setBooks] = useState([]);
    const deleteBooks = (id) => {   API.deleteBook(id).then((res) => {
        API.getApiBooks()
            .then(response => {
                setBooks(response.data)
            })
    })
       
    };

  
    useEffect(() => {
        API.getBooks()
            .then(res => setBooks(res.data))
    
    }, []);

    
    useEffect(() => {
    }, [books]);

    return (
        <div id="Saved">
        <SavedBooks
                    books={books}
                    deleteBooks={deleteBooks} />
        </div>
    );
};

export default Saved;