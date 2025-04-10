function contar(){
    // DOM
    var n = Number(window.document.getElementById('num').value)
    var res = document.getElementById('res')
    // verifica se o n é igual a 0, caso for faz o n valer 1 para fazer a tabuada do 1 
    if (n === 0){
        alert('Número inválido, considerando número 1')
        n = 1
    }
    // laço para fazer a tabuada
    res.innerHTML = ''
    for( var i = 1; i <=10; i++ ){
      res.innerHTML +=`${n} x ${i} = ${n*i} <br>`
    }
}