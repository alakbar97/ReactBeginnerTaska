import React,{Component} from 'react';
import './person.css'
// const person=()=>{
// return <p>This is a Person, he is {Math.ceil(Math.random()*25)} years old</p>
// }
class Person extends Component{
    render(){
    return <div className="person">
            <p onClick={this.props.onclick}>This is {this.props.name}, he is {this.props.age} years old</p>
            <span>{this.props.children}</span>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
         </div>
    }
}

export default Person;