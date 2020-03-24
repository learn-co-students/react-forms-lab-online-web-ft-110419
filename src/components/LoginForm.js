import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }) 
  }

  render() {
    return (
      <form onSubmit={event => this.props.handleLogin(event, this.state)}>
        <div>
          <label>
            Username
            <input onChange={this.handleChange} id="username" name="username" type="text" value={this.state.username} required/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleChange} id="password" name="password" type="password" value={this.state.password} required/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
