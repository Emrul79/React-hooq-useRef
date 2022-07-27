// import { Component } from "react";
import React,{Component} from "react";

class Myclass extends Component{
    
    render(){
        const{title,description}=this.props;
        return(
            <h1>Hello from billo Component {this.props.title}</h1>
        )
    }
    
}

export default Myclass