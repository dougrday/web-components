"use strict";

import "https://unpkg.com/@material/mwc-button@canary?module";
import "https://unpkg.com/react@17/umd/react.development.js";
import "https://unpkg.com/react-dom@17/umd/react-dom.development.js";
import "https://unpkg.com/prop-types@15/prop-types.js";

export class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    const text = this.state.liked ? (this.props.likedtext ?? "Unlike") : "Like";

    return React.createElement(
      "mwc-button",
      { onClick: () => this.setState({ liked: !this.state.liked }) },
      text
    );
  }
}

LikeButton.propTypes = {
  likedtext: PropTypes.string,
};
