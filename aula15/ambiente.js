let num = [5, 8, 2, 9, 3]

num.push(1) // .push() adiciona um elemento no vetor

num.sort() // faz o vetor ser ordenado por ordem crescente

console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)

if (pos == -1){
    console.log("Valor nao encontrado")
}

else{
console.log(`O valor 8 está na posição ${pos}`)

}
