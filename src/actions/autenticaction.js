export const modificaEmail = (Texto) => {
    return {
        type: 'modifica_email',
        payload:Texto
    }
}
export const modificaSenha = (Texto) => {
    return {
        type: 'modifica_Senha',
        payload:Texto
    }

}
export const modificaNome = (Texto) => {
    return {
        type: 'modifica_Nome',
        payload:Texto
    }
    
}
export const cadastroFire = ( email, senha) => {
   firebase.auth().createUserWithEmailAndPassword(email,senha)
   .then(user => console.log('oi'))
   .catch(erro => console.log('oi'));
    return {
       
        type: 'modifica_fire',
       
    }
}
const cadastroSucesso = () => {
console.log('ok');
}
const cadastroFalha = () => {
    console.log('falha');   
}