import React, { Component } from 'react';
import './style.css';
import Radium from 'radium';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';

// const App=props=>{

//   const[mainState,setState]=useState({
//       people:[
//         {name:"Ali",age:45},
//         {name:"Poli",age:98}
//       ]
//   });

//   const[otherState,otherSetState]=useState("This is Test");

//   console.log(mainState,otherState);

//   const alertButtonHandler=()=>{
//     setState({
//       people:[
//         {name:"Test",age:12},
//         {name:"Tested",age:53}
//       ]      
//     })
//   }

//   return (
//     <div>   
//     <h1>Hello , World</h1>   
//     <button onClick={alertButtonHandler}>Switch Name</button>
//     <Person name={mainState.people[0].name} age={mainState.people[0].age}><h1>It is children propperty</h1></Person>
//     <Person name={mainState.people[1].name} age={mainState.people[1].age}/>
//     </div>
//   );
// }

class App extends Component {
  state = {
    people: [
      { id: '1', name: "Ali", age: 45 },
      { id: '2', name: "Poli", age: 98 },
      { id: '3', name: "Bona", age: 98 }
    ],
    showPeople: false
  }

  alertButtonHandler = (newName) => {
    this.setState({
      people: [
        { name: newName, age: 45 },
        { name: newName, age: 98 }
      ]
    })
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(w => w.id === id);

    const person = { ...this.state.people[personIndex] };

    //const person=Object.assign({},this.state.people[personIndex]);

    person.name = event.target.value;

    const people = [...this.state.people];
    people[personIndex] = person;


    this.setState({
      people: people
    })
  }

  togglePeopleHandler = () => {
    const show = this.state.showPeople;
    this.setState({
      showPeople: !show
    })
  }

  deletePersonHandler = (personIndex) => {
    //const people=this.state.people.slice();
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({
      people: people
    });
  }

  render() {
    const customStyle = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid black',
      cursor: 'pointer',
      padding: '5px',
      boxShadow: '0 2px 2px #ccc',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let people = null;
    if (this.state.showPeople) {
      people = (
        <People
          people={this.state.people}
          changed={this.changeNameHandler}
          deleted={this.deletePersonHandler} />
      );
    }
    return (
      <div>
        <Cockpit
          isShow={this.state.showPeople}
          people={this.state.people}
          style={customStyle}
          toggle={this.togglePeopleHandler} />
        {people}
      </div>
    );
  }
}

export default Radium(App);