// Prática 4 - É um número primo? //


const numero = 23
let i = 2
let ehPrimo = true

i = 2
while (numero % i != 0)
    i++ 
if (numero == i) 
    console.log(`Sim, o número ${numero} é primo.`)
else
    console.log(`Não, o número ${numero} não é primo.`)