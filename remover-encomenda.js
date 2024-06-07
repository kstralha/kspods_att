var encomendas = document.querySelectorAll(".clientes");

// Adiciona um evento de duplo clique a cada linha
encomendas.forEach(function(linha) {
    linha.addEventListener("dblclick", function() {
        // Remove a linha da tabela quando ocorre um duplo clique
        this.remove();
    });
});