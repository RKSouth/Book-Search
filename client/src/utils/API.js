import axios from "axios"

export default {
    getBooks: function(searching) {
        console.log(searching);
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + searching)
        .then(response => {
                        return response.data;
                    } )
    }, 
     saveBooks: function (savedBook) {
        console.log(savedBook);
        return axios
          .post('/api/books', savedBook)
          .then(function (response) {
            console.log(response.data);
            return response.data
          })
          .catch(function (error) {
            console.log(error);
          });
      },

    deleteBook: function(id) {
        return axios.delete("/api/books/" + id)
        .then(response => {
            return response.data;
        } )
    },



    eatBooks: function(){
        return axios.get("/api/books/" )
        .then(response => {
            return response.data;
       
        } )
    }


    }
    

    