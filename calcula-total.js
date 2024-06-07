var titulo = document.querySelector(".titulo");
titulo.textContent= "Lista de encomendas";

var clientes = document.querySelectorAll(".clientes");



    for (var i = 0 ; i < clientes.length; i++){

        var quantidade = clientes[i].querySelector(".info-quantidade").textContent;

        var unitario = clientes[i].querySelector(".info-preco-unitario").textContent;

        if(!validaQtde(quantidade)){
            clientes[i].querySelector(".info-preco-total").textContent="Quantidade inválida";
            clientes[i].style.color = "red";
            
    
        } else {
            
            if(!validaUnitario(unitario)){
                clientes[i].querySelector(".info-preco-total").textContent = "Valor unitário é inválido";

                clientes[i].style.backgroundColor = "lightcoral";
            
            } else {

            clientes[i].querySelector(".info-preco-unitario").textContent = formataValor(unitario);

            clientes[i].querySelector(".info-preco-total").textContent= calculaTotal(quantidade,unitario);

        }

    }

}    

function formataValor(valor) {

    var valor = parseFloat(valor);

    return valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

}

//Criando função para calcular o valor total da encomenda 
    function calculaTotal(quantidade, unitario){
    var total = 0;
    total = quantidade * unitario;

    return formataValor(total);
}

function validaQtde(quantidade){
    if((!isNaN(quantidade)) && (quantidade>0)){
        return true;
    }else{
        return false;
    }    
}

//Função para validar o valor unitário
function validaUnitario(unitario){
    if((!isNaN(unitario)) && (unitario>0)){
        return true;
    }else{
        return false;
    }
}