//array herois com nome, vitorias e derrotas
const herois = [
    { nome: "Ornn", vitorias: 15, derrotas: 5 },  //Ferro
    { nome: "Lucian", vitorias: 27, derrotas: 12 }, //Bronze
    { nome: "Draven", vitorias: 42, derrotas: 14 }, //Prata
    { nome: "Gnar", vitorias: 98, derrotas: 27 },   //Ouro
    { nome: "Maokai", vitorias: 85, derrotas: 3 },  //Diamante
    { nome: "Karthus", vitorias: 128, derrotas: 30 }, //Lendário
    { nome: "Arnald", vitorias: 114, derrotas: 8 }     //Imortal
]

//for para passar pelo array herois, que retorna o saldo de vitórias e o ranking do heroi 
for (i = 0; i < herois.length; i++) {
    let heroi = herois[i];
    let saldoRank = saldo(heroi.vitorias, heroi.derrotas)
    let calculoRanking = calculadoraRanking(saldoRank)

    console.log(`O herói ${heroi.nome} tem saldo de ${saldoRank} e está no nível ${calculoRanking}`)
   
}

//função para calcular o saldo de Vitorias
function saldo(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    return saldoVitorias
}


//função para colocar o heróis em algum ranking
function calculadoraRanking(saldo) {
    let nivel = "";

    if (saldo <= 10) {
        nivel = "Ferro";
    } else if (saldo >= 11 && saldo <= 20) {
        nivel = "Bronze";
    } else if (saldo >= 21 && saldo <= 50) {
        nivel = "Prata ";
    } else if (saldo >= 51 && saldo <= 80) {
        nivel = "Ouro";
    } else if (saldo >= 81 && saldo <= 90) {
        nivel = "Diamante";
    } else if (saldo >= 91 && saldo <= 100) {
        nivel = "Lendário";
    } else if (saldo >= 101) {
        nivel = "Imortal";
    }

    return nivel
}