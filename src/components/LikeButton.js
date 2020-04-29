import React, { useState } from "react";

export default function LikeButton() {
  const [buttonText, set_buttonText] = useState(false);
  const onClickButtonText = () => {
    set_buttonText(!buttonText);
  };
  const likeText = buttonText
    ? "You have liked this. Click to unlike"
    : "Like this";
  return (
    <div>
      <p>
        <button onClick={onClickButtonText}>{likeText}</button>
      </p>
    </div>
  );
}
