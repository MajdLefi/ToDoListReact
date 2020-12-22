import './App.css';
import React, {useState, state, setState } from "react";
import ToDoList from './Components/ToDoList';

class App extends React.Component {  
  
  render () {
    return (
      <div className="App">
      <ToDoList/>
      </div>
    );
  }
 
}

export default App;
