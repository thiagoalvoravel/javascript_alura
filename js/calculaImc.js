//Cálculo do IMC
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var imc = paciente.querySelector(".info-imc");

    imc.textContent = tratarImc(paciente, peso, altura);

}

function tratarImc(paciente, peso, altura){
    if(!validarPeso(peso)){
        paciente.classList.add('paciente-invalido');
        return 'Peso inválido';
    }else if(!validarPeso(altura)){
        paciente.classList.add('paciente-invalido');
        return 'Altura inválido';
    }else{
        return calcularImc(peso, altura);
    }
}

function validarPeso(peso){
    if(peso <= 0 || peso >= 1000){
        console.log('Peso inválido');
        return false;
    }
    return true;
}

function validarAltura(altura){
    if(altura <= 0 || altura >= 3){
        console.log('Altura inválida');
        return false;
    }
    return true;
}

function calcularImc(peso, altura){
    return (peso / (altura * altura)).toFixed(2);
}