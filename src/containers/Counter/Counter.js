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
        onIncrement: () => dispatch(actionType.increment()),
        onDecrement: () => dispatch(actionType.decrement()),
        onAdd: () => dispatch(actionType.add()),
        onSubtract: () => dispatch(actionType.subtract()),
        onStoreResult: (value) => dispatch(actionType.store(value)),
        onDeleteResult: (id) => dispatch(actionType.del(id))
    }
}


export default connect(mapStateToProps, dispatchToProps)(Counter);