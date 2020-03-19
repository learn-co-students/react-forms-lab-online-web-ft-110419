import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { maxChars: this.props.maxChars, message: "" };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value,
    })
  }

  printCounter = () => {
    let charRemaining = this.state.maxChars - this.state.message.length
    return <div>Counter: {charRemaining} characters remaining</div>
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
          <input type="text" 
            name="message" 
            id="message" 
            value={this.state.message}
            onChange={event => this.handleChange(event)}
          />
        {this.printCounter()}
      </div>
    );
  }
}

export default TwitterMessage;
