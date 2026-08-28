let nasc = prompt("Digite seu ano de nascimento");
nasc = parsenlnt(nasc);

let viva = confirm("Se voce está viva, clique em ok.");

if(viva){
    alert(`Voce tem ${2026-nasc} anos.`);
}else{
    alert("Voce morreu.");
}
