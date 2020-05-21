import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Szabi', age: 23},
      {name: 'Betti', age: 22},
      {name: 'Gyula', age: 688}
    ],
    otherState: 'some other value'
  };

  switchNameHandler = () =>{
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Szabolcs';
    this.setState({
      persons: [
        {name: 'Szabolcs', age: 23},
        {name: 'Bettina', age: 22},
        {name: 'Gyula', age: 688}
      ]
    })
  };

  render(){
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> My hobbies: Racing</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null , 'Does this work now?'))
  }

}

export default App;
