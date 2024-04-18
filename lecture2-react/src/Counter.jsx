import { useState } from "react";

// TODO:Implement increment by 5 and decrement by 5 instead of 1
export function Counter({value}){
    const [counter, setCounter] = useState(value|| 0);

    const onClick = () => {
        return setCounter(counter + 1);
    }

    const onDecrement = () => {
        return setCounter(counter - 1);
    }

return <div>
    <h1>Counter component:</h1>
    <div>Current value: {counter}</div>
    <button onClick={onClick}>Increment me </button>
    <button onClick={onDecrement}>Decrement me </button>
</div>
}