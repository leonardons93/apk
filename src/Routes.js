import React from 'react';
import { Router, Scene } from 'react-native-router-flux';


import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import logo from './components/logo';
import Principal from './components/Principal'; 
import adicionarcontato from './components/adicionarcontato'; 
import Batepapo from './components/batepapo'; 
export default props => (
    <Router navigationBarStyle={{ backgroundColor: '#115E54' }} titleStyle={{color:'#fff'}}>
        <Scene key='formLogin' component={FormLogin} title="Login" hideNavBar={true} />
        <Scene key='Principal' component={Principal} title="Principal"hideNavBar={true} />
        <Scene key='adicionarcontato' component={adicionarcontato} title="adicionarcontato" hideNavBar={false} />
        <Scene key='logo' component={logo} title="Boas Vindas" hideNavBar={true} />
        <Scene key='formCadastro' component={FormCadastro} title="Cadastro" hideNavBar={false}/>
        <Scene key='Batepapo' component={Batepapo} title="Batepapo" hideNavBar={false}/>
    </Router>
);

