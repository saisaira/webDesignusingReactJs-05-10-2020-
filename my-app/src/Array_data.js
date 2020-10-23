import React,{Component} from 'react';

export default class Array_data extends Component{
	render(){
		var style={
    background:"#000",
    color:"#fff",
    textAlign:"center"
  }
		return(
         <h1 style={style}>{this.props.trainer} This is array page {this.props.student}</h1>
			)
	}
}