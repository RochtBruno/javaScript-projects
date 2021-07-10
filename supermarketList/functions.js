
var itens = [];

document.querySelector('input[type=submit]').addEventListener('click',()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var valorProduto = document.querySelector('input[name=valor_produto]');

    itens.push({
        nome: nomeProduto.value,
        valor: valorProduto.value,
    });

    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0;
    listaProdutos.innerHTML = "";

    itens.map(function(val){
        soma+=parseFloat(val.valor);
        listaProdutos.innerHTML += `
        <div class="lista-produtos-single">
            <h3>`+val.nome+` >></h3>
            <h3>R$`+val.valor+`</h3>
        </div>
        
        `
    });

    soma = soma.toFixed(2);
    nomeProduto.value = "";
    valorProduto.value = "";

    let elementoSoma = document.querySelector('.soma-produto h1:nth-of-type(2)');
    elementoSoma.innerHTML ='R$'+soma

});

document.querySelector('button[name=limpar]')
.addEventListener('click',()=>{
    itens = [];
    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto h1:nth-of-type(2)').innerHTML = 'R$0,00'
});