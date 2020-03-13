import React, { Component } from 'react'
import { connect } from 'react-redux';

class ReduxTask extends Component {
    state = {
        name: '',
        age: ''
    }
    nameChangeHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    ageChangeHandler = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    render() {

        const style = {
            border: '1px solid black',
            width: '200px',
            padding: '10px',
            boxShadow: '2px 2px gray',
            margin: 'auto'
        };

        return (
            <div>
                <input type="text"
                    onChange={this.nameChangeHandler}
                    value={this.state.name}
                    placeholder='name' />
                <input type="text"
                    onChange={this.ageChangeHandler}
                    value={this.state.age}
                    placeholder='age' />
                <button onClick={() => this.props.onAdd(this.state.name, this.state.age)}>Add Person</button>
                {this.props.people.map(val => (
                    <div key={val.id} onClick={() => this.props.onDelete(val.id)} style={style}>
                        <h2>Name : {val.name}</h2>
                        <p>Age : {val.age}</p>
                    </div>
                ))}
            </div>
        )
    }
}

const getPeople = (state) => {
    return {
        people: state.people
    }
}

const addPerson = dispatch => {
    return {
        onAdd: (name, age) => dispatch({ type: 'ADD', personData: { name: name, age: age } }),
        onDelete: (id) => dispatch({ type: 'DELETE', divId: id })
    };
}

export default connect(getPeople, addPerson)(ReduxTask);