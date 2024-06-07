var botaoAdicionar = document.querySelector("#adicionar-encomenda");

botaoAdicionar.addEventListener("click", function(event){

event.preventDefault();

//captura o formulario da pagina
var form = document.querySelector("#form-adiciona");

////Captura os dados da nova encomenda
var encomenda = obtemEncomenda(form);

//Valida se a encomenda pode ser inserida
if(validaEncomenda(encomenda).length > 0) {
    console.log(validaEncomenda(encomenda));
} else {
    //Insere a nova encomenda na tabela
    addEncomenda(encomenda);

    //Limpa o formulário
    form.reset();
}

});

function obtemEncomenda(dadosForm){
    
    var encomenda = {
        nome: dadosForm.nome.value,
        produto: dadosForm.produto.value,
        quantidade: dadosForm.quantidade.value,
        unitario: dadosForm.unitario.value,

    } 

    return encomenda;
}

//funcao para add novo item a tabela

function addEncomenda(novaEncomenda) {

var tabela = document.querySelector("#tabela-clientes");

tabela.appendChild(montaTR(novaEncomenda));

}

function montaTD(dado) {

var td = document.createElement("td"); 
    td.textContent = dado;

    return td;
}

function montaTR(novaEncomenda) {
    
    var tr = document.createElement("tr");

    tr.appendChild(montaTD(novaEncomenda.nome));
    tr.appendChild(montaTD(novaEncomenda.produto));
    tr.appendChild(montaTD(novaEncomenda.quantidade));
    tr.appendChild(montaTD(formataValor(parseFloat(novaEncomenda.unitario))));
    tr.appendChild(montaTD(calculaTotal(novaEncomenda.quantidade, novaEncomenda.unitario)));

    return tr; 

}

//Função para validação da quantidade e do unitário
function validaEncomenda(encomenda){

var erros =[];

//Verifica se o nome foi informado
if(encomenda.nome=="") {
    erros.push("O nome não pode ser vazio!");
}

//Verifica se a quantidade é maior que zero e um número
if(encomenda.quantidade <= 0 || isNaN(encomenda.quantidade)){
    erros.push("A quantidade deve ser numérica e maior que 0.");
}

//Verifica se o valor unitário é maior que zero e um número
if(encomenda.unitario <=0 || isNaN(encomenda.unitario)){
    erros.push("O valor unitário deve ser numérico e maior que 0.");
}

return erros;

}

