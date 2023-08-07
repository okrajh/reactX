import "./Video.css"
export default function Video({ id, publish, title, chanle, views, time, src }) {
    return (
        <>
            <div className="video-box col-md-3 justify-content-start">
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