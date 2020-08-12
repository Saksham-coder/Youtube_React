import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Signup from "./Components/Signup"
import Header from "./Components/Header"
import Login from "./Components/Login"
import Sidebar from './Components/Sidebar'
import Video from './Components/Video'
import Displayvideo from './Components/Displayvideo'

import './App.css';
import store from './store';

function App() {
  // useEffect(() => {
  //   setAuthToken(localStorage.token);
  //   store.dispatch(loadUser());
  // }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path='/video/:id' component={Displayvideo} />
            <div>
              <div className='app_page'>
                <Sidebar />
                <Route exact path='/' component={Video} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
              </div>
            </div>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
