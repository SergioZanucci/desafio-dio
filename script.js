let nome = "Dorn";
let vitorias = 15;
let derrotas = 0;

function rankJogador(vitorias, derrotas){
    let estatisticas = vitorias - derrotas;
    let nivel = ""

    if(estatisticas <= 10){
        nivel = "Ferro"

    }else if(estatisticas <= 20){
        nivel = "Bronze"

    }else if(estatisticas <= 50){
        nivel = "Prata"

    }else if(estatisticas <= 80){
        nivel = "Ouro"

    }else if(estatisticas <= 90){
        nivel = "Diamante"

    }else if(estatisticas <= 100){
        nivel = "Lendário"

    }else{
        nivel = "Imortal";
    }
    console.log(`O heroi ${nome}, tem o saldo de ${estatisticas} vitorias e está no nivel ${nivel}`)

}
rankJogador(vitorias, derrotas);