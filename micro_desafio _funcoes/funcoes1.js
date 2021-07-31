/*1) Criar a função calcularIndiceDeMassaCorporal que receba a altura em centímetros e o peso em quilogramas e calcule o IMC do usuário (peso / altura2). Em seguida, execute a função testando diferentes valores.*/ 

function calcularIndiceDeMassaCorporal(a, p){

        let altura = a / 100

        return (p / (altura * altura)).toFixed(2) 
}  

console.log(calcularIndiceDeMassaCorporal(175, 80))

console.log(calcularIndiceDeMassaCorporal(180, 90))

console.log(calcularIndiceDeMassaCorporal(155, 40))

//Respostas: 26.122448979591837 com toFixed = 26.12//
          /* 27.777777777777775 com toFixed = 27.78 */
          /* 16.649323621227886 com toFixed = 16.65 */




          
          
          
          

