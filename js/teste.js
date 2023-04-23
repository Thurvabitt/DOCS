function trocarcor() {
    //Seleciona o elemento do seletor de cores, pega o seu valor e registra em uma variável.
    let Cor =  document.querySelector('#bgcolor').value;
     //Seleciona o elemento ID em que a cor deve ser trocada, entra no estilho e altera o background para cor inserida e adquirada, através do value anterior.
    document.getElementById('meufundo').style.backgroundColor = Cor;
    //Mostra na tela qual foi a cor escolhida
    document.getElementById('cor_escolhida').innerHTML = `A cor escolhida foi ${Cor}`;
}