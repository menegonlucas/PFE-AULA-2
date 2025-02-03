function verificarPrimo() {
    const num = parseInt(document.getElementById('numeroPrimo').value);
    const resultado = document.getElementById('resultadoPrimo');
    if (num < 2) {
        resultado.textContent = `${num} não é primo.`;
        return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            resultado.textContent = `${num} não é primo.`;
            return;
        }
    }
    resultado.textContent = `${num} é primo.`;
}