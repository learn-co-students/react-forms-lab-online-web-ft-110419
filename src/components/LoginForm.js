import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = { username: "", password: "" };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const empty = Object.values(this.state).find(v => v.length === 0) === "";
    if (!empty) this.props.handleLogin(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              onChange={this.handleChange}
              value={this.state.username}
            />
          </label>
        </div>

        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
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
