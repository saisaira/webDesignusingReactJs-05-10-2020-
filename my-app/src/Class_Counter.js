import React,{Component} from 'react';
import './App.css';

export default class Class_Counter extends Component{
	constructor(){
		super()
		this.state={
			count:0
		}
	}
	incrementCount=()=>{
		this.setState({
			count:this.state.count +1
		})
	}
	decrementCount=()=>{
		this.setState({
			count:this.state.count -1
		})
	}
	render(){
		return(
          <div className="welcome">
          <button onClick={this.incrementCount}>incrementcount</button>
          <p>{this.state.count}</p>
          <button onClick={this.decrementCount}>decrementCount</button>
          
          </div>
			)
	}
}