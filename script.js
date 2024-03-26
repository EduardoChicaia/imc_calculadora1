
const Calcular = document.getElementById('calcular')

function Imc () {

        const Nome = document.getElementById('nome').value;
        const Altura = document.getElementById('altura').value;
        const Peso = document.getElementById('peso').value;
        const Resultado = document.getElementById('resultado')

        
        

        if (Nome !== '' && Altura !== '' && Peso !== '') {

                var valorImc = (Peso/(Altura*2)).toFixed(1);

                var classifca = ''

                if (valorImc < 18.5){
                        classifca ='estas com pouco peso '
                }else if (valorImc < 25){
                        classifca = ' estas com peso ideal parabens!'
                }else if(valorImc < 30) {
                        classifca = 'estas levemente acima do peso'
                }else if (valorImc < 35) {
                        classifca = 'estas com obesidade grau I'
                }else if (valorImc < 40) {
                        classifca = 'estas com obesidade grau II'
                }else{
                        classifca = 'estas com obesidade grau II'
                }
        
                Resultado.textContent= `Olá ${Nome} o seu IMc é de ${valorImc} e ${classifca} `

        }else {
                alert ('Preencha todos os campos!')
        }
       
}
Calcular.addEventListener('click', Imc)

