class Animal{
constructor(n, c="desconhecido", a=0.0, p=0, r="vira-lata") {
this.nome= n;
this.cor = c;
this.altura = a;
this.peso = p;
this.raca = r;
}
falar(){

   alert("oi");
}

comer(kg) {
   this.peso = this.peso + kg;
   alert("Comi");
}

cagar(kg) {
   this.peso = this.peso + kg;
    alert("caguei");
}
saudar(){

   let msg = `Olá meu nome é ${this.nome}\n`;
   msg = msg+ `Cor: ${this.cor} Raça:${this.raca}\n`
   msg = msg+ `Peso: ${this.peso}\n`
   msg = msg+ `Altura: ${this.altura}\n`
   alert(msg)
}
}

class Cachorro extends Animal{
    constructor(n, c="desconhecido", a=0.0, p=0, r="vira-lata"){
        super(n,c,a,p,r);
        this.patas = 4;
        }
        falar(){
            alert("au! au!");
        }
}
class Passaro extends Animal{
    constructor(n, c="desconhecido", a=0, p=0, r="desconhecido"){

    }
    falar(){
        alert("fiu!fiu!");

    }
    saudar(){

   let msg = super.saudar();
   msg = msg+ "Eu sou um Passaro!"
   alert(msg)
}

}
const balu = new Cachorro("Balu Brasil");
const mel = new Cachorro("Mel", "Amerelo", 1.10, 45, "Labrador");
const leleco = new Passarro("Leleco Brasil", undefined, undefined, undefined, "Papagaio");
