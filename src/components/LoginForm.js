import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleLogin = event => {
    event.preventDefault()
    
    for (const key in this.state) {
      if(this.state[key] === '')
        return console.log('Form cannot be blank')
    }
    
    this.props.handleLogin(this.state)
  }

  handleForm = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.props.username}
              onChange={this.handleForm}
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
              value={this.props.password}
              onChange={this.handleForm}
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
