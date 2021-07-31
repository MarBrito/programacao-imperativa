/* 3) Criar as variáveis, nomeJogador, golsJogador, precoEmDolares. 

Depois, criar a função fazerGol que incremente a quantidade de gols do jogador em uma unidade e, em seguida, imprima em tela a mensagem “GOL!!!!!!!!!”. 

Além disso, incremente o valor do jogador em 10.000 dólares. 

Por conseguinte, teste a execução da função várias vezes e imprima em tela a nova quantidade de gols do jogador e o preço do jogador no mercado.
 */

let nomeJogador = "Ronaldo";
let golsJogador = 0 
let precoEmDolares = 0

function fazerGol() {

    return (golsJogador ++) + (console.log("GOL!!!!!!!!! éeeeeee do Ronaldo")) + (precoEmDolares = (10000*golsJogador))
        
}

fazerGol()
fazerGol()
fazerGol()
console.log(golsJogador)

console.log(precoEmDolares + " Dólares")

