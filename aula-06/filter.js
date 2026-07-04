const idades = [12, 18, 25, 16, 30, 15];

const maiores = idades.filter((idade) => {
    return idade > 18;
});

console.log(maiores);