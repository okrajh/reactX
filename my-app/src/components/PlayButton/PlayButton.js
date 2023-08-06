import { useState } from "react";
import "./PlayButton.css";
function PlayButton({ message, children, onPlay, onPause }) {
  const [playing, setplaying] = useState(true)

  function handleClick(ev) {
    if (playing)
      setplaying(false)
    else setplaying(true)

  }
  return (
    <button onClick={(ev) => handleClick(ev)}>
      {children} :{playing ? ">>" : "||"}
    </button>
  );
}

export default PlayButton;
