function comprar(){
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt (document.getElementById('qtd').value);
 if (tipo ==  'Pista'){
    comprarPista(qtd);
 } else if (tipo == 'superior'){
    comprarSuperior(qtd);
 }else{
    alert('Quantidade indisponível para tipo pista')
 }

}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    
    if (qtd > qtdPista){
        alert('Quantidade de ingressos indisponível');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Ingressos comprados com sucesso');
    }

}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    
    if (qtd > qtdSuperior){
        alert('Quantidade de ingressos indisponível para o setor superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Ingressos comprados com sucesso');
    }


}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    
    if (qtd > qtdInferior){
        alert('Quantidade de ingressos indisponível para o setor inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Ingressos comprados com sucesso');
    }

}