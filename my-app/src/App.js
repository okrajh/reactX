import { useContext, useReducer, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Video from "./components/Video/Video";
import { videos, sculptureList } from './data.js'
import CardSlider from "./components/CardSlider/CardSlider";
import Chat from "./components/Chat/Chat";
import ThemeCotext from "./components/Context/ThemeContext";
export default function App(params) {

  function videoReducer(videosList, action) {
    switch (action.type) {
      case 'ADD':
        return [...videosList, { ...action.payload }]
      case 'DEL':
        return [...videosList.filter(video => video.id !== action.payload)]
      case 'UPD':
        let index = videosList.findIndex((v) => v.id === action.payload.id)
        const newVList = [...videosList]
        newVList.splice(index, 1, action.payload.video)
        return newVList
      default:
        return videosList
    }
  }
  const [videosList, dispatch] = useReducer(videoReducer, videos)
  const [index, setIndex] = useState(0)
  const [sculpture, setSculpture] = useState(sculptureList[index]);
  const [editableVideo, setEditableVideo] = useState(null);

  // !Context

  const   = useContext(ThemeCotext);
  console.log(themeContext)
  function addVideos(video) {
    dispatch({ type: 'ADD', payload: video })
  }

  function deleteVideo(id) {
    dispatch({ type: 'DEL', payload: id })
  }

  function editVideo(id) {
    setEditableVideo(...videosList.filter(v => v.id === id))
  }

  function handleClick(ev) {
    if (index >= sculptureList.length - 1) {
      setIndex(0)
    }
    else {
      setIndex(index + 1)
    }
    setSculpture(sculptureList[index])
  }

  function updateVideo(video, id) {
    dispatch({ type: 'UPD', payload: { video: video, id: id } })
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
