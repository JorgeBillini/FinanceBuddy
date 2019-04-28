import React, { Component } from 'react';
// import '../login/login.css';
import firebase from '../firebase';
import AuthContext from '../contexts/auth';
import { Redirect } from 'react-router-dom';






class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      error: ''
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(e.target.value);
  }


  handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then((response) => {
        // console.log('Returns: ', response);
      })
      .catch(err => {
        const { message } = err;
        this.setState({ error: message });
      })
  }


  render() {
    return (
      <AuthContext.Consumer>
        {
          (user) => {
            if (user) {
              return (
                <Redirect to='/' />
              )
            } else {
              return (
                <>
                  <div className='mx-auto d-block' style={{ 'maxWidth': '350px' }}>

                    <div className="card-body text-dark">
                      <div className='title text-center'>
                        <h2>LOGIN PAGE</h2>
                      </div>
                      <br />
                      <br />
                      <div>
                        <label className="sr-only">Email</label>
                        <input type="email" className="form-control" id="inputEmail2" placeholder="Email..." name='username' onChange={this.handleChange} value={this.state.username}></input>
                      </div>
                      <br />
                      <div>
                        <label className="sr-only">Password</label>
                        <input type="password" className="form-control" id="inputPassword2" placeholder="Password..." name='password' onChange={this.handleChange} value={this.state.password}></input>
                      </div>
                      <br />
                      <br />
                      <div className='buttons text-center mb-5'>
                        <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>LOGIN</button>
                      </div>
                    </div>
                  </div>

                </>
              )
            }
          }
        }
      </AuthContext.Consumer>


    )

  }
}
export default Login;