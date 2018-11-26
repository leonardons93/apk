import React ,{Component }from 'react';
import { View, Text,ListView } from 'react-native';
import { connect } from 'react-redux';
import {contatosUsuarioLista } from '../actions/AppActions';
import _ from 'lodash';
class Contatos extends Component{
    criaBd(contatos){
       
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1!==r2})

        this.fonteDeDados = ds.cloneWinthRows(contatos )
    }
    componentWillMount() {
        this.props.contatosUsuarioLista();
        this.criaBd(this.props.contatos)
    }
    componentWillReceiveProps(nextProps){
        this.criaBd(nextProps.contatos)
    }
render(){
return(
    <ListView
    enableEmptySections
    dataSource={this.fonteDeDados} //aonde vao receber os datos
    renderRow={data => <View><Text>{data}</Text></View>}//como lista os arquivos
    />
      
);
} 
}
mapStateToProps = state => {
    const contatos = _.map(state.AppReducer,(val,uid)=>{
        return{...val,uid}
    })
 return{

 }
}

export default connect(mapStateToProps,{contatosUsuarioLista })(Contatos);