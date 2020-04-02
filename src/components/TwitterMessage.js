import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  handleContentChange = event => {
    this.setState({
      content: event.target.value
    })
  }

  handleChars = () => {
    return (this.props.maxChars - this.state.content.length)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message"
          onChange={this.handleContentChange}
          value={this.state.content}
        />
        <p>{this.handleChars()}characters left...</p>
      </div>
    );
  }
}

export default TwitterMessage;
