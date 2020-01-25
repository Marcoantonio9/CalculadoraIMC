function finalizandoCalculo(altura, peso){
         //IDADE
    var idade = document.getElementById('idadeaqui').value
    var idade = parseInt(idade)

        //ALTURA
    var altura = parseFloat(document.getElementById('alturaaqui').value)
    console.log(altura)

        //PESO
    var peso = parseFloat(document.getElementById('pesoaqui').value)
    console.log(peso)

    var resultado_imc = peso / altura ** 2
    mensagem = ''
    
    resultado_imc = document.getElementById('result'). value + resultado_imc.toFixed(1);
    console.log(resultado_imc)
    
    if(resultado_imc < 16){
        mensagem = document.getElementById('result').value +=  (` IMC: ${resultado_imc} | Baixo peso muito grave! `)
    }else if(resultado_imc >= 16 && resultado_imc <= 16.99){
        mensagem = document.getElementById('result').value +=  (` IMC: ${resultado_imc} | Baixo peso grave! `)
    }else if(resultado_imc >= 17 && resultado_imc <= 18.49){
        mensagem = document.getElementById('result').value +=  (` IMC: ${resultado_imc} | Baixo peso! `)
    }else if(resultado_imc >= 18.50 && resultado_imc <= 24.99){
        mensagem = document.getElementById('result').value +=  (` IMC: ${resultado_imc} | Peso normal! `)
    }else if(resultado_imc >= 25 && resultado_imc <= 29.99){
        mensagem = document.getElementById('result').value +=  (` IMC: ${resultado_imc} | Sobrepeso! `)
    }else if(resultado_imc >= 30 && resultado_imc <= 34.99){
        mensagem = document.getElementById('result').value +=  (` IMC: ${resultado_imc} | Obesidade grau I `)
    }else if(resultado_imc >= 35 && resultado_imc <= 39.99){
        mensagem = document.getElementById('result').value +=  (` IMC: ${resultado_imc} | Obesidade grau II `)
    }else if(resultado_imc >= 40){ //se n ã o estiver enquadrado em nenhum critério acima, imc só pode ser maior que 40
        mensagem = document.getElementById('result').value +=  (` IMC: ${resultado_imc} | Obesidade grau III `)
        }
}
