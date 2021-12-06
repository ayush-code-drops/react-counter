import {useState} from "react";


export default function App() {
  const[counter,setCounter]=useState(0)

  
  const handleAddClick=()=>{
    setCounter(counter+1)
    }
    const handleMinusClick=()=>{
      setCounter(counter-1)
      }
      const handleDoubleClick=()=>{
        setCounter(counter*2)
        }
return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={handleAddClick}>Add</button>
      <button onClick={handleMinusClick}>Subtract</button>
      <button onClick={handleDoubleClick}>Double</button>

    </div>
  );
}
