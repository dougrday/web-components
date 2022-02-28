import "@material/mwc-button";
import * as React from "react";
import { useRef, useState } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "mwc-button": any;
    }
  }
}

export interface LikeButtonProps {
  likedText?: string;
}

export const LikeButton = (props: LikeButtonProps) => {
  const [liked, setLiked] = useState(false);
  const buttonRef = useRef(null);

  const { likedText, ...remainingProps } = props;
  const text = liked ? likedText ?? "Unlike" : "Like";

  const handleClick = () => {
    setLiked(!liked);
    buttonRef.current?.dispatchEvent(
      new CustomEvent("change", {
        detail: !liked,
        bubbles: true,
        cancelable: true,
        composed: true,
      })
    );
  };

  return (
    <mwc-button ref={buttonRef} {...remainingProps} onClick={handleClick}>
      {text}
    </mwc-button>
  );
};
