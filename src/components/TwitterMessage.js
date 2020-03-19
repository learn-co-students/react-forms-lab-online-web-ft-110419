import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { maxChars: props.maxChars, submittedData: {message: "", charsRemaining: ""}};
  }

  handleChange = event => {
    this.setState({
      message: event.target.value,
      charsRemaining: this.state.maxChars - event.target.value.length
    })
    console.log("handle change")
    console.log(this.state)
  }

  handleSubmit = (event) => {
    console.log("handle submit")
    console.log(this.state)
    event.preventDefault()
    console.log(event)
    let formData = { message: this.state.message, charsRemaining: this.state.charsRemaining }
    this.setState({ submittedData: formData })
  }

  printCounter = () => {

    console.log("print counter")
    console.log(this.state)
  return <div>MaxChars: {this.state.maxChars}, Counter: {this.state.charsRemaining}</div>
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" 
            name="message" 
            id="message" 
            value={this.state.message}
            onChange={event => this.handleChange(event)}
          />
          <input type="hidden" 
            name="charsRemaining" 
            id="maxChars" 
            value={this.state.charsRemaining}
          />
          <input type="submit"></input>
        </form>
        {this.printCounter()}
      </div>
    );
  }
}

export default TwitterMessage;

// 1) <TwitterMessage /> Saving input value in state should update the state when typing:
// Error: Method “simulate” is meant to be run on 1 node. 3 found instead.
//  at ShallowWrapper.single (node_modules/enzyme/src/ShallowWrapper.js:1636:13)
//  at ShallowWrapper.simulate (node_modules/enzyme/src/ShallowWrapper.js:1118:17)
//  at Context.<anonymous> (test/1-TwitterMessage-test.js:15:29)
//  at processImmediate (internal/timers.js:456:21)
