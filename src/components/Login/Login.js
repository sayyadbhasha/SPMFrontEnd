/**
 * @file login Demotion Component.
 * @author Mahesh
 */
import React from 'react';
import { connect } from 'react-redux';
import './Login.scss';
import { userLogin } from '../../actions/LoginAction';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.classElement = this.classElement.bind(this);
    this.userLogin = this.userLogin.bind(this);
    this.hradminLogin = this.hradminLogin.bind(this);
    this.sendCredentials = this.sendCredentials.bind(this);
  }
  userLogin(elementID) {
    const x = document.getElementById(elementID);
    document.getElementById('tab-hr-admin').classList.remove('active');
    document.getElementById('userLoginTab').classList.add('active');
    document.getElementById('hrAdminTab').classList.remove('active');
    if (x.classList.contains('active')) {
      x.classList.remove('active');
    } else {
      x.classList.add('active');
    }
  }
  hradminLogin(elementID) {
    const x = document.getElementById(elementID);
    document.getElementById('tab-user').classList.remove('active');
    document.getElementById('userLoginTab').classList.remove('active');
    document.getElementById('hrAdminTab').classList.add('active');
    if (x.classList.contains('active')) {
      x.classList.remove('active');
    } else {
      x.classList.add('active');
    }
  }
  classElement(elementID) {
    const x = document.getElementById(elementID);
    if (x.classList.contains('active')) {
      x.classList.remove('active');
    } else {
      x.classList.add('active');
    }

    // x.classList.className += ' active';
  }
  sendCredentials() {
    // if (!this.mail.value || !this.password.value) {
    //   alert('Kindly enter both UserName and Password');
    // } else {
    const creds = { username: 'maheshn10@gmail.com', password: 'Test123$' };
    this.props.dispatch(userLogin(creds));
    this.mail.value = '';
    this.password.value = '';
    // }
  }
  render() {
    return (
      <div className="page-intro">
        <div className="intro-logo" />
        <div className="intro">
          <div className="intro-col intro-col--title">

            <h1 className="intro-col-title">
              Human<br />
              resources<br />
              solution
            </h1>

          </div>
          <div className="intro-col intro-col--form">

            <div className="log-in">

              <div className="log-in-container">

                <form action="" className="log-in-form">

                  <ul className="log-in-tabs js-log-in-tabs">
                    <li
                      className="active"
                      data-tab="tab-user"
                      id="userLoginTab"
                      onClick={() => this.userLogin('tab-user')}
                    >
                      <span>User</span>
                    </li>
                    <li
                      data-tab="tab-hr-admin"
                      id="hrAdminTab"
                      onClick={() => this.hradminLogin('tab-hr-admin')}
                    >
                      <span>HR Admin</span>
                    </li>
                  </ul>
                  <div className="log-in-tab active" id="tab-user">

                    <div className="log-in-avatar log-in-avatar--user" />
                    <div className="log-in-form-field">
                      <label htmlFor="user-email" className="log-in-label">
                        E-mail
                      </label>
                      <input
                        type="text"
                        id="user-email"
                        className="log-in-input"
                        placeholder="name@mail.com"
                      />
                    </div>

                    <div className="log-in-form-field">
                      <label htmlFor="user-password" className="log-in-label">
                        Password:
                      </label>
                      <input
                        type="password"
                        id="user-password"
                        className="log-in-input"
                      />
                    </div>

                    <div className="log-in-register">
                      Dont have an account? <a href="">sign up</a>
                    </div>

                    <input
                      type="submit"
                      value="Log in"
                      className="log-in-submit" onClick={() => this.sendCredentials()}
                    />

                  </div>
                  <div className="log-in-tab" id="tab-hr-admin">

                    <div className="log-in-avatar log-in-avatar--hr-admin" />
                    <div className="log-in-form-field">
                      <label htmlFor="user-email" className="log-in-label">
                        E-mail
                      </label>
                      <input
                        type="text"
                        id="user-email"
                        className="log-in-input"
                        placeholder="name@mail.com"
                        ref={(input) => { this.mail = input; }}
                      />
                    </div>

                    <div className="log-in-form-field">
                      <label htmlFor="user-password" className="log-in-label">
                        Password:
                      </label>
                      <input
                        type="password"
                        id="user-password"
                        className="log-in-input"
                        ref={(input) => { this.password = input; }}
                      />
                    </div>

                    <div className="log-in-register">
                      Dont have an account? <a href="">sign up</a>
                    </div>

                    <input
                      type="submit"
                      value="Log in to HR panel"
                      className="log-in-submit" onClick={() => this.sendCredentials()}
                    />

                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { About: state.about, TC: state.TC };
}

export default connect(mapStateToProps)(Login);
