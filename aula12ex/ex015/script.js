function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

        if (fano.value.length == 0 || Number(fano.value) > ano ){
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        }  
        else{
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if(fsex[0].checked){
                genero = 'Homem'
                if (idade >= 0 && idade < 10){
                    //criança
                    img.setAttribute('src', 'bebe-masculino.webp')
                } else if (idade < 21){
                    // adolescente
                    img.setAttribute('src', 'garoto.jpeg')
                }else if(idade < 55){
                    // adulto
                    img.setAttribute('src', 'adolescente-menino.jpeg')
                }else{
                    //idoso
                    img.setAttribute('src', 'idoso.webp')
                }
            } else if (fsex[1].checked){
                genero = 'Mulher'
                if (idade >= 0 && idade < 10){
                    // criança
                    img.setAttribute('src', 'bebe-feminino.webp')
                } else if (idade < 21){
                    // adolescente
                    img.setAttribute('src', 'garota.jpeg')

                }else if(idade < 55){
                    // adulto
                    img.setAttribute('src', 'adolescente-menina.jpeg')

                }else{
                    //idoso
                    img.setAttribute('src', 'idosa.webp')

                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
        }

}