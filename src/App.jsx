import { useState } from "react";
import "./App.css";
import MusicGift from "./MusicGift";

export default function App() {
  const [noPosition, setNoPosition] = useState({ top: 50, left: 32 });
  const [stage, setStage] = useState("ask");
  const [todResult, setTodResult] = useState(null);

  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 70) + 10;
    const randomLeft = Math.floor(Math.random() * 70) + 10;

    setNoPosition({
      top: randomTop,
      left: randomLeft,
    });
  };

  return (
    <div className="container">
      <div className="card">
        <div className="emoji">💞</div>

        {stage == "ask" && (
          <>
          <h1>Will you be my valentine 💕 ? Preetzz...</h1>
          <div className="buttons">
            <button className="yes" onClick={() => setStage("gifts")}> Yes </button>
          <button className="no" style={{
                  top: `${noPosition.top}%`,
                  left: `${noPosition.left}%`,
                }} onMouseEnter={moveNoButton} onTouchStart={moveNoButton}>No</button>
          </div>
          <p className="hint">“No” seems a bit shy 😏</p>
          </>
        )}

        {stage == "gifts" && (
          <>
          <h1>Pick your gift 🎁</h1>
          <div className="gifts">
              <button className="gift" onClick={() => setStage("gift1")}>🎵</button>
              <button className="gift" onClick={() => setStage("gift2")}>💌</button>
              <button className="gift" onClick={() => setStage("gift3")}>🎯</button>
              </div>
          </>
        )}

        {stage == "gift1" && (
          <>
          <MusicGift />
          <button className="back" onClick={() => { setStage("gifts"); }}>
      ⬅ Back to gifts
    </button>
          </>
        )}

        {stage == "gift2" && (
    <div className="note-card">
      <p className="note-title">I wrote this for you… 💌</p>

      <div className="note-text">
        <p>Hey Sweetheart 💖,</p>
        <p>
          I may not be perfect at expressing things, <br />
          but I hope you know how much you mean to me.
        </p>
        <p>
          In a world where everything feels fast and noisy, <br />
          you feel calm and safe to me.
        </p>
        <p> I made this whole website
Just to make you smile at least once today 💕</p>
        <p>
          I’m thankful for you. <br />
          Today and always.
        </p>
        <p className="sign">– Me (Weirdo) 💌</p>
      </div>

      <button className="back" onClick={() => setStage("gifts")}>
        ⬅ Back to gifts
      </button>
    </div>
        )}

        {stage == "gift3" && (
          <>
            {/* <h2>Wanna play a game? 😏</h2> */}

            {!todResult && (
              <div className="tod">
                <button className="tod_choice" onClick={() => setTodResult("truth")}>Truth 💖</button>
                <button className="tod_choice" onClick={() => setTodResult("dare")}>Dare 😈</button>
              </div>
            )}

            {todResult === "truth" && (
              <p className="message">
                 What’s something about me that drives you crazy (in a good way) 🥹?
              </p>
            )}

            {todResult === "dare" && (
              <p className="message">
                Create a best snap of yours and send me 😜 and it should be better than all of the snaps you had shared previously...
              </p>
            )}
            <button className="back" onClick={() => { setTodResult(null); setStage("gifts"); }}>
              ⬅ Back to gifts
            </button>
          </>
        )}
      </div>
    </div>
  );
}
