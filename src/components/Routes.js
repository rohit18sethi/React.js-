import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import User from '../pages/User';
import Prompt from 'react-router';

export default class Routes extends Component{
  constructor(){
    super();
    this.state = {
      username : "default"
    }
  }
  render(){
    return (
      <Router>
            <div>
               <h2>Welcome to React Router Tutorial</h2>
               <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/login'>Login</Link></li>
                  <li><Link to = '/user/rohit'>User </Link></li>
                  </ul>
               <hr />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/user/:username' component={User} />
                </Switch>
            </div>
         </Router>
    );
  }
}
