const formulario = document.querySelector("#formulario");
const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const nota1 = document.querySelector("#nota1");
const nota2 = document.querySelector("#nota2");
const nota3 = document.querySelector("#nota3");
const resultado = document.querySelector("#resultado");
const limpar = document.querySelector("#limpar");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nomeAluno = nome.value.trim();
    const idadeAluno = Number(idade.value);
    const n1 = Number(nota1.value);
    const n2 = Number(nota2.value);
    const n3 = Number(nota3.value);

    resultado.textContent = "";
    resultado.className = "";

    if (nomeAluno === "") {
        resultado.textContent = "Digite um nome válido.";
        return;
    }

    if (idade.value.trim() === "" ||
        !Number.isInteger(idadeAluno) ||
        idadeAluno <= 0) {

        resultado.textContent = "Digite uma idade válida.";
        return;
    }

    if (nota1.value.trim() === "" ||
        nota2.value.trim() === "" ||
        nota3.value.trim() === "") {

        resultado.textContent = "Preencha todas as notas.";
        return;
    }

    if (!Number.isFinite(n1) || n1 < 0 || n1 > 10 ||
        !Number.isFinite(n2) || n2 < 0 || n2 > 10 ||
        !Number.isFinite(n3) || n3 < 0 || n3 > 10) {

        resultado.textContent = "As notas devem estar entre 0 e 10.";
        return;
    }

    const media = (n1 + n2 + n3) / 3;

    let situacao;

    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    resultado.textContent =
        "Aluno: " + nomeAluno + "\n" +
        "Idade: " + idadeAluno + "\n" +
        "Nota 1: " + n1 + "\n" +
        "Nota 2: " + n2 + "\n" +
        "Nota 3: " + n3 + "\n" +
        "Média: " + media.toFixed(2) + "\n" +
        "Situação: " + situacao + "\n" +
        nomeAluno + ", sua média foi " +
        media.toFixed(2) + ". Situação: " + situacao + ".";

});

limpar.addEventListener("click", function() {
    formulario.reset();
    resultado.textContent = "";
    resultado.className = "";
});