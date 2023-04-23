function sorteador() {
    var min = parseInt(document.getElementById("minimo").value);
    var max = parseInt(document.getElementById("maximo").value);
    var resultado = document.getElementById("resultado");
    
    if (min >= max) {
        resultado.innerHTML = "o número mínimo tem que ser menor que o máximo ô espertin";
        return;
    }
    
    var sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    resultado.innerHTML = sorteado;
}
    
