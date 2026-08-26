var nasc= 2007;
let nome= "Ana";
const viva = true;

function calcIdade(ano=2026){
    let idade = ano - nasc;
    let menor;
    if (idade < 18){
         menor = true;
         var podebeber = false;
    }else{
        menor = false;
        var podebeber = true;
    }
        alert(`${nome} é menor de idade? ${menor}\nIdade: ${idade}\nPode beber:${podebeber}`)
        return idade;
}

calcIdade();
/* var vaza a variavel dentro do escopo da mesma funcao
alert(`pode beber: ${podebeber}`);
/*
alert(`Fora da funcao: Idade ${idade}`);
Erro pois a variavel let nao existe fora do escopo dele
*/
alert(`Fora da funcao : chamando calcIdade ${calcIdade(2027)}`);
