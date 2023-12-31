import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CampusContainer from './user-panel/campus-container';
import SidebarComponent from './sidebar/sidebar-container';
import Navbar from './sidebar/navbar';
import Dashboard from './pages/dashboard';
import Courses from './pages/courses';
import Profile from './pages/profile';
import loggedOut from './pages/logged-out';
/* import { Router } from 'express'; */


export default class App extends Component {
  getFetchCourses() {
    this.setState({
        loading: true
    }, () => {
        fetch("http://localhost:3000/courses").then(res => res.json()).then(result => this.setState({
            loading: false,
            courses: result
        })).catch(console.log);
    });
}


  render() {
    return (
      <div className='flex-container'>
        <div>
          <Router>
          <Navbar/>
            <div className='sidebar-items'>
              <SidebarComponent/>
              <Route path='/' exact={true} component={Dashboard}/>
              <Route path='/courses' exact={true} component={Courses}/>
              <Route path='/profile' exact={true} component={Profile}/>
              <Route path='/logged-out' exact={true} component={loggedOut}/>
            </div>            
          </Router>
        </div>
      </div>
    );
  
  }
}
