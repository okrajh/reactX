import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Video from "./components/Video/Video";
import { videos } from './data.js'

export default function App(params) {
  const [videosList, setVideos] = useState(videos)

  return (
    <>
      <Form addVideos={setVideos} videosList={videosList} ></Form>
      <div className="row w-75 mx-auto">
        {
          videosList.map((video) => <Video {...video} setVideos={setVideos} />)
        }
      </div>
    </>
  );
}
