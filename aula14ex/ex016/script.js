function contar(){
    var inicio = document.getElementById('inicio')
    var passo = document.getElementById('passo')
    var fim = document.getElementById('fim')

    if(inicio.value === '' || passo.value === '' || fim.value === ''){
        alert('Digite todos os campos para o passo a passo')
        return
    }

    var i = Number(document.getElementById('inicio').value)
    var p = Number(document.getElementById('passo').value)
    var f = Number(document.getElementById('fim').value)

    var res = document.getElementById('res')
    res.innerHTML = 'Contando: <br>'

    if (p <=0){
        alert('Passo inválido. Considerando PASSO 1')
        p = 1
    }
    
    if ( i <= f ){
        for ( i ; i <= f ; i += p ){
            res.innerHTML += `${i}👉 `
        }
        res.innerHTML += '🏁'
    
    }else{
        for ( i ; i >= f ; i -= p){
            res.innerHTML +=`${i}👉`
        }
        res.innerHTML += '🏁'
    
    }
}
