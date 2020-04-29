import React, { useState } from "react";

export default function LikeCounter() {
  const innitialLike = 0;

  const [numLike, set_numLike] = useState(innitialLike); // set a state for like

  const incrementLike = () => {
    console.log("what is this?", numLike);
    set_numLike(numLike + 1);
  };

  return (
    <div>
      <p>
        This post has <b>{numLike}</b> likes.
        <button onClick={incrementLike}>Like</button>
      </p>
    </div>
  );
}
