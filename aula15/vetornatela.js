let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
console.log(valores)

/* percurso em vetores:

for (let pos=0; pos < valores.length ; pos ++){
    console.log(`A posição: ${pos} tem o valor: ${valores[pos]}`)
}



 forma simplificada de percorrer um vetor

for(let pos in valores){

    console.log(`A posição: ${pos} tem o valor: ${valores[pos]}`)
}

*/

//indexOf() busca um valor em um vetor
console.log(valores.indexOf(11)) // retornar -1 significa que nao encontrou o valor

