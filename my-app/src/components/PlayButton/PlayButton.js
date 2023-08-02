import "./PlayButton.css";
function PlayButton({ message, children, onPlay, onPause }) {
  let playing = false;

  function handleClick(ev) {
    if (playing) onPlay();
    else onPause();
    playing = !playing;
  }
  playing = false;
  return (
    <button onClick={(ev) => handleClick(ev)}>
      {children} :{playing ? ">>" : "||"}
    </button>
  );
}

export default PlayButton;
