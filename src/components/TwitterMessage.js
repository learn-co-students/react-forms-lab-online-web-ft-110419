import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = (e) => {
    if (this.charsRemaining()) this.setState({ [e.target.name]: e.target.value });
  }

  charsRemaining() {
    return this.state.message.length < this.props.maxChars
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <div>
          Characters Remaining: {this.props.maxChars - this.state.message.length}
        </div>
        <input type="text"
          name="message"
          id="message"
          onChange={this.handleChange}
          value={this.state.message}
        />
      </div>
    );
  }
}

export default TwitterMessage;
