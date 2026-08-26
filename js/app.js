var nasc= 2007;
let nome= "Ana";
const viva = true;

function calcIdade(ano=2026){
    let idade = ano - nasc;
    let menor;
    if (idade < 18){
         menor = true;
    }else{
        menor = false;
    }
        alert(`${nome} é menor de idade? ${menor}\nIdade: ${idade}`)
        return idade;
}

calcIdade();
/*
alert(`Fora da funcao: Idade ${idade}`);
Erro pois a variavel let nao existe fora do escopo dele
*/
alert(`Fora da funcao : chamando calcIdade ${calcIdade(2027)}`);
