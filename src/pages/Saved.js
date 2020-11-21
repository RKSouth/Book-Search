import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";


function Saved() {
    const [books, setBooks] = useState([]);


    const deleteBooks = (id) => {
       
    };

    // grabbing the books from the database on initial render
    useEffect(() => {
        API.getBooks()
            .then(res => setBooks(res.data))
        // console.log(books)
    }, []);

    // re-render page when books is updated
    useEffect(() => {
    }, [books]);

    return (
        <div >
           Saved Books
        </div>
    );
};

export default Saved;