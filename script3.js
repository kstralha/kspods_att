var encomendas = document.querySelector(".cliente");

encomenda.forEach(function(linha) {
    linha.addEventListener("dblclick", function(){
        console.log("Duplo click");
        this.remove(); 
    });
});