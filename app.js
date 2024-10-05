let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag , texto);
    campo.innerHTML = texto
}
function exibirMensagemInicial() {
    exibirTextoNaTela ('h1', 'jogo do número secreto');
    exibirTextoNaTela ('p' , 'escolha um número de 1 a 10');
}

exibirMensagemInicial();

function verificarChute () {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1','parabéns');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobiu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela ('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p','o número secreto é menor');
        } else {
            exibirTextoNaTela ('p','o número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
   return parseInt(Math.random() *10 + 1); 
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';  
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled','true');
}
