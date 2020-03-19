import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    // handleLogin: this.props.handleLogin()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let formData = { username: this.state.username, password: this.state.password}
    this.setState(formData)
    this.props.handleLogin(formData)
    console.log(formData)
    console.log(this.state)
  }

  handleNameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  validate = (event) => {
    event.preventDefault()
    console.log(event.target.querySelector("input#username").value)
    if (event.target.querySelector("input#username").value !== "" && event.target.querySelector("input#password").value !== "") {
      this.handleSubmit(event)
    }
  }

  render() {
    return (
      <form onSubmit={event => this.validate(event)}>
        <div>
          <label>
            Username
            <input id="username" 
              name="username" 
              type="text" 
              value={this.state.username}
              onChange={event => this.handleNameChange(event)}
              />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" 
              name="password" 
              type="password"             
              value={this.state.password}
              onChange={event => this.handlePasswordChange(event)}
              />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
