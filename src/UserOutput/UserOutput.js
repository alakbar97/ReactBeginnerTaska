import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default class UserOutput extends Component {
    render() {
        const customStyle={
            backgroundColor:'grey',
            border:'1px solid black',
            width:'30%',
            padding:'15px'
        }
        return (
            <div className="d-flex flex-column align-items-center">
                <p style={customStyle}>{this.props.username}</p>
                <p style={customStyle}>{this.props.username}</p>
            </div>
        )
    }
}

