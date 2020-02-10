import React, { Component } from 'react'
import Validation from '../components/Validation/Validation';
import Char from '../components/Char/Char';

export default class TaskReactList extends Component {
    state = {
        text: ''
    }
    showLengthHandler = (event) => {
        this.setState({
            text: event.target.value
        })
    }
    takeCharHandler = (e) => {
        const words = [...this.state.chars];
        words.push(String.fromCharCode(e.keyCode));
        this.setState({
            chars: words
        });
    }
    deleteCharHandler = (c) => {
        let word = this.state.text;
        word = word.replace(c, "");
        console.log(word)
        this.setState({
            text: word
        })
    }
    render() {
        let txt = this.state.text;
        let charlist = txt.split('');
        return (
            <div>
                <input type="text"
                    onChange={(e) => this.showLengthHandler(e)}
                    value={this.state.text} />
                {this.state.text !== '' ? <p>{this.state.text}</p> : null}
                <Validation
                    text={this.state.text.length}
                    chars={this.state.chars} />
                {charlist.map((c, index) => {
                    return <Char
                        click={() => this.deleteCharHandler(c)}
                        key={index}
                        text={c} />
                })}
            </div>
        )
    }
}
