import React , { Component } from 'react';
import './style.css';
import Person from './Person/Person';


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

class App extends Component{
  state={
    people:[
      {name:"Ali",age:45},
      {name:"Poli",age:98}
    ]
  }

  alertButtonHandler=(newName)=>{
    this.setState({
      people:[
        {name:newName,age:45},
        {name:newName,age:98}
      ]
    })
  }
  
 changeNameHandler=(event)=>{
  this.setState({
    people:[
      {name:event.target.value,age:45},
      {name:"Poli",age:98}
    ]
  })
  }

  render(){
    const customStyle={
      backgroundColor:'white',
      border:'1px solid black',
      cursor:'pointer',
      padding:'5px',
      boxShadow:'0 2px 2px #ccc'
    }
    return (
      <div>   
      <h1>Hello , World</h1>   
      <button style={customStyle} onClick={this.alertButtonHandler.bind(this,"Named by Button")}>Switch Name</button>
      <Person
      onclick={this.alertButtonHandler.bind(this,"Named by Props")}
      changed={this.changeNameHandler}
       name={this.state.people[0].name}
       age={this.state.people[0].age}><h1>It is children propperty</h1></Person>
      <Person
       name={this.state.people[1].name}
        age={this.state.people[1].age}
        changed={this.changeNameHandler}/>
      </div>
    );
  }
}

export default App;