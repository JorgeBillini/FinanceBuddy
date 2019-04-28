import React from 'react';
import firebase from '../firebase';
import AuthContext from '../contexts/auth';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

export default class Signup extends React.Component {

  state = {
    email: '',
    password: '',
    error: '',
    first_name:'',
    last_name:'',
    income:'',
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, first_name , last_name, income} = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log('Returns: ', response);
        const {uid,photoUrl} = response.user;
        const url = `http://localhost:11235/user/`
        Axios.post(url,{
            first_name:first_name,
            last_name:last_name,
            email:email,
            firebase_token:uid,
            avatar_url:photoUrl,
            income:income
        })
        .then(response=>console.log(response))
        .catch(e=>console.log(e));
      })
      .catch(err => {
        const { message } = err;
        this.setState({ error: message });
      })
  }

  render() {
    const { email, password, error,first_name, last_name, income} = this.state;
    const displayError = error === '' ? '' : <div className="alert alert-danger" role="alert">{error}</div>
    const displayForm = <>
      <h1>Sign Up</h1>
      {displayError}
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={email} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" placeholder="Password" value={password} name="password" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleName">name</label>
          <input type="text" className="form-control" placeholder="first name" value={first_name} name="first_name" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleName">Last Name</label>
          <input type="text" className="form-control" placeholder="first name" value={last_name} name="last_name" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleName">income</label>
          <input type="text" className="form-control" placeholder="first name" value={income} name="income" onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Sign Up</button>
      </form>
    </>;

    return (
      <AuthContext.Consumer>
        {
          (user) => {
            if (user) {
              return <Redirect to='/' />
            } else {
              return displayForm;
            } 
          }
        }
      </AuthContext.Consumer>
    );
  }
}