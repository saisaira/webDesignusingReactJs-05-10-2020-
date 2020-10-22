import React,{Component} from 'react';
import './App.css';
import Class_Counter from './Class_Counter';
import HookCounter from './HookCounter';

var Practice=(props)=>{
return(
<div>
<h1>{props.name} play cricket and {props.message}</h1>

{
/*
<State_example />
<Class_Counter />
<HookCounter />
*/
}
</div>
	)
}
class State_example extends Component{
	constructor(){
		super();
		this.state={
			name:"Sairam"
		}
	}

	changeName=()=>{
		this.setState({
			name:"Gautham"
		})
	}
	render(){
		var styles_given={
			background:"blue",
			color:"#fff",
			textAlign:"center"
		}
		return(
		<div>
		<h1 style={{color:"red",textAlign:"center"}}>welcome</h1>
        <h1 style={styles_given}> welcome to {this.state.name}</h1>
		<button onClick={this.changeName}>Change name</button>
		</div>
			)
	}
}



export default Practice;