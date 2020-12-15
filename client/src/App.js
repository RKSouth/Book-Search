import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar"; 
// setting up the routes to the different pages in the application
function App() {
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
};

export default App;