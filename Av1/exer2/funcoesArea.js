function conversao(raio) {
    var raio;
    var area = Math.PI * (raio * raio);
    var perimetro = 2 * Math.PI * raio
    document.write(`O círculo de raio ` + raio + ` possui uma área de ` + area.toFixed(2) + " e perímetro de " + perimetro.toFixed(2))
}

conversao(parseFloat(prompt("Digite um valor de raio")));