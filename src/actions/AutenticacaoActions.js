import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import b64 from 'base-64';
export const modificaEmail = (texto) => {
    return {
        type: 'modifica_email',
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    return {
        type: 'modifica_senha',
        payload: texto
    } 
}

export const modificaNome = (texto) => {
    return {
        type: 'modifica_nome',
        payload: texto
    }
} 
export const autenticaUser =({email, senha}) =>{
    return dispatch => {
        dispatch({type:'login_andamento'});
    firebase.auth().signInWithEmailAndPassword(email,senha)
    .then(value => loginSucesso(dispatch))
    .catch(erro => loginErro(erro,dispatch));
    }
}
const loginSucesso = (dispatch) => {
    dispatch({
        type:'login_sucesso'
    }
    )
    Actions.Principal();

}
const loginErro = (erro,dispatch) => {
    var b
    if(erro.code ==='auth/invalid-email')
    {
      b = 'O email fornecido não e Valido';
    }
    if(erro.code ==='auth/wrong-password')
    {
      b ='Senha ou Email Errada  ';
    }
    if(erro.code ==='auth/user-not-found')
    {
       b='Email Não Cadastrado';
    }
   

    dispatch({
        type:'login_erro',
        payload:alert(b)
    }
    )
}
export const cadastraUsuario =({nome, email, senha})=>{
    return dispatch => {
        dispatch({type:'login_andamento'});
    firebase.auth().createUserWithEmailAndPassword(email,senha)
    .then(user => {
        let emailB64 = b64.encode(email);
        firebase.database().ref(`/contato/${emailB64}`)
        .push({nome})
         .then(value => cadastraUsuarioS(dispatch))

                
    }) 
        .catch(erro => cadastraUsuarioFalha(erro,dispatch));
    
    }
}
const cadastraUsuarioS = (dispatch) => {
    dispatch({
        type:'sucesso'
    });
    Actions.logo();
}
const cadastraUsuarioFalha = (erro,dispatch) =>{
    var a ;
    if(erro.code ==='auth/email-already-in-use')
    {
      a = 'já existir uma conta com o endereço de email fornecido';
    }
    if(erro.code ==='auth/invalid-email')
    {
      a ='endereço de e-mail não for válido.';
    }
    if(erro.code ==='auth/operation-not-allowed')
    {
       a='as contas de email / senha não estiverem ativadas. Ative as contas de e-mail / senha no ';
    }
    if(erro.code=='auth/weak-password')
    {
      a='a senha não for forte o suficiente';
    }
    dispatch ({
    
        type:'cadastro_usuario_erro',
        playload: alert(a)
    }); 
   
}
export const habilitaload = () => (
    {
        type:'habilitar'
        
    }
)