export const ADD = 'ADD';
export const DECREMENT = 'DECREMENT';
export const INCREMENT = 'INCREMENT';
export const SUBTRACT = 'SUBTRACT';
export const DELETE = 'DELETE';
export const STORE = 'STORE';

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const add = () => {
    return {
        type: ADD,
        value: 5
    }
}

export const subtract = () => {
    return {
        type: SUBTRACT,
        value: 5
    }
}

export const del = (id) => {
    return {
        type: DELETE,
        elementId: id
    }
}

export const saveResult = (counter) => {
    return {
        type: STORE,
        count: counter
    }
}


export const store = (counter) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(counter))
        }, 2000)
    }
}