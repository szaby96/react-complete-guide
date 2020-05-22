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

  switchNameHandler = (newName) =>{
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Szabolcs';
    this.setState({
      persons: [
        {name: newName, age: 23},
        {name: 'Bettina', age: 22},
        {name: 'Gyula', age: 688}
      ]
    })
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Szabi', age: 23},
        {name: 'Bettina', age: 22},
        {name: event.target.value, age: 688}
      ]
    })
  }


  render(){
    const buttonStyle ={
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={buttonStyle}
          onClick={() => this.switchNameHandler('Szabolcs!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Szabi!')}> My hobbies: Racing</Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}/>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          changed={this.nameChangeHandler}/>
      </div>
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null , 'Does this work now?'))
  }

}

export default App;
