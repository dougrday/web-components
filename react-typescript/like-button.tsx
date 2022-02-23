import "@material/mwc-button";
import * as React from "react";
import * as PropTypes from "prop-types";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "mwc-button": any;
    }
  }
}

export interface LikeButtonProps {
  likedtext: string;
}

export interface LikeButtonState {
  liked: boolean;
}

export class LikeButton extends React.Component<
  LikeButtonProps,
  LikeButtonState
> {
  static propTypes = {
    likedtext: PropTypes.string,
  };

  constructor(props: LikeButtonProps) {
    super(props);
    this.state = { liked: false };
  }

  handleClick() {
    this.setState({ liked: !this.state.liked });
  }

  render() {
    const text = this.state.liked ? this.props.likedtext ?? "Unlike" : "Like";
    return <mwc-button onClick={() => this.handleClick()}>{text}</mwc-button>;
  }
}
