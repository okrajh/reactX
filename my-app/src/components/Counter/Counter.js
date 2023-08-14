import { useState } from "react";
export default function Counter() {
    let [number, setNumber] = useState(0);
    function handleClick() {
        setNumber(number => number + 1)
        setNumber(number => number + 1)
        setNumber(number => number + 1)
        setNumber(number => number + 1)

    }
    return (
        <>
            <h1 style={{ 'color': 'white' }}>{number}</h1>
            <button onClick={handleClick}>ADD</button>
        </>
    )
}