let alunas =[
    {
        nome: 'Ingrid',
        idade: 26,
        materia_preferida: 'Phyton',
    },
    {
        nome: 'Gabriela',
        idade: 26,
        materia_preferida: 'Processo penal',
    },
    {
        nome: 'Isabela',
        idade: 26,
        materia_preferida: 'Cross Fit',
    },
    {
        nome: 'Raissa',
        idade: 28,
        materia_preferida: 'Artes',
    },
    {
        nome: 'Nina',
        idade: 29,
        materia_preferida: 'Dança',
    },
    {
        nome: 'Rafaela',
        idade: 22,
        materia_preferida: 'Fotografia',
    },
];

let mapIdade = alunas.map((item) => {
    return item.idade
});

let filtroIdade = alunas.filter((item) => {
    return item.idade > 24;
})


console.log(mapIdade);
console.log(filtroIdade);
