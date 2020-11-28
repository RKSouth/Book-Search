import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Jumbotron} />
            <Route path="/Search" component={Search} />
   
          <Route path="/Saved" component={Saved} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <Navbar/>
//       <Jumbotron />
//       <Search />
//       <Saved/>

//     </div>
//   );
// }

export default App;
