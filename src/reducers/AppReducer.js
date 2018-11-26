const INITIAL_STATE = {
    adiciona_contato_email: '',
    cadastro_resultado_txt_erro: '',
    cadastro_resultado_add:false,
    mensagem:''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'modifica_adiciona_contato_email':
            return { ...state, adiciona_contato_email: action.payload }
        case 'adiciona_contato_erro':
            return { ...state, cadastro_resultado_txt_erro: action.payload }
            case 'adiciona_contato_sucesso':
            return { ...state, cadastro_resultado_add:action.payload,adiciona_contato_email: '' }
            case 'modifica_mensagem':
            return { ...state, mensagem:action.payload}
            case 'modifica_mensagem1':
            return { ...state, mensagem:''}
            default:
            return state;
    }
}