import React, { Component } from "react";

export default class Handler extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            changedValue: '',
        }
    }
    changePlease = (e) => {
        this.setState({
          changedValue: e.target.value,
        }, () => {
            console.log(this.state.changedValue);
        }
        );
        
    }
        render(){
            const { changedValue } = this.state;
            return (
                <div>
                    <input type="text" onChange={this.changePlease} />
                    <p>
                        {changedValue}
                        
                    </p>
                </div>
            )
    }    
}

