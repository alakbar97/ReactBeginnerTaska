import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import Person from './Person/Person'

const People = (props) => props.people.map((person, index) => {
    return <div>
        <ErrorBoundary key={person.id}> <Person
            changed={(event) => props.changed(event, person.id)}
            name={person.name}
            age={person.age}
            click={() => props.deleted(index)} />
        </ErrorBoundary>
    </div>
})

export default People;