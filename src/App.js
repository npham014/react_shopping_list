import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  state = { 
    counters: [
        {id:1, value: 0, category:"Cereal"},
        {id:2, value: 0, category:"Condiments"},
        {id:3, value: 0, category:"Meat"},
        {id:4, value: 0, category:"Fish"},
    ]
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
    console.log (counters);
    this.setState({counters});
}
handleReset = () => {
    const counters = [
        {id:1, value: 0, category:"Empty"},
    ];
    this.setState({counters});
}
handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
}
  render() { 
    console.log ("App - Rendered")
    return ( <React.Fragment>
      <NavBar totalCounters ={this.state.counters.filter(c=>c.value > 0).length}/>
      <main className="container">
        <Counters 
        onReset={this.handleReset} 
        onIncrement={this.handleIncrement}
        onDelete={this.handleDelete}
        counters={this.state.counters}
        />
      </main>
    </React.Fragment> );
  }
}
 
export default App;