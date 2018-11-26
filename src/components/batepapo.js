import React from 'react';
import {View, Text,TouchableHighlight,Image,TextInput,ListView} from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';
import {modificaMensagem,enviarMensagem,conversaUsuarioL,limpaConversa} from '../actions/AppActions';
 class Batepapo extends React.Component {

 	CriarBd(conversa){
        

     const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2}) 
     this.bancoDados = ds.cloneWithRows(conversa) ;
    }

     componentWillMount(){
     	this.props.conversaUsuarioL(this.props.contatoEmail);
     	this.CriarBd(this.props.conversa);
     }
     componentWillReceiveProps(nextProps){
     	if (this.props.contatoEmail != nextProps.contatoEmail) {
     		this.props.conversaUsuarioL(nextProps.contatoEmail)

}
        this.CriarBd(nextProps.conversa);

    }
   

 	_enviaMensagem(){
 		const { mensagem , contatoNome, contatoEmail } = this.props;

 		this.props.enviarMensagem(mensagem,contatoNome, contatoEmail )
 	}
 	renderRow(texto){
 		if (texto.tipo==='e') {
               	return(
               		<View style={{alignItems:'flex-end',marginTop:5,marginBottom:5,marginLeft:40}}>
               		<Text style={{fontSize:18, color:'black',padding:10,backgroundColor:'#dbf5b4'}}>{texto.mensagem}</Text>
               		</View>

               		)
               		}
               		if(texto.tipo==='r')

               		{
               			return(
               		<View style={{alignItems:'flex-start',marginTop:5,marginBottom:5,marginRight:40}}>
               		<Text style={{fontSize:18, color:'black',padding:10,backgroundColor:'#f7f7f7'}}>{texto.mensagem}</Text>
               		</View>

               		)}
               	}
	render(){
		return(
             <View style={{flex:1,marginTop: 50, backgroundColor:'#eee4dc', padding:10}}>
               <View style={{flex:1, paddingBottom:20}}>
               <ListView
               dataSource={this.bancoDados}
               renderRow={this.renderRow}

               />

               </View>
               <View style={{ flexDirection:'row', height:60}}>
               <TextInput
                
                value={this.props.mensagem}
                onChangeText={texto => this.props.modificaMensagem(texto)}
                style={{flex:4, backgroundColor:'#fff', fontSize:18}}
               />
               <TouchableHighlight onPress={this._enviaMensagem.bind(this)} underlayColor="#fff">
               <Image source={require('../imgs/enviar_mensagem.png')} />
               </TouchableHighlight>
               </View>
             </View>

			)
	}
}
mapStateToProps = state =>{
	const conversa = _.map(state.ListaConversaReducer,(val,uid)=>{
		return{...val,uid};
	})
	return({
		conversa:conversa,
		mensagem:state.AppReducer.mensagem
	})
}
export default connect(mapStateToProps,{modificaMensagem,enviarMensagem,conversaUsuarioL,limpaConversa})(Batepapo)
