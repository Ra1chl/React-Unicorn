import { useState } from "react"

function Counter(){

const [count, setCount] = useState(0);

const increment = () => {
    setCount(c => c+1);

}

const decrement = () => {
    setCount(c => c-1);

}

const reset = () => {
    setCount(0);
}

return( <div className="count-contaier">
    <h1>Counter</h1>
    <p className="count-display">{count}</p>
    <button className="count-button" onClick={decrement}>Decrement</button>
    <button className="count-button" onDoubleClick={reset}>Reset</button>
    <button className="count-button" onClick={increment}>Increment</button>

</div>)
}

export default Counter