import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
    };
  }
  
  handleFirstName = event => {
    this.setState ({
      firstName : event.target.value
    })
  }

  render() {
    
    let charNum = this.props.maxChars - this.state.firstName.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleFirstName(event)} value={this.state.firstName} name="message" id="message" />
        {charNum}
      </div>
    );
  }
}

export default TwitterMessage;
