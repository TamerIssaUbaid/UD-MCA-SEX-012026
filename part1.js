// Criando o array com 21 elementos
let frutas = [
    'Maçã', 'Banana', 'Laranja', 'Uva', 'Pera',
    'Abacaxi', 'Manga', 'Kiwi', 'Melancia', 'Morango',
    'Limão', 'Cereja', 'Ameixa', 'Goiaba', 'Mamão',
    'Coco', 'Maracujá', 'Figo', 'Caqui', 'Pitaya',
    'Framboesa'
];

// A. Elementos nas posições específicas
console.log("Posição 0:", frutas[0]);
console.log("Posição 7:", frutas[7]);
console.log("Posição 11:", frutas[11]);
console.log("Posição 15:", frutas[15]);
console.log("Posição 18:", frutas[18]);
console.log("Posição 20:", frutas[20]);

// B. Penúltima e última posição
console.log("Penúltima:", frutas[frutas.length - 2]);
console.log("Última:", frutas[frutas.length - 1]);

// C. Quantidade de elementos
console.log("Total de elementos:", frutas.length);

// D. Adicionando novo elemento
frutas.push("Graviola");

// E. Imprimindo todos os elementos
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}