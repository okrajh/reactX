import { user } from "../../App";
import "./Video.css"
export default function Video({id,publish,title,chanle,width,views,time}){
    return (
        <>
                <div className="item">
                <div className="pic">
                    <img src={`https://picsum.photos/id/${id+10}/400/300`}/>
                </div>
                <div className="title">{title}</div>
                <div className="channel">{chanle}</div>
                <div className="views">
                    {views} views <span>.</span> {time}
                </div>
                <div>{publish?'public':'private'}</div>
                </div>
        </>
    )
} 