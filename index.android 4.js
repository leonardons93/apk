import firebase from 'firebase';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Rotas from './src/Rotas';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers/reducers';



export default class apkclone extends Component {
  
  
  componentWillMount(){
    firebase.initializeApp( {
      apiKey: "AIzaSyCfvQmP9NCCp7sx2i55YAEeikqRIrfTri8",
      authDomain: "apkclone-cc230.firebaseapp.com",
      databaseURL: "https://apkclone-cc230.firebaseio.com",
      projectId: "apkclone-cc230",
      storageBucket: "apkclone-cc230.appspot.com",
      messagingSenderId: "650503708867"
    });
    
  }
 
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Rotas />
        </Provider>
         
   
    );
  }
}



AppRegistry.registerComponent('apkclone', () => apkclone);
