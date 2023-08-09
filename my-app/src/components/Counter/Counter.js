import { useState } from "react";
export default function Counter() {
    console.log("3: ")
    let [number, setNumber] = useState(0);
    function handleClick() {
        setNumber(number => number + 1)
        console.log(number)
        setNumber(number => number + 1)
        console.log(number)

        setNumber(number => number + 1)
        console.log(number)

        setNumber(number => number + 1)

    }
    console.log("12 : ")
    return (
        <>
            <h1 style={{ 'color': 'white' }}>{number}</h1>
            <button onClick={handleClick}>ADD</button>
        </>
    )
}