import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Validation extends Component {
    render() {
        return (
            <div>
                {this.props.text > 5 ? <p className="text-danger">Text is too long</p> : <p className="text-danger">Text is too short</p>}
            </div>
        )
    }
}
