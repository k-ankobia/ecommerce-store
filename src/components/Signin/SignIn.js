import React, { Component } from "react";
import { FormInput } from "../FormInput/FormInput";
import "./Sginin.styles.scss";
export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  /**
   * FormInput
   * @param {props} props used to dynamically send "shrink" tag to lable for styling
   */

  /**
   * handle change function. replaces native
   * @param  {string} value entered value into form
   * @param  {name} name name of the form param
   * @return {string} setState of the parameters
   */

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  //  resets form field
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="sign-in">
        <h2> already havea an account</h2>
        <span> Sign in with your email address</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            propCustomLabel="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            propCustomLabel="password"
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
