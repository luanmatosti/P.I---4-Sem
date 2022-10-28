function conversaoDeGrau(calculo) {
    var calculo;
    var f = 9 / 5 * calculo + 32;
    document.write(calculo + ` °C para Fahrenheit é ${f} °F`)
}

conversaoDeGrau(parseFloat(prompt("Digite um valor em graus Celsius abaixo")));