
function calcularMedia() {
	var nota1 = parseFloat(document.getElementById("nota1").value);
	var nota2 = parseFloat(document.getElementById("nota2").value);
	var nota3 = parseFloat(document.getElementById("nota3").value);
	var nota4 = parseFloat(document.getElementById("nota4").value);


	var media = (nota1 + nota2 + nota3 + nota4) / 4;

			
	var situacao;

	if (media < 2) {
		situacao = "Reprovado";
		document.getElementById("resposta").style.backgroundColor = "red";
	} 
    

    else if (media >= 2 && media <= 5.9) {
		situacao = "Em Recuperação";
		document.getElementById("resposta").style.backgroundColor = "blue";
	} 
    
    
    else {
		situacao = "Aprovado";
		document.getElementById("resposta").style.backgroundColor = "green";
	}


	document.getElementById("resposta").innerHTML = "A Média é: " + media.toFixed(2) + "<br>Situação: " + situacao;
}
	