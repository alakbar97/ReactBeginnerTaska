import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionType from '../../store/Actions'

class Counter extends Component {
    state = {
        counter: 0
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement} />
                <CounterControl label="Add 5" clicked={this.props.onAdd} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract} />
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.strResult.map(rs => (
                        <li onClick={() => this.props.onDeleteResult(rs.id)} key={rs.id}>{rs.val}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        strResult: state.rs.results
    };
}

const dispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({ type: actionType.INCREMENT }),
        onDecrement: () => dispatch({ type: actionType.DECREMENT }),
        onAdd: () => dispatch({ type: actionType.ADD, value: 5 }),
        onSubtract: () => dispatch({ type: actionType.SUBTRACT, value: 5 }),
        onStoreResult: (value) => dispatch({ type: actionType.STORE,count:value }),
        onDeleteResult: (id) => dispatch({ type: actionType.DELETE, elementId: id })
    }
}


export default connect(mapStateToProps, dispatchToProps)(Counter);