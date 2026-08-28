let nasc = prompt("Digite seu ano de nascimento");
nasc = parseInt(nasc);
let fds = confirm("Se hoje for final de semana, clique em ok:")
let idade = 2026 - nasc;

alert(`Voce é maior de idade: ${idade >= 18}`)
alert(`Hoje é final de semana: ${fds}`);

if(idade >= 18 && fds){
    alert("Voce pode beber")
}else{
    alert("Voce não pode beber")
}