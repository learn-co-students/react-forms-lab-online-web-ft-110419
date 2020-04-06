import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      remaningChars: this.props.maxChars,
      message: ""
      
    };
  }

  handleChange = (event) => {
    let charsLeft = this.state.remaningChars - 1
    this.setState({
      remaningChars: charsLeft,
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.handleChange(event)} />
        <p>Remaning Characters: {this.state.remaningChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
