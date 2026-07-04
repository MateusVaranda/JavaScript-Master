const usuarios = [
    { nome: "Mateus", idade: 25 },
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 22 },
    { nome: "Carlos", idade: 40 }
];


const usuario = usuarios.find((usuario) => {
    return usuario.nome === "Maria";
});

console.log(usuario)