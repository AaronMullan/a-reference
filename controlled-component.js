import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState();
  //the '' as the initial state is a crucial piece I always forget
  const [displayName, setDisplayName] = useState('');

  const handleChange = (e) => setDisplayName(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(displayName);
  };

  return (
    <div className="App">
      <form>
        <label>username:</label>
        <input
          type="text"
          value={displayName}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>

    </div>
  )
}

export default App;
