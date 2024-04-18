

// TODO:Implement increment by 5 and decrement by 5 instead of 1
export function Counter({value, setCounter}){
    

    const onClick = () => {
        return setCounter(value + 1);
    }

    const onDecrement = () => {
        return setCounter(value - 1);
    }

return <div>
    <h1>Counter component:</h1>
    <div>Current value: {value}</div>
    <button onClick={onClick}>Increment me </button>
    <button onClick={onDecrement}>Decrement me </button>
</div>
}