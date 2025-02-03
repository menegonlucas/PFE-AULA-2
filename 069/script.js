function verificarMediaIdade() {
    const n = parseInt(document.getElementById('quantidadePessoas').value);
    let somaIdades = 0;

    for (let i = 0; i < n; i++) {
        const idade = parseInt(prompt(`Digite a idade da pessoa ${i + 1}:`));
        somaIdades += idade;
    }

    const media = somaIdades / n;
    let classificacao = '';

    if (media <= 25) {
        classificacao = "A turma é jovem.";
    } else if (media <= 60) {
        classificacao = "A turma é adulta.";
    } else {
        classificacao = "A turma é idosa.";
    }

    document.getElementById('resultadoIdade').textContent = classificacao;
}