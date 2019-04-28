import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import firebase from './firebase';

// ---- Pages
// import Header from './components/navbar';
import Home from './containers/home'
import Signup from './containers/signup';
import Login from './containers/login';
import Error404 from './components/error404';
import Logout from './containers/logout';
import StatementPage from './containers/statement_page';

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
          {/* <Route path='/' component={ Navbar } /> */}
          <div className='container mt-5'>
            <Switch>
              <Route path='/'  exact component={Home}></Route>
              <Route path='/signup' exact component={ Signup } />
              <Route path='/login' exact component={ Login } />
              <Route path='/logout' exact component={ Logout } />
              <Route path='/statement/:id' exact component={ StatementPage } />
              <Route component={ Error404 } />
            </Switch>
          </div>
          </AuthContext.Provider>
      </HashRouter>
    );
  }
}

export default App;