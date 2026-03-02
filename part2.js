// Criando o objeto
let produto = {
    nome: 'Camiseta',
    cor: 'Preta',
    preco: 59.90,
    estoque: 50
};

// A. Acessar nome do objeto
console.log(produto.nome);

// B. Acessar preço usando colchetes
console.log(produto['preco']);

// C. Atualizar estoque para 80
produto.estoque = 80;

// D. Imprimir todas as propriedades
for (let propriedade in produto) {
    console.log(propriedade + ": " + produto[propriedade]);
}
