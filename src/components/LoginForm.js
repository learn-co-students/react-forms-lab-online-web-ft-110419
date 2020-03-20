import React from "react";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  changeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.username.length > 0 && this.state.password.length > 0) {
     this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" value={this.state.username} onChange={this.changeInput} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.changeInput}/>
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
