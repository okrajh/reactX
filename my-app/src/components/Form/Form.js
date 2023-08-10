import { useEffect, useState } from 'react'
import './Form.css'

export default function Form({ addVideos, editableVideo, updateVideo, setEditableVideo }) {

    const initialState = {
        time: '1 month ago',
        channel: 'Coder Dost',
        verified: true,
        src: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/400/300`,
        title: '',
        views: ''
    }
    const [video, setVideo] = useState(initialState);

    function handleChange(ev) {
        setVideo({ ...video, [ev.target.name]: ev.target.value, id: ev.target.value.length + Math.floor(Math.random() * 1000) })
    }
    function handleEditAdd(ev) {
        ev.preventDefault();
        if (editableVideo) {
            updateVideo(video, editableVideo.id)
            setEditableVideo(null)
        }
        else {
            addVideos(video);
        }
    };

    useEffect(() => {
        if (editableVideo) {
            setVideo({ ...editableVideo })
        }
    }, [editableVideo])

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
                <button type="submit" className="btn btn-primary" onClick={handleEditAdd}>{editableVideo ? 'Edit' : 'Add'} </button>
            </form>
        </div>
    )
}