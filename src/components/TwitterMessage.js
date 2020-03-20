import React from "react";

class TwitterMessage extends React.Component {
  state = {
    message: ""
  };

  handleUpdate = (event) => {
    if (event.target.value.length <= this.props.maxChars) {
      this.setState({
        message: event.target.value
      })
      console.log(this.state.message)
    }
  }
  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleUpdate} />
        <p>Characters Remaining: {this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
