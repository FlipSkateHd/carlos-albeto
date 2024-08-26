const socorro = document.getElementById("valor");
const porFavor = document.getElementById("hora");
const resultado = document.getElementById("resultados");

function magica() {
    let salarioBruto = socorro.value * porFavor.value;
    let ir = salarioBruto * 0.11;
    let inss = salarioBruto * 0.08;
    let sindicato = salarioBruto * 0.05;
    let salarioLiquido = salarioBruto - ir - inss - sindicato;
    resultado.innerHTML = salarioLiquido;
}