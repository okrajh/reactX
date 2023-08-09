import { useState } from "react"

export default function CardSlider({ name, artist, description, url, alt, handleClick, startIndex, lengthList }) {
    const [showMore, setShowMore] = useState(false)
    function handleMoreClick(ev) {
        setShowMore(!showMore)
    }
    return (
        <div className="col-md-6 shadow p-3 mb-5 bg-body-tertiary rounded" >
            <div className="">
                <button className="btn btn-secondary" onClick={handleClick}>Next</button>
            </div>
            <h4 className="">{name} by {artist}</h4>
            <p>({startIndex} of {lengthList})</p>
            <button className="btn btn-primary" onClick={handleMoreClick}>{showMore ? 'Hide' : 'Show'}</button>
            <p>{showMore && description}</p>
            <img className="img-fluid rounded img-thumbnail w-25" src={url} alt={alt} />
        </div>
    )
}