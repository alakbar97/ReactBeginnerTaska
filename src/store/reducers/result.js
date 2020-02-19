import * as actionTypes from '../Actions'
import { updateObject } from '../utility';

const initialState = {
    results: []
};

const reduce = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.STORE:
            return updateObject(state, { results: state.results.concat({ id: Math.random(), val: action.count }) });

        case actionTypes.DELETE:
            const newArray = state.results.filter(i => i.id !== action.elementId);
            return updateObject(state, { results: newArray });

        default:
            return state;
    }
}

export default reduce;