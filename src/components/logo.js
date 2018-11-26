import React,{Component} from 'react';
import {View,Text,Button, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { habilitaload } from '../actions/AutenticacaoActions';
import { connect } from 'react-redux';
const logo = props => (
    <Image style={{ flex: 1, width: null }} source={require('../imgs/bg.png')}>
    <View style={{flex:1, padding:15}}>
    <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:20,color:'white'}}>Seja Bem-Vindo!  </Text>
    <Image source={require('../imgs/logo.png')}/>
    </View>
    <View style={{flex:1, padding:15}}>
    <Button title="fazer login" onPress={() => {Actions.formLogin( ); props.habilitaload()}}/>
    </View>
    </View>
    </Image>
)
export default connect(null, {habilitaload })(logo);