import React, { Component } from 'react';

class Publication extends Component {
   
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div>
                <p>{this.props.post}</p>
                <button onClick={this.props.onClick}>👍{this.props.likes}</button>
            </div>
        );
    }
}

export default Publication;