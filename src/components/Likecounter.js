import React, { useState } from "react";

export default function LikeCounter() {
  const innitialLike = 0;

  const [numLike, set_numLike] = useState(innitialLike); // set a state for like

  const resetLike = () => {
    set_numLike(innitialLike);
  };

  return (
    <div>
      <p>
        This post has <b>{numLike}</b> likes.
        <button
          onClick={function () {
            set_numLike(numLike + 1);
          }}
        >
          Like
        </button>
        <button onClick={resetLike}>Reset</button>
      </p>
    </div>
  );
}
