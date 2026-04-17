document.addEventListener("DOMContentLoaded", (event) => {
    listarAlunos();
});

const API_URL = "https://cadastro-alunos-api.onrender.com";
let alunos = [];
async function listarAlunos() {

    let response = await fetch(API_URL + "/alunos",{
        method: "GET"
    });
    if (response.ok) {
        alunos = await response.json();
        montaTabela();
    }
    else {
        errorBody = await response.json();
        alert("Falha ao buscar alunos: " + errorBody.message);
    }
}

function montaTabela() {
    let tabela = document.getElementById("tabela-alunos");

    if (alunos.length === 0) {
        tabela.innerHTML = "<tr style='text-align:center'><td colspan='4'> Não há alunos cadastrados!</td></tr>";
    }
    else {
        tabela.innerHTML = alunos.map(aluno => {
            return `<tr>
                <td>${aluno.id}</td>
                <td>${aluno.nome}</td>
                <td>${aluno.idade}</td>
                <td>${aluno.nota}</td>
            </tr>`;
        }).join("");
    }
}

async function cadastrarAluno() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").valueAsNumber;
    let nota = document.getElementById("nota").valueAsNumber;

    let aluno = {
        nome: nome,
        idade: idade,
        nota: nota
    }
    let response = await fetch(API_URL + "/alunos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(aluno)
    });
    if (response.ok) {
        alert("Sucesso ao cadastrar o aluno!")
    }
    else {
        errorBody = await response.json();
        alert("Falha ao cadastrar aluno: " + errorBody.message);
    }

    listarAlunos();
}
