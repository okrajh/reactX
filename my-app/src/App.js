import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Video from "./components/Video/Video";
import { videos, sculptureList } from './data.js'
import CardSlider from "./components/CardSlider/CardSlider";
import Chat from "./components/Chat/Chat";

export default function App(params) {

  const [videosList, setVideos] = useState(videos)
  const [index, setIndex] = useState(0)
  const [sculpture, setSculpture] = useState(sculptureList[index]);
  const [editableVideo, setEditableVideo] = useState(null);

  function addVideos(video) {
    setVideos([...videosList, { ...video, id: video.length + 1 }])
  }

  function deleteVideo(id) {
    setVideos(videos.filter(video => video.id != id))
  }

  function editVideo(id) {
    console.log("App.js", id)
    setEditableVideo(videos.find(video => video.id == id))
    console.log(videos.find(video => video.id == id))

  }

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

  function updateVideo(video) {
    console.log(video)
    const cid = videos.findIndex(v => v.id === video.id)
    console.log(cid)
    const newVideos = [...videos]
    newVideos.splice(cid, 1, video)
    console.log(newVideos)
    setVideos([...newVideos])

  }

  return (
    <>
      <Form key={101} setEditableVideo={setEditableVideo} addVideos={addVideos} editableVideo={editableVideo} updateVideo={updateVideo}></Form>
      <div className="row w-75 mx-auto justify-content-center">
        {
          videosList.map((video) => <Video {...video} key={video.id} deleteVideo={deleteVideo} editVideo={editVideo} />)
        }
      </div>

      <div className="mx-auto mt-5 container row justify-content-center">
        <CardSlider {...sculpture} handleClick={handleClick} startIndex={index} lengthList={sculptureList.length} />
      </div>
      <div className="mx-auto mt-5 container row justify-content-center mb-5">
        <Chat />
      </div>
    </>
  );
}
