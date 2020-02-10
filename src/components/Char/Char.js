import React, { Component } from 'react'

export default class Char extends Component {

    render() {
        const style = {
            display: 'inline-block',
            padding: '16px',
            textAlign: 'center',
            margin: '16px',
            border: '1px solid black'
        }
        return (
            <div onClick={this.props.click} style={style}>
                {this.props.text}
            </div>
        )
    }
}
