import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class UserInput extends Component {
    render() {
        const customStyle={
            border:'1px solid red',
            outline:'none',
            marginBottom:'5px'
        }
        return (
            <div>
                <input style={customStyle} type="text" onChange={this.props.change} value={this.props.name}/>
            </div>
        )
    }
}
