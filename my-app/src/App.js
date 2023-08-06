import Video from "./components/Video/Video";
import "./App.css";
import { videos, items } from "./data.js";
import Border from "./components/Border/Border";
import List from "./components/List/List";
import PlayButton from "./components/PlayButton/PlayButton";
import Counter from "./components/Counter/Counter";
export default function App(params) {
  return (
    <>
      <h1>{params.des}</h1>
      <h2 style={{ textAlign: "center" }}>User's Detials</h2>
      <div className="container">
        {videos.map((video) => (
          <Border>
            <Video
              className="Video1"
              key={video.id}
              {...video}
              width="400px"
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
