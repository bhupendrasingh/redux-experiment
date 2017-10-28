import React,{ Component } from 'react';
import { createStore } from 'redux';
import * as actions from '../Actions';
import counter from '../Reducers/counter';

const store =createStore(counter);

class Counter extends Component{
	constructor(props){
		super(props);
		this.state ={
			value:1,
		}
		this.increment=this.increment.bind(this);
		this.decrement=this.decrement.bind(this);
	}

	increment(){
		store.dispatch(
		{
			type:'INCREMENT'
		}
		)
	}

	decrement(){
		store.dispatch({
			type:'DECREMENT',
		})
	}

	render(){
		return(
		<div className="Counter">
			<h3>Counter example</h3>
			<p> Current value is {this.state.value} </p>
			<button onClick={this.increment}> + </button>
			<button onClick={this.decrement}> - </button>
		</div>
		);
	}
}
export default Counter;