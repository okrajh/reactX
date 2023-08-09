import { useState } from 'react'
import './Timmer.css'
export default function Timmer() {
    const [sec, setSec] = useState(0);
    const [startStop, setStartStop] = useState("Start")
    function handleClick() {

    }
    return (
        <div className="timmer-container border p-4">
            <h3><span>10</span>:<span>12</span>:<span>{sec}</span></h3>
            <div>
                <button className='btn btn-primary' onClick={handleClick}>{startStop}</button>
                <button className='btn btn-success'>Reset</button>
            </div>
        </div>
    )
}