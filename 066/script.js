function verificarPrimoDivisores() {
    const num = parseInt(document.getElementById('numeroDivisores').value);
    const resultado = document.getElementById('resultadoDivisores');
    let divisores = [];

    if (num < 2) {
        resultado.textContent = `${num} não é primo.`;
        return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i ===  0) {
            divisores.push(i);
            if (i !== num / i) {
                divisores.push(num / i);
            }
        }
    }

    if (divisores.length > 0) {
        resultado.textContent = `${num} não é primo. É divisível por: ${divisores.join(', ')}.`;
    } else {
        resultado.textContent = `${num} é primo.`;
    }
}