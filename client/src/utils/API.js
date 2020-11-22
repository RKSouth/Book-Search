import axios from "axios"
import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../pages/Search'
import SearchBox from '../components/SearchBox'




export default {
    getBooks: function(searching) {
        console.log(searching);
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + searching)
        .then(response => {
                        return response.data;
                    } )
    },
    saveBooks: function(savedBook) {
        return axios.post("/api/books", savedBook);
      },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    eatBooks: function(Object){
        return axios.get("/api/books/Object")
    }


    }
    

    