import { render } from '@testing-library/react';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';


function App() {
  const [fact, setFact] = useState('');
    const handleClick = async () => {
      try {
        await fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
        .then(response => response.json())
        .then(result => {
          setFact(result.text)
          render(result.text);
        });
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Click the button for a cat fact.</h1>
        <button onClick={handleClick}>Give me a fact right, MEOW!</button>
      </header>
    </div>
  );
}

export default App;
 
