// Prática 2 - TABUADA
// Considere que o dado de entrada para executar a tabuada é o número fixo que vamos efetuar as multiplicações
// Nossa tabuada deverá ir de 1 ao 10 - Neste problema, você deverá utilizar o comando while.

let multiplicador = 9
let n = 10
let i = 1

while (i <= n) {
   let resultado = multiplicador * i
   let textoDeExibicao = `${multiplicador} x ${i} = ${resultado}`
   console.log (textoDeExibicao)
   i ++
}