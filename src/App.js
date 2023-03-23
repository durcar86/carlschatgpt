// Create a react component
import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };

  return (
    <div className="App">
    <h1>Carl's ChatApp</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          onkeypress="onTestChange();"
          value={message}
          placeholder="Ask me a question"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {response && <div><b>Carl:</b> {response}</div> }
    </div>
  );
}

export default App