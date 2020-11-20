import axios from "axios"
import React from 'react';
import ReactDOM from 'react-dom';





export default {
    
    getBooks: function() { 
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=Dune"
            ).then(response => {
                return response.data;
                // console.log(response.items)
            }
                
                    )
            }


    }
    

    
    // class getBooks extends React.Component {
    //   state = {
    //     books: []
    //   }
    
    //   componentDidMount() {
    //     // axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
    //     axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
    //       .then(res => {
    //         const posts = res.data.data.children.map(obj => obj.data);
    //         this.setState({ posts });
    //       });
    //   }
    
    //   render() {
    //     return (
    //       <div>
    //         <h1>{`/r/${this.props.subreddit}`}</h1>
    //         <ul>
    //           {this.state.posts.map(post =>
    //             <li key={post.id}>{post.title}</li>
    //           )}
    //         </ul>
    //       </div>
    //     );
    //   }
    // }
    
    // ReactDOM.render(
    //   <FetchDemo subreddit="reactjs"/>,
    //   document.getElementById('root')
    // );