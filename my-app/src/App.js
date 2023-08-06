import Video from "./components/Video/Video";
import "./App.css";
import { videos, items } from "./data.js";
import Border from "./components/Border/Border";
import List from "./components/List/List";
import PlayButton from "./components/PlayButton/PlayButton";
import Counter from "./components/Counter/Counter";
import { useState } from "react";
export default function App(params) {
  const [vd, setVd] = useState(videos)
  return (
    <>
      <h1>{params.des}</h1>
      <button onClick={() => {
        setVd([...vd, {
          id: videos.length + 1,
          title: "React JS tutorial",
          views: "10k",
          time: "3 year ago",
          channel: "Coder Dost",
          publish: false,
        },])
      }}>Add</button>
      <div className="container">
        {vd.map((video) => (
          <Border>
            <Video
              className="Video1"
              key={video.id}
              {...video}
              width="100px"
            ></Video>
            <PlayButton
              message="play-msg"
              onPlay={() => 'play'}
              onPause={() => 'pause'}
            >
              Play
            </PlayButton>
          </Border>
        ))}
      </div>
      <Counter />

    </>
  );
}
