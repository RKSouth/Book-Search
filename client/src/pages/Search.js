import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar"
import Results from "../components/Results"
import API from '../utils/booksAPI'
import Jumbotron from "../components/Jumbotron";

// Search page that allows the user to search for books
function Search() {
    const [searchState, setSearchState] = useState("");
    const [books, setBooks] = useState([]);
    const [modalClass, setModalClass] = useState("modal hideModal");
    const [text, setText] = useState("Saved!");
    const [ids, setIds] = useState([]);
    // for the modal display to hide or show
    useEffect(() => {
    }, [modalClass]);

    function modalClose() {
        setModalClass("modal hideModal");
    };
    // function for the user's input that tracks every letter typed in by the user
    const handleSearchChange = (e) => {
        const { value } = e.target
        setSearchState(value)
    };
    // function that is grabbing the information from the google books API
    const searchBooks = async () => {
        let temp = [];
        temp.length = 0;
        let newBooks = await API.getBooks(searchState)
            .then((res) => {
                return res.data.items;
            });
        setBooks(newBooks);
        // grab saved books whenever a new search occurs
        API.getApiBooks()
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    temp.push(res.data[i].id);
                }
            })
        setIds(temp);
    };

    // function that allows books to be saved qne displaying the modal
    const saveBook = (book) => {
        var image;
        if (book.volumeInfo.imageLinks === undefined) {
            image = "./googlebookslogo.png"
        } else {
            image = book.volumeInfo.imageLinks.thumbnail
        };
        if (!ids.includes(book.id)) {
            setIds([...ids, book.id]);
            setModalClass("modal showModal");
            setText(book.volumeInfo.title + " was saved!");
        } else {
            setModalClass("modal showModal");
            setText(book.volumeInfo.title + " is already saved!");
        };
        // setting an object with the data we grabbed from the axios call and passing in the data to be saved into the database
        const data = {
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: image,
            link: book.volumeInfo.infoLink,
            id: book.id
        };
        API.addBook(data).then(res => {
            console.log("saved", res)


        }).then(err => {
            console.log("error", err);

        });
    };

 


    return (
        <div>
        <Jumbotron />
             <SearchBar
                handleSearchChange={handleSearchChange}
                searchBooks={searchBooks} />
        
            <Results
                data={books}
                saveBook={saveBook}
                modalClose={modalClose}
                text={text}
                modalClass={modalClass}
            />
          
        </div>
    );
};

export default Search;