import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  state = { 
    counters: [
        {id:1, value: 0, category:"Cereal", toggle: true},
        {id:2, value: 0, category:"Apples", toggle: true},
        {id:3, value: 0, category:"Oranges", toggle: true},
        {id:4, value: 0, category:"Bananas", toggle: true},
    ],
    lastId: 5
 }

 constructor() {
   super();
   console.log("App - Constructed")
 }

 componentDidMount() {
   //Ajax Call
   //this.setState({});

   console.log("App- Mounted")
 }

handleDelete = (counterId) => {
    console.log(counterId)
    const counters = this.state.counters.filter(c => c.id !== counterId);
    //console.log (counters);
    this.setState({counters});
}
handleReset = () => {
    const counters = [
        {id:1, value: 0, category:"Empty"},
    ];
    const lastId = 1;
    this.setState({counters, lastId});
}
handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
}
handleAddCounter = () => {
  const c = "Empty";
  const counters = [...this.state.counters, {id: this.state.lastId + 1, value:0, category: c}];
  const lastId = this.state.lastId + 1;
  this.setState({counters, lastId});
}
handleDoubleClick = (i) => {
  const counters = [...this.state.counters];
  const counter = counters.filter(c => {
    return c.id === i;
  } )[0];
  const index = counters.indexOf(counter);
  counters[index].toggle = !counters[index].toggle;
  this.setState({counters});
}

handleConfirmation = (i) => {
  const counters = [...this.state.counters];
  const counter = counters.filter(c => {
    return c.id === i;
  } )[0];
  const index = counters.indexOf(counter);
  counters[index].toggle = !counters[index].toggle;
  this.setState({counters})
}

handleTextBoxChange = (i,e) => {
  const counters = [...this.state.counters];
  const counter = counters.filter(c => {
    return c.id === i;
  } )[0];
  const index = counters.indexOf(counter);
  counters[index].category = e.target.value;
  this.setState({counters});
}

  render() { 
    console.log ("App - Rendered")
    return ( <React.Fragment>
      <NavBar 
        totalCounters ={this.state.counters.filter(c=>c.value > 0).length}
      />
      <main className="container">
        <Counters 
        onReset={this.handleReset} 
        onIncrement={this.handleIncrement}
        onDelete={this.handleDelete}
        onAdd={this.handleAddCounter}
        onDblClk={this.handleDoubleClick}
        onConfirm={this.handleConfirmation}
        onTBChange={this.handleTextBoxChange}
        counters={this.state.counters}
        />
      </main>
    </React.Fragment> );
  }
}
 
export default App;