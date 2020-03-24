import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  handleTweetWriting = event => {
    this.setState({
      tweet: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.tweet}
          onChange={this.state.tweet.length < this.props.maxChars ? this.handleTweetWriting : null}
        />
        <strong>Remaining characters: {this.props.maxChars - this.state.tweet.length}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
