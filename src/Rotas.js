
import React, { Component} from 'react';
import { Router , Scene } from 'react-native-router-flux';
import Formcadastro from './components/FormCadastro';
import Form from './components/Form';

export default class Rotas extends Component {
    render(){
    return(
<Router>
<Scene key='form' component={Form} title="login"/>
<Scene key='formcadastro' component={Formcadastro} title="cadastro"/> 
</Router>

);

}
}