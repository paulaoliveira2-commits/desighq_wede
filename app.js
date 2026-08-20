alert("ola mundo!");

var nasc = 2007;
let nome = "Ana";
const viva = true;
let altura = 1.70;

if(viva){
    let saudacao = "ola" + nome + "!";
    let mensagem = 'altura: ${altura}m | idade: ${2025-nasc}';
    alert(saudacao+ '\n' + mensagem);
} else {
    alert("voce não está viva!");
}