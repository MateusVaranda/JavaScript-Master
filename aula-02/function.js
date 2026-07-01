// funções e um bloco de codigo que realiza uma tarefa específica quando e chamada.

function treinar () {
    console.log("Aquecimento")
    console.log("Treino")
    console.log("Alongamento")
}

function apresentar (nome, idade) {
    console.log(`Meu nome é ${nome}, e tenho ${idade} anos.`)
}



function somar(a, b) {
    console.log(a + b);
}


const anoAtual = new Date().getFullYear();

function calcularIdade (nome, anoNascimento) {
    const idade = anoAtual - anoNascimento;
    console.log(`${nome} tem ${idade} anos, nasceu no ano de ${anoNascimento}`);
}

calcularIdade("mateus", 2001)