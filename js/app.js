var nasc= 2007;
let nome= "Ana";
const viva = true;

function calcIdade(ano=2026){
    let idade = ano - nasc;
    alert(`dentro de função - idade ${idade}`)
    return idade;
}

calcIdade();
/*
alert(`Fora da funcao: Idade ${idade}`);
Erro pois a variavel let nao existe fora do escopo dele
*/
alert(`Fora da funcao : chamando calcIdade ${calcIdade(2027)}`);
