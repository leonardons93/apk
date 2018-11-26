import React, { Component } from 'react';
import { ListView,View, Text,TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux'
import { contatosUsuarioLista } from '../actions/AppActions';

class contatos1 extends Component {
    CriarBd(contatos){
        

     const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2}) 
     this.fonteDeDados = ds.cloneWithRows(contatos) 
    }

    componentWillMount() {
        this.props.contatosUsuarioLista();
        this.CriarBd(this.props.contatos)
    }
    componentWillReceiveProps(nextProps){
        this.CriarBd(nextProps.contatos)

    }

    render() {
        return (
            <ListView 
            enableEmptySections
            dataSource={this.fonteDeDados}
            renderRow={data => 
                {
                    return(
                        <TouchableHighlight 
                        onPress={()=>Actions.Batepapo({ title:data.nome, contatoNome:data.nome,contatoEmail:data.email})}

                        > 
                    <View style={{ flex:1,padding:20,borderBottomWidth:1,borderColor:"#CCC"}}>
                    <Text style={{ fontSize:20}}>{data.nome}</Text>
                    <Text style={{ fontSize:15}}>{data.email}</Text>
                    </View>
                    </TouchableHighlight> 
                )
                }
            }
            />
        )
    }
}

mapStateToProps = state => {
    const contatos23 = _.map(state.ListaContatoReducer,(val,uid) =>{
        return{...val,uid}
    } )
    return{contatos:contatos23}

}
export default connect(mapStateToProps, { contatosUsuarioLista })(contatos1);
