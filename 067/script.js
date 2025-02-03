function primosAteN() {
    const n = parseInt(document.getElementById('numeroN').value);
    let primos = [];
    let totalDivisoes = 0;

    for (let num = 2; num <= n; num++) {
        let isPrimo = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            totalDivisoes++;
            if (num % i === 0) {
                isPrimo = false;
                break;
            }
        }
        if (isPrimo) {
            primos.push(num);
        }
    }

    document.getElementById('resultadoPrimos').textContent = `Números primos entre 1 e ${n}: ${primos.join(', ')}. Número total de divisões realizadas: ${totalDivisoes}`;
}