import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Video from "./components/Video/Video";
import { videos } from './data.js'

export default function App(params) {
  const [videosList, setVideos] = useState(videos)
  function addVideos(video) {
    setVideos([...videosList, { ...video, id: video.length + 1 }])
  }

  return (
    <>
      <Form addVideos={addVideos}></Form>
      <div className="row w-75 mx-auto">
        {
          videosList.map((video) => <Video {...video} />)
        }
      </div>
    </>
  );
}
