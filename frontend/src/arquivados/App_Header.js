import React, { useState } from 'react';

import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);
  function Increment(){
    setCounter(counter + 1);
    console.log(counter);
  }
  return (
    <Header title="Semana OmniStack">
      Aulas de Front-end <br /><br />
      <h3>
        Contador: {counter}  <button onClick={Increment}>Incrementar</button>
      </h3> 
    </Header>
  );
}

export default App;