import './index.scss';
import React from 'react'
function App() {


  const [count, setCount] = React.useState(0) //начальное состояние счетчика


  // функция для инкремента count 
  const handleClikInc = () => { 
    setCount(count => count + 1)
  }
 // функция для декремента count 
  const handleClikDec = () => {
    setCount(count => count - 1)
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button  disabled={count <= 0}  className="minus" onClick={() => handleClikDec()}>- Минус</button>
        <button  className="plus" onClick={() => handleClikInc()}>Плюс +</button>
      </div>
    </div>
  );
}

export default App;
