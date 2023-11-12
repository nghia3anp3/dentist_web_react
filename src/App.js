import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink, Redirect } from "react-router-dom"; 
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import Home from "./pages/Home";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
  }

  handleLogin = () => {
    this.setState({ isAuthenticated: true });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="appAside">
            <div className="Welcome">
              Welcome to Dentist Center
            </div>
          </div>
          <div className="appForm">
            {this.state.isAuthenticated ? (
              <Redirect to="/Home" />
            ) : (
              <div>
                <div className="pageSwitcher">
                  <NavLink
                    to="/sign-in"
                    activeClassName="pageSwitcherItem-active"
                    className="pageSwitcherItem"
                  >
                    Sign In
                  </NavLink>
                  <NavLink
                    exact
                    to="/"
                    activeClassName="pageSwitcherItem-active"
                    className="pageSwitcherItem"
                  >
                    Sign Up
                  </NavLink>
                </div>

                <div className="formTitle">
                  <NavLink
                    to="/sign-in"
                    activeClassName="formTitleLink-active"
                    className="formTitleLink"
                  >
                    Sign In
                  </NavLink>{" "}
                  or{" "}
                  <NavLink
                    exact
                    to="/"
                    activeClassName="formTitleLink-active"
                    className="formTitleLink"
                  >
                    Sign Up
                  </NavLink>
                </div>

                <Route exact path="/" component={SignUpForm} />
                <Route
                  path="/sign-in"
                  render={() => (
                    <SignInForm onLogin={this.handleLogin} />
                  )}
                />
                <Route path="/Home" component={Home} />
              </div>
            )}
          </div>
        </div>
      </Router>
    );
  }
} 

export default App;