import { useState } from 'react'
import './Form.css'
export default function Form({ addVideos }) {
    const [video, setVideo] = useState({
        time: '1 month ago',
        channel: 'Coder Dost',
        verified: true,
        src: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/400/300`
    });
    function handleClick(ev) {
        ev.preventDefault()
        addVideos(video)
    };
    function handleChange(ev) {
        setVideo({ ...video, [ev.target.name]: ev.target.value })
    }
    return (
        <div className="form-div w-25 mx-auto mb-5">
            <form>
                <div className="mb-1">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" name="title" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-1">
                    <label htmlFor="exampleInputPassword1" className="form-label">Views</label>
                    <input type="text" name="views" onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add </button>
            </form>
        </div>
    )
}