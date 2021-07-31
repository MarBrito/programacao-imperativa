/* 4) Criar a função hatTrick (expressão usada para dizer que um jogador fez 3 gols em uma mesma partida) que em seu interior execute três vezes a função fazerGol e, em seguida, aumente o valor do jogador em 10% a mais por ano em comparação com o valor atual.
 */


let nomeJogador = "Ronaldo";
let golsJogador = 0 
let precoEmDolares = 0

function fazerGol() {

    return (golsJogador ++) + (console.log("GOL!!!!!!!!! éeeeeee do Ronaldo")) + (precoEmDolares = (10000*golsJogador))
        
}

function hatTrick() {
    
    fazerGol()
    fazerGol()
    fazerGol()
    precoEmDolares = precoEmDolares*1.1
    return precoEmDolares 
}

console.log(hatTrick())