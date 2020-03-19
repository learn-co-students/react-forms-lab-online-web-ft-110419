import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { handleLogin: this.props.handleLogin };
  }

  handleSubmit= (event) => {
    event.preventDefault()
    // console.log("click")
    // console.log(this.state)
    let formData = { username: this.state.username, password: this.state.password}
    this.setState(formData)
  }

  handleChange = (event) => {
    // console.log(event.target)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            {/* add onChange listener for inputs */}
            <input id="username" name="username" type="text" onChange={event => this.handleChange(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.handleChange(event)}/>
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
