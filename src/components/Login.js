import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "../App.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleLoginSubmit = () => {
    console.log(this.state);
    fetch(`http://localhost:3001/users`, {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(r => r.json())
      .then(console.log);
  };

  render() {
    return (
      <div className="login-form">
        <form onSubmit={e => this.handleLoginSubmit(e)}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Enter username"
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
