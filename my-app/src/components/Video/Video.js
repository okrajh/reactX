import "./Video.css"
export default function Video({ id, publish, title, chanle, views, time, src, deleteVideo, editVideo }) {
    return (
        <>
            <div className="video-box position-relative col-md-3 justify-content-start">
                <div className="position-absolute left-0 bottom-0">
                    <button className="btn btn-danger" onClick={() => deleteVideo(id)}>X</button>
                    <button className="ml-1 btn btn-warning" onClick={() => editVideo(id)}>E</button>
                </div>
                <div className="item">

                    <div className="pic">
                        <img className="img-fluid img-thumbnail rounded" src={src} />
                    </div>
                    <div className="title">{title}</div>
                    <div className="channel">{chanle}</div>
                    <div className="views">
                        {views} views <span>.</span> {time}
                    </div>
                    <div>{publish ? 'public' : 'private'}</div>
                </div>
            </div>
        </>
    )
} 