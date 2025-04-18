//DOM
let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []


// verificar se é um numero
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }


}

// verifica se o numero esta na lista

function inLista(n, l){

    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }


}

// botao de adicionar

function adicionar(){
    if(isNumero(num.value) && ! inLista(num.value, valores)){

        valores.push(Number(num.value))
        
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''

    } else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

// botao que finaliza e verifica a quantidade de numeros cadastrados pelo usuario

function finalizar(){

    if (valores.length == 0){
        window.alert('Adicionar valores antes de finalizar.')
    } 

    else{
        
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        // laço que verificar o menor valor, maior valor e realiza a soma

        for (let pos in valores){

            soma += valores[pos]

            if (valores[pos] > maior)
                maior = valores[pos]

            if (valores[pos] < menor)
                menor = valores[pos]
            
        }
        media = soma/tot

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> Somando todos os valores temos: ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores digitados é: ${media}.</p>`

    }

}
