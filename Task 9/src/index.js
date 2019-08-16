// This is importing the components needed to make the app work.
// React, ReactDom, Bootstrap, React-Router-Dom and some components from the components folder are being imported.
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch  } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Games from './Components/Game';
import CC from './Components/Currency';

// This is the routing function. It will change what is displayed on the page when the user clicks a button.
const routing = (
    <Router>
    <div>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Game" component={Games} />
      <Route path="/Currency" component={CC} />
    </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
