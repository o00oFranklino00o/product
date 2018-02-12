import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/authActions';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
class Login extends Component {
  componentDidMount() {
    // document.body.scrollTop = 0;
    // document.querySelector('.menu').classList.remove('open');
    //his.props.loginUser('hi');
  }
  render() {
    return (
      <div id="login-container">
        <h3 className="loginHeading text-center">Login with your social account</h3>
        <LoginForm/>
        <div id="btn-container">
          <button className="loginBtn fbBtn">Facebook Login</button>
          <button className="loginBtn googleBtn">Google Login</button>
          <button className="loginBtn twitterBtn">Twitter Login</button>
          <button className="loginBtn twitterBtn" onClick={()=>this.props.login('text') }>Gitub Login</button>
                 <a href='http://localhost:3001/auth/github'>git login</a>
          <Link to="/register">Sign Up</Link>

        </div>
      </div>
    );
  }
}

const mapDispatchToProps = () => {
  return {
    login : login
  }
}

export default connect( null , mapDispatchToProps )(Login)
