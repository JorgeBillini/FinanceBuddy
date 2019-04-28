import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import firebase from './firebase';
import axios from 'axios';

// ---- Pages
import Header from './components/navbar';
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
    user: {user:null,user_id:null},
  }
  componentDidUpdate = async() => {
    if (this.state.user.user_id === null && this.state.user.user){
      const url = `http://localhost:11235/user/email/${this.state.user.user.email}`;
        const {data} =  await axios.get(url);
        console.log(data);
        const obj = {};
        obj.user = this.state.user.user;
        obj.user_id = data.data.id;
        this.setState({user:obj},()=>{
          console.log(this.state);
        });
    }
  }
  componentDidMount = async() =>  {
    this.unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const obj = {};
        obj.user = user;
        obj.user_id = null;
        
        this.setState({user:obj });
      }
      else {
        this.setState({ user:{user:null,user_id:false} })
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
          <Route path='/' component={ Header } /> 
          <div className='container mt-5'>
            <Switch>
              <Route  path='/' exact component={Home}></Route>
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