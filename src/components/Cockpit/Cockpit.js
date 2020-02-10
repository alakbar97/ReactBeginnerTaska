import React from 'react';
import '../../containers/style.css';

const Cockpit = (props) => {
    const classes = [];
    if (props.people.length <= 2) classes.push("red");
    if (props.people.length <= 1) classes.push("bold");
    return (
        <div>
            <h6 className={classes.join(' ')}>Hello , World</h6>
            <button style={props.style} onClick={props.toggle}>Toggle People</button>
        </div>
    )
}

export default Cockpit;