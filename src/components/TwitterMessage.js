import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = event => this.setState({[event.target.name]: event.target.value})

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <div>
          Characters Remaining: {this.props.maxChars - this.state.message.length}
        </div>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.message} />
      </div>
    );
  }
}

export default TwitterMessage;
