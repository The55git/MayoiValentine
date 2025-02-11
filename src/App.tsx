import { useState, useEffect } from "react";
import "./App.css";

const phrases = [
  "no",
  "Are you sure?",
  "Really sure?",
  "What if you pressed yes instead?",
  "Just think about it",
  "If you say no, Mayoi will be sad",
  "I'll be very sad too :(",
  "very very sad :(",
  "very very very sad :(",
  "At least have a hug (づ ᴗ _ᴗ)づ♡",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  // Load the Tenor embed script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [noCount, yesPressed]); // Re-run this effect when `noCount` or `yesPressed` changes

  return (
    <div className="centered-container" style={{ backgroundColor: "#FFD580" }}>
      <div className="valentine-container">
        {yesPressed ? (
          <>
            {/* New Tenor GIF for "Yes" */}
            <div
              key="new-gif"
              className="tenor-gif-embed"
              data-postid="5126013511471515768"
              data-share-method="host"
              data-aspect-ratio="2.09244"
              data-width="70%"
            >
              <a href="https://tenor.com/view/mayoi-ayase-mayoi-mayoi-enstars-enstars-mayoi-enstars-mayoi-ayase-gif-5126013511471515768">
                Mayoi Ayase Mayoi Enstars GIF
              </a>
              from{" "}
              <a href="https://tenor.com/search/mayoi+ayase-gifs">
                Mayoi Ayase GIFs
              </a>
            </div>

            <div className="text-container">
              <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                Thank you :D!
              </span>
            </div>
          </>
        ) : noCount >= 10 ? (
          <>
            {/* New GIF and text after 10 "No" clicks */}
            <div
              key="sad-gif"
              className="tenor-gif-embed"
              data-postid="23646804"
              data-share-method="host"
              data-aspect-ratio="1"
              data-width="50%"
            >
              <a href="https://tenor.com/view/mayoi-ayase-omg-this-is-so-sad-beatboxes-enstars-ensemble-stars-gif-23646804">
                Mayoi Ayase Omg This Is So Sad GIF
              </a>
              from{" "}
              <a href="https://tenor.com/search/mayoi+ayase-gifs">
                Mayoi Ayase GIFs
              </a>
            </div>

            <div className="text-container">
              <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                I get it, it's fine, have a great day
              </span>
            </div>
          </>
        ) : (
          <>
            {/* Original Tenor GIF */}
            <div
              key="original-gif"
              className="tenor-gif-embed"
              data-postid="4091111448498614049"
              data-share-method="host"
              data-aspect-ratio="1"
              data-width="50%"
            >
              <a href="https://tenor.com/view/mayoi-ayase-mayoi-enstars-ensemble-stars-anime-boy-gif-4091111448498614049">
                Mayoi Ayase Enstars GIF
              </a>
              from{" "}
              <a href="https://tenor.com/search/mayoi+ayase-gifs">
                Mayoi Ayase GIFs
              </a>
            </div>

            <h1 className="text-container">Wanna be my Valentine :?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
