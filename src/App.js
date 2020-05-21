import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Szabi', age: 23},
      {name: 'Betti', age: 22},
      {name: 'Gyula', age: 688}
    ],
  });

  const [otherState, setOtherState] = useState('some other valuse');

  console.log(personsState, otherState);

  const switchNameHandler = () =>{
    // console.log('Was clicked!');
    // DON'T DO THIS: personsState.persons[0].name = 'Szabolcs';
    setPersonsState({
      persons: [
        {name: 'Szabolcs', age: 23},
        {name: 'Bettina', age: 22},
        {name: 'Gyula', age: 688}
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}> My hobbies: Racing</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
  //return React.createElement('div', {className:'App'}, React.createElement('h1', null , 'Does this work now?'))


}

export default App;

