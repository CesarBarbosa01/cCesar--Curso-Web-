let anoDeNascimento = 2002;
let anoAtual = 2023; 
let meses = 12; 
let semanas = 52;
let dias = 365;

let idadeEmAnos = anoAtual - anoDeNascimento; 
let idadeEmMeses = idadeEmAnos * meses;
let idadeEmSemanas = idadeEmAnos * semanas; 
let idadeEmDias = idadeEmAnos * dias;

console.log("A idade da pessoa em Anos será:", idadeEmAnos, "Anos.");
console.log("A idade da pessoa em Meses será:", idadeEmMeses, "Meses.");
console.log("A idade da pessoa em Semanas será:", idadeEmSemanas, "Semanas.");
console.log("A idade da pessoa em Dias será:", idadeEmDias, "Dias.");

//Os cálculos foram feitos não considerando o ano bissexto.
//As semanas também foram calculadas com o Número Inteiro de 52, e não com o número decimal que inclui 52 semanas e 1 dia.