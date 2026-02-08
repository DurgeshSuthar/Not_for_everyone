import { useRef, useState } from "react";
import './Music.css'

export default function MusicGift() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
    setPlaying(!playing);
  };

  const onTimeUpdate = () => {
    const a = audioRef.current;
    setCurrent(a.currentTime);
    setProgress((a.currentTime / a.duration) * 100 || 0);
  };

  const formatTime = (t) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="ytm-card">
      <img src="/us.jpeg" className="cover" alt="cover" />

      <h2 className="title">I think they call this Love</h2>

      <div className="timeline">
        <span>{formatTime(current)}</span>
        <div className="bar">
          <div className="fill" style={{ width: `${progress}%` }} />
        </div>
        <span>{formatTime(duration)}</span>
      </div>

      <button className="play-big" onClick={togglePlay}>
        {playing ? "⏸" : "▶"}
      </button>

      <audio
        ref={audioRef}
        src="/love.mp3"
        onLoadedMetadata={(e) => setDuration(e.target.duration)}
        onTimeUpdate={onTimeUpdate}
        onEnded={() => setPlaying(false)}
      />
    </div>
  );
}
