import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let formData = { username: this.state.username, password: this.state.password}
    this.setState(formData)
    console.log(this.state)
     if (this.state.username !== "" && this.state.password !== "") {
      console.log(this.state)
      this.props.handleLogin(formData)
    }
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" 
              name="username" 
              type="text" 
              value={this.state.username}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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


  // validate = (event) => {
  //   event.preventDefault()
  //   console.log(event.target.querySelector("input#username").value)
  //   if (event.target.querySelector("input#username").value !== "" && event.target.querySelector("input#password").value !== "") {
  //     this.handleSubmit(event)
  //   }
  // }




  // handleNameChange = (event) => {
  //   this.setState({
  //     username: event.target.value
  //   })
  // }

  // handlePasswordChange = (event) => {
  //   this.setState({
  //     password: event.target.value
  //   })
  // }