import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    let charNum = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input id="message" type="text" name="message"
        onChange={this.handleChange}
        value={this.state.message}
        />
        {charNum}
      </div>
    );
  }
}

export default TwitterMessage;
