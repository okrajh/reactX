import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Video from "./components/Video/Video";
import { videos, sculptureList } from './data.js'
import CardSlider from "./components/CardSlider/CardSlider";

export default function App(params) {
  const [videosList, setVideos] = useState(videos)
  function addVideos(video) {
    setVideos([...videosList, { ...video, id: video.length + 1 }])
  }
  const [index, setIndex] = useState(0)
  const [sculpture, setSculpture] = useState(sculptureList[index])

  function handleClick(ev) {
    console.log(index, sculptureList.length)
    if (index >= sculptureList.length - 1) {
      setIndex(0)
    }
    else {
      setIndex(index + 1)
    }
    setSculpture(sculptureList[index])
  }
  return (
    <>
      <Form key={101} addVideos={addVideos}></Form>
      <div className="row w-75 mx-auto">
        {
          videosList.map((video) => <Video {...video} key={video.id} />)
        }
      </div>

      <div className="mx-auto mt-5 container row justify-content-center">
        <CardSlider {...sculpture} handleClick={handleClick} startIndex={index} lengthList={sculptureList.length} />
      </div>
    </>
  );
}
