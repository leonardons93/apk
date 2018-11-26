const INITIAL_STATE = {
    nome: '',
    senha : '',
    email : '',


}
export default (state = INITIAL_STATE, action ) => {
    if(action.type == 'modifica_email'){
         return{ ...state, email: action.payload}
    }
    if(action.type == 'modifica_Senha'){
        return{ ...state, senha: action.payload}
   }
   if(action.type == 'modifica_Nome'){
    return{ ...state, nome: action.payload}
}
return state;
}