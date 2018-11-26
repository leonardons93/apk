import firebase from 'firebase';
import b64 from 'base-64';
import _ from 'lodash';



export const modificaAdicionaContatoEmail = texto => {
    return {
        type: 'modifica_adiciona_contato_email',
        payload: texto
    }
}

export const adicionaContato = email => {
    console.log(email);
    return dispatch => {
        let emailB64 = b64.encode(email);
    
        firebase.database().ref(`/contato/${emailB64}`)
            .once("value")
            .then(snapshot => {
                if(snapshot.val()) {
                    //email do contato que queremos adicionar
                    const dadosUsuario= _.first(_.values(snapshot.val())); //converte o arquivo em array com o first ele retorna o primeiro objeto do array
                    
                    //email do usuário autenticado
                    const { currentUser } = firebase.auth();
                    let emailUsuarioB64 = b64.encode(currentUser.email);

                    firebase.database().ref(`/usuario_contato/${emailUsuarioB64}`)
                        .push({ email, nome: dadosUsuario.nome })
                        .then(() => adicionaContatoSucesso(dispatch))
                        .catch(erro => AdicionaContatoErro(erro.message,dispatch))

                } else {
                    dispatch(
                        { 
                            type: 'adiciona_contato_erro', 
                            payload: 'E-mail informado não corresponde a um usuário válido!'
                        }
                    )
                }
            })
    }
}
const AdicionaContatoErro = (erro, dispatch) =>(
    dispatch(
        {
            type: 'adiciona_contato_erro', 
             payload: alert(erro)

        }
    )
)
const adicionaContatoSucesso = dispatch => (
    dispatch(
        {
            type:'adiciona_contato_sucesso',
            payload:true
        }
    )
)
export const habilitaAdd = () => (
    {
        type:'adiciona_contato_sucesso',
        payload:false
    }
)
export const habilitasair = () => (
    {
        type:'habilita_sair',
        payload:false
    }
)
export const contatosUsuarioLista = () =>{

    const { currentUser } = firebase.auth();

    return(dispatch) => {

        let emailUsuarioB64 = b64.encode(currentUser.email); 

        firebase.database().ref(`/usuario_contato/${emailUsuarioB64}`)
        .on("value",snapshot => {
            dispatch({type:'lista_contato_usuario',payload: snapshot.val()})
        })
    };
} ;
export const modificaMensagem = texto => {
    return({

      type:'modifica_mensagem',
      payload:texto
    })
}
export const enviarMensagem = (mensagem,contatoNome, contatoEmail) =>{
   const { currentUser } = firebase.auth();
    const usuárioEmail = currentUser.email;

   return  dispatch => {

  let usuarioEmailB64 = b64.encode(usuárioEmail); 
   let contatoEmailB64 = b64.encode(contatoEmail);
   
    firebase.database().ref(`/mensagem/${usuarioEmailB64}/${contatoEmailB64}`)
    .push({mensagem:mensagem,tipo: 'e'})
    .then(()=>{
        firebase.database().ref(`/mensagem/${contatoEmailB64}/${usuarioEmailB64}`)
        .push({mensagem:mensagem,tipo: 'r'})
        .then(()=> dispatch ({type:'modifica_mensagem1'}))

    })
    .then(()=>{
        firebase.database().ref(`/titulo_mensagem/${usuarioEmailB64}/${contatoEmailB64}`)
        .set({nome:contatoNome , email:contatoEmail})
    })
    .then(()=>{

           firebase.database().ref(`/contato/${usuarioEmailB64}`)
           .once("value")
           .then(snapshot =>{

            const dadosUsuarioN = _.first(_.values(snapshot.val()))


         firebase.database().ref(`/titulo_mensagem/${contatoEmailB64}/${usuarioEmailB64}`)
        .set({nome: dadosUsuarioN.nome , email:contatoEmail})
           })


    
    })


   
}
}
export const conversaUsuarioL = contatoEmail => {
    return dispatch => {
         const { currentUser } = firebase.auth();
        let usuarioEmailB64 = b64.encode(currentUser.email)
        let contatoEmailB64 = b64.encode(contatoEmail) 
        firebase.database().ref(`/mensagem/${usuarioEmailB64}/${contatoEmailB64}`)
        .on("value", snapshot =>{
            dispatch({type: 'lista_conversa_usuario', payload:snapshot.val()})
        })
    }
}
export const conversasUsuarioFetch = () => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        let usuarioEmailB64 = b64.encode(currentUser.email);

        firebase.database().ref(`/titulo_mensagem/${usuarioEmailB64}`)
            .on("value", snapshot => {
                dispatch({ type: 'lista_conversas_usuario', payload: snapshot.val() })
            })
    }
}