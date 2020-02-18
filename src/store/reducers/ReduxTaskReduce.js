const initialState = {
    people: []
}

const reduce = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            const newArray = state.people.concat({
                name: action.personData.name,
                age:action.personData.age,
                id: Math.random()
            })
            return {
                ...state,
                people: newArray
            }

        case 'DELETE':
            const filteredArray = state.people.filter(person => person.id !== action.divId);
            return {
                ...state,
                people: filteredArray
            }


        default:
            return state;
    }
}

export default reduce;