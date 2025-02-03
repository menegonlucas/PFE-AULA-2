function calcularMedia() {
    const n = parseInt(document.getElementById('quantidadeNotas').value);
    let soma = 0;

    for (let i = 0; i < n; i++) {
        const nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));
        soma += nota;
    }

    const media = soma / n;
    document.getElementById('resultadoMedia').textContent = `A média aritmética das notas é: ${media}`;
}