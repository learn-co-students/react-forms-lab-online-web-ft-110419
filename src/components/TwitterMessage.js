import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { message: "", messageLength: null};
  }
  handleChange = e => {
    this.setState({
      messageLength: this.props.maxChars - e.target.value.length,
      message: e.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={this.handleChange}
          value={this.state.message}
        />
        {this.state.messageLength || this.props.maxChars}
        <div>{this.state.message}</div>
      </div>
    );
  }
}

export default TwitterMessage;
