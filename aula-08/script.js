const titulo = document.getElementById("titulo");
const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem")
const botao2 = document.getElementById("botao2")
const modoEscuro = document.getElementById("modo")

botao.addEventListener("click", () => {
    titulo.textContent = "Você clicou no botão!";
    titulo.style.color = "red";
    titulo.style.fontSize = "45px";
});


botao2.addEventListener("click", () => {
    mensagem.textContent = "Operação realizada com sucesso!";
    mensagem.style.color = "green"
})

modoEscuro.addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white"
})