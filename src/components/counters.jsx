import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        console.log("Counters - Rendered")
        const {counters, onReset, onIncrement, onDelete, onAdd, onDblClk, onConfirm, onTBChange} = this.props;
        return (<div>
            <button className="btn btn-primary btn-sm m-2" onClick={onReset}>Reset</button>
            <button className ="btn btn-primary btn-sm m-2" onClick = {onAdd}>Add Item</button>
            {counters.map(counter => 
                <Counter key={counter.id} onDelete={onDelete} counter={counter} onIncrement={onIncrement} >
                    { 
                        counter.toggle ? <h4 onDoubleClick={() => {onDblClk(counter.id)}}>{counter.category}</h4> : 
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" value={counter.category} onChange={(e) => {onTBChange(counter.id,e)}}></input> 
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" onClick={() => {onConfirm(counter.id)}}>Confirm</button>
                            </div>
                        </div>
                    }
                </Counter>)}
        </div>  );
    }

}
 
export default Counters;