// adicionando um evendo ao click do usuario
// função anonima
// event.preventdefault previni o comportamento padrão para não recarregar a pagina ao enviar o conteudo
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    // pegando dados do form
    var form = document.querySelector("#form-adiciona");

    // extraindo informações do paciente do form
    // paciente faz referencia ao objeto
    var paciente = obtemPacienteDoFormulario(form);
    console.log(paciente);

    // criando uma 'tr' com 5 'td'
    var pacienteTr = montaTr(paciente);


    var erros = validaPaciente(paciente)

    console.log(erros);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }


    // adicionndo o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    // para limpar o formulario apos a inserção do paciente
    form.reset();

    // para limpar o form depois de remover um erro
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";


});


function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    // iterando todos os erros com forEach
    // colocando na ul com appendChild
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}


function obtemPacienteDoFormulario(form) {

    // criando um objeto para pegar os valores de preenchimento
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}


function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");


    // para colocar cada td dentro do pacienteTr use appendChilld
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    // a função push coloca dentro do array a string (peso e invalido) caso apresente erro
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco!");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é invalido!");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é invalida!");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura do paciente não pode ser em branco!");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco!");
    }

    if (paciente.altura.length == 0) {
        erros.push("O peso não pode ser em branco!");
    }

    return erros;
}

