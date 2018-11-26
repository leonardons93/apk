import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {

    componentWillMount() {

          // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCfvQmP9NCCp7sx2i55YAEeikqRIrfTri8",
    authDomain: "apkclone-cc230.firebaseapp.com",
    databaseURL: "https://apkclone-cc230.firebaseio.com",
    projectId: "apkclone-cc230",
    storageBucket: "apkclone-cc230.appspot.com",
    messagingSenderId: "650503708867"
  };
  firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
