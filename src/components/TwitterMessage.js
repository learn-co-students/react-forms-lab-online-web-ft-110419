import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleCharEvent = event => {
    this.setState({
      message: event.target.value
    })
  }

  characterCounter(){}

  render() {
    let charCount = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleCharEvent} value={this.state.message}/>
        {charCount}
      </div>
    );
  }
}

export default TwitterMessage;
