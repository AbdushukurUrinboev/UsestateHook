import React, { useState } from "react";


function App(){
const [count, setCount] = useState(0);


function increase(){
  setCount(count + 1);
}

function decrease(){
  setCount(count - 1)
}

function square(){
  setCount(count * count)
}

function update(){
  setCount(0)
}

return(
  <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    <button onClick={square}>*</button>
    <button onClick={update}>0</button>
  </div>
);
}

export default App;