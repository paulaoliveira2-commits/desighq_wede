alert("olá mundo!!");

var nasc = 2007;      
let nome = "Ana";   
const viva = true;     
let altura = 1.70;     

if (viva) {
    let saudacao = "Olá, " + nome + "!";
    let mensagem = `Altura: ${altura}m | Idade: ${2025 - nasc}`;
    alert(saudacao + '\n' + mensagem);
} else {
    alert("Você não está viva!");
}