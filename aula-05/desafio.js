const email = "mateus@gmail.com";
const senha = 1234;
const contaBloqueada = false;

const emailBanco = "mateus@gmail.com";
const senhabanco = 1234;


if(email === emailBanco && senha === senhabanco && !contaBloqueada === true) {
    console.log("Bem-vindo ao sistema!")
} else {
    console.log("Email, senha ou status da conta inválidos.")
}