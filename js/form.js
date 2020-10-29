//Adicionar paciente
var addPaciente = document.querySelector("#adicionar-paciente");

addPaciente.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector('#form-adicionar-paciente');

    var paciente = obterDadosPacienteFormulario(form);    

    adicionarPacienteNaTabela(paciente);

    form.reset();

});

function adicionarPacienteNaTabela(paciente){
    var pacienteTr = montarTr(paciente);

    if(!validarPaciente(paciente)){
        alert('Paciente inválido');
        return;
    }
    
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
}

function obterDadosPacienteFormulario(form){
    var paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montarTr(paciente){
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add('paciente');

    var imc = tratarImc(pacienteTr, paciente.peso, paciente.altura);

    pacienteTr.appendChild(montarTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montarTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montarTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montarTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montarTd(imc, 'info-imc'));

    return pacienteTr;
}

function montarTd(dado, classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validarPaciente(paciente){
    return (validarPeso(paciente.peso) && validarAltura(paciente.altura));
}