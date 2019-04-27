import React, { Component } from 'react';
import { HashRouter, Route, } from 'react-router-dom';
import firebase from './firebase';

// ---- Contexts
import AuthContext from './contexts/auth';

class App extends Component {

  state = {
    user: null
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
      else {
        this.setState({ user: null })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <HashRouter>
        <AuthContext.Provider value={this.state.user}>
          <h1>lol</h1>
          </AuthContext.Provider>
      </HashRouter>
    );
  }
}

export default App;