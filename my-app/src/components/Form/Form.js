import { useState } from 'react'
import './Form.css'
export default function Form({ addVideos }) {
    const initialState = {

        time: '1 month ago',
        channel: 'Coder Dost',
        verified: true,
        src: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/400/300`,
        title: '',
        views: ''
    }
    const [video, setVideo] = useState(initialState);
    function handleClick(ev) {
        ev.preventDefault();
        addVideos(video);
        setVideo(initialState);
    };
    function handleChange(ev) {
        setVideo({ ...video, [ev.target.name]: ev.target.value, id: (ev.target.name).length + 1 })
    }
    return (
        <div className="form-div w-25 mx-auto mb-5">
            <form>
                <div className="mb-1">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" value={video.title} name="title" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-1">
                    <label htmlFor="exampleInputPassword1" className="form-label">Views</label>
                    <input type="text" value={video.views} name="views" onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add </button>
            </form>
        </div>
    )
}