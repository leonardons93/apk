const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroLogin:'',
    loading: false ,
}

export default (state = INITIAL_STATE, action) => {

    if(action.type == 'modifica_email'){
        return { ...state, email: action.payload }
    }
    if(action.type == 'modifica_senha') {
        return { ...state, senha: action.payload }
    }
    if(action.type == 'modifica_nome') {
        return { ...state, nome: action.payload }
    }
    if(action.type == 'cadastro_usuario_erro') {
        return { ...state, erroCadastro: action.payload,loading:false}
    }
    if(action.type == 'cadastro_usuario_sucesso') {
        return { ...state, nome:'',senha:'',loading:false}
    }
    if(action.type == 'login_erro') {
        return { ...state, erroLogin: action.payload,loading:false}
    }
    if(action.type == 'login_andamento') {
        return { ...state, loading:true}
    }
    if(action.type == 'habilitar') {
        return { ...state, loading:false}
    }
    if(action.type == 'habilita_sair') {
        return { ...state,email:'',senha:'', loading:false}
    }
    return state;
}