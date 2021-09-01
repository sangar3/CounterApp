import React, { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    
    setCount(count + 1) //correct
  }

  const decrement = () => {
    
    setCount(count - 1) //correct
  }

  return (
    <div>
      <h1>Welcome to my counter App</h1>
      <p>The count is: {count} </p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
