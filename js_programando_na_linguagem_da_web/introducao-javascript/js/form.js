// adicionando um evendo ao click do usuario
// função anonima
// event.preventdefault previni o comportamento padrão para não recarregar a pagina ao enviar o conteudo
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    // pegando dados do form
    var form = document.querySelector("#form-adiciona");

    // pegando o valor do input do form por meio do .value
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // criando uma 'tr' com 5 'td'
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso, altura);


    // para colocar cada td dentro do pacienteTr use appendChilld
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);


});