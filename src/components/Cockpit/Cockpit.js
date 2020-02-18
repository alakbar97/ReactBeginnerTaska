import React, { useEffect } from 'react';
import '../../containers/style.css';
import Radium from 'radium';

const Cockpit = (props) => {
    const classes = [];
    if (props.isShow) {
        props.style.backgroundColor = 'red';
        props.style[':hover'] = {
            backgroundColor: 'salmon',
            color: 'black'
        }
    }
    if (props.people.length <= 2) classes.push("red");
    if (props.people.length <= 1) classes.push("bold");
    return (
        <div>
            <h6 className={classes.join(' ')}>Hello , World</h6>
            <button style={props.style} onClick={props.toggle}>Toggle People</button>
        </div>
    )
}

export default Radium(Cockpit);