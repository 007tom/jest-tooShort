import React, { ChangeEvent, useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("");

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.validity.tooShort);
    setValue(evt.target.value);
  };
  
  return (
    <div className="App">
      <form>
        <input type="text" value={value} minLength={2} onChange={onChange} data-testid="input-test-field" />
      </form>
    </div>
  );
}

export default App;
