import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import './App.css';



function App() {
  return (
    <div>
      <Navbar/>
      <Jumbotron />
      <Search />
      <Saved/>

    </div>
  );
}

export default App;
