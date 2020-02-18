import * as actionTypes from '../Actions'

const initialState = {
    results: []
};

const reduce = (state = initialState, action) => {

    switch (action.type) {   

        case actionTypes.STORE:
            return {
                ...state,
                results: state.results.concat({ id: Math.random(), val: action.count })
            }

        case actionTypes.DELETE:
            const newArray = state.results.filter(i => i.id !== action.elementId);
            return {
                ...state,
                results: newArray
            }

        default:
            return state;
    }
}

export default reduce;