import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        console.log("Counters - Rendered")
        const {counters, onReset, onIncrement, onDelete} = this.props;
        return (<div>
            <button className="btn btn-primary btn-sm m-2" onClick={onReset}>Reset</button>
            {counters.map(counter => <Counter key={counter.id} onDelete={onDelete} counter={counter} onIncrement={onIncrement} > <h4>{counter.category}</h4> </Counter>)}
        </div>  );
    }

}
 
export default Counters;