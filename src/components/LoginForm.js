import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { handleLogin: this.props.handleLogin };
  }

  handleClick = (event) => {
    event.preventDefault()
    console.log("click")
    console.log(this.state)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={event => this.handleClick(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" />
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
