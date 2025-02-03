function verificarNumero() {
    const num = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');
    if (num >= 0 && num <= 1000) {
        resultado.textContent = `Número aceito: ${num}`;
    } else {
        resultado.textContent = "Número fora do intervalo. Tente novamente.";
    }
}