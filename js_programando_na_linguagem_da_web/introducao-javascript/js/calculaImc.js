// document.querySelector = seleciona um conteudo por meio da tag
// textContent possibilita pegar o conteudo da tag é alterar passando um novo texto
// a função querySelector so funciona com um paciente de cada vez, caso seja necessario usar varios elementos com a mesma classe deve-se usar a função querySelectorAll
var titulo = document.querySelector(".container");
titulo.textContent = "Aparecida Nutricionista";

// buscando paciente
var pacientes = document.querySelectorAll(".paciente");


for (var i = 0; i < pacientes.length; i++) {
    console.log(pacientes[i]);

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");


    // aplicando validação de peso e altura
    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("peso invalido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso invalido!";
        paciente.classList.add("paciente-invalido"); // alterando a cor da linha em caso de erro
        //paciente.style.backgroundColor = "lightcoral";
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("altura invalida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura invalida!";
        //paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-invalido");
    }

    // toFixed para mostra somente duas casas decimais na tabela
    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }

}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);
    return imc.toFixed(2);
}






/*
// buscando o peso do paciente
var tdPeso = paciente.querySelector(".info-peso");
// pegando somente o conteudo do peso do paciente
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

// pegando o conteudo do campo imc
var tdImc = paciente.querySelector(".info-imc");



// aplicando validação de peso e altura
var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("peso invalido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso invalido!";
}

if (altura <= 0 || altura >= 3.00) {
    console.log("altura invalida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura invalida!";
}

if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}


/*
// calculando o imc do paciente
var imc = peso / (altura * altura);

// alterando o conteudo do campo imc
tdImc.textContent = imc;
*/
