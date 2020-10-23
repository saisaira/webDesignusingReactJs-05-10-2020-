import React,{Component} from 'react';
import './App.css';
import Data from "./data/data.json";

export default class Profile extends Component{
	render(){
		var indexValue=this.props.location.data.id;
		var specificProfile=Data.profiles[indexValue];
		return(
             <div>
             <h2>{specificProfile.des}</h2>
             <h2>{specificProfile.mobile}</h2>
             </div>
			)
	}
}