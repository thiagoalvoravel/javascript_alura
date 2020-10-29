var filtro = document.querySelector("#filtrar-tabela");

filtro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");
    for(i = 0; i < pacientes.length; i++){
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        
        if(!nome.toLowerCase().match(this.value.toLowerCase())){
            paciente.classList.add("invisivel");
        }else{
            paciente.classList.remove("invisivel");
        }
    }

    /*
    pacientes.forEach(function(paciente){

    });
    */
});