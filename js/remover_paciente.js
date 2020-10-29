var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    //this = quem aciona o evento
    //target = alvo do event
    //parentNode = elemento pai do alvo target
    event.target.parentNode.classList.add("fadeOut");
    //forçar o javascript a esperar 500ms
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
    
});
