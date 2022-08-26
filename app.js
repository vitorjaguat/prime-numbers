//Listar todos os números primos de 1 a 60
//Combinações possíveis de 6 números primos

// const num = 60;

// const isPrime = function (num) {
//     for (let i = 2; i < num; i++)
//         if (num % i === 0) {
//             return false
//         };
//     return num > 1;
// }

// const primeNumbers = function (num) {
//     let numbers = new Array();
//     for (var i = 0; i <= num; i++) {
//         if (isPrime(i)) {
//             numbers.push(i);
//         }
//     }
//     return numbers;
// }

// console.log(primeNumbers(60));

// const primeNumbers = function(num){
//     let primeArr = [1]
//     for(i = 2; i <= num; i++){
//         for(j = 2; j <= 60; j++){
//             if (i % j ===)
//         }
//     }
// }

// var numeros_ignorados = [1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30, 32, 33, 34, 35, 36, 38, 39, 40, 42, 44, 45, 46, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 60];
// var quantidade_de_jogos = 10; // pode mudar a quantidade aqui
// var jogos = [];

// function gerarNumero(existentes) {
//     var novoNumero = parseInt(Math.random() * 59, 10) + 1;
//     if (existentes.indexOf(novoNumero) != -1 || numeros_ignorados.indexOf(novoNumero) != -1) novoNumero = gerarNumero(existentes);
//     return novoNumero;
// }

// function chaveExistente(chave) {
//     var chaves = jogos.map(function (chv) {
//         return chv.join();
//     });
//     return chaves.indexOf(chave.join()) != -1;
// }

// for (var i = 0; i < quantidade_de_jogos; i++) {
//     var numeros = [];
//     while (numeros.length < 6) {
//         numeros.push(gerarNumero(numeros));
//     }
//     numeros = numeros.sort();
//     console.log(numeros)
//     // jogos.filter((jogo, j) => jogo.every((el, x) => {
//     //     if (el === numeros[x]) {
//     //         return;
//     //     } else jogos.push(numeros);
//     // }))
//     chaveExistente(numeros) ? quantidade_de_jogos++ : jogos.push(numeros);
// }

// console.log(jogos);


let primosN = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30, 32, 33, 34, 35, 36, 38, 39, 40, 42, 44, 45, 46, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 60]



// fase1: gerar uma sequencia de 6 números primos aleatórios de 1 a 60; guardar essa sequencia numa array no servidor ou localStorage;
// fase2: ao gerar a sequência seguinte, ver se essa sequencia está contida na array de arrays no server/localStorage; se já está contida, desconsiderar e tirar outra sequência;


// console.log(primos.length)


// console.log(random60)

let primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

const genNumHelper = function () {
    const game = []
    let primosInt = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];
    for (i = 1; i <= 6; i++) {
        const randomP = Math.trunc(Math.random() * (primosInt.length))
        const num = primosInt[randomP];
        game.push(num)
        primosInt.splice(randomP, 1);
    }
    return game
}
const generateLot = function () {
    const arr = [];
    const num1 = genNumHelper();
    const num2 = genNumHelper();
    const num3 = genNumHelper();
    const num4 = genNumHelper();
    const num5 = genNumHelper();
    const num6 = genNumHelper();
    arr.push(num1, num2, num3, num4, num5, num6)
    primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];
}

console.log(genNumHelper())
console.log(genNumHelper())
console.log(genNumHelper())
console.log(genNumHelper())
console.log(genNumHelper())
console.log(genNumHelper())
console.log(genNumHelper())
console.log(genNumHelper())
console.log(genNumHelper())
console.log(genNumHelper())
console.log(genNumHelper())
console.log(genNumHelper())
console.log(generateLot());

const random = Math.trunc(Math.random() * (8) + 1)
console.log(random)
console.log(random)
console.log(random)
console.log(random)
console.log(random)