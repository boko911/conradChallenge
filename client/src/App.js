import React, { Component } from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import reducers from './reducers/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './component/layout/Landing/Landing.component'
import Bookmark from './component/bookmark/Bookmark/Bookmark.component';

let store = createStore(reducers, applyMiddleware(thunk))

class App extends Component {
  render(){
    return(
      <Provider store ={store}>
        <Router>
            <Route exact path="/" component={Landing}></Route>
            <Route exact path="/bookmarks" component={Bookmark}></Route>
        </Router>
      </Provider>
    )
  }
}

export default App;