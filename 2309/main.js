// Função para criar um objeto aluno
function criarAluno(nome, email, materiaFavorita) {
    return { nome, email, materiaFavorita };
}

// Função para adicionar um card de aluno à página
function adicionarCardAluno(aluno) {
    const alunosContainer = document.getElementById("alunos-container");

    // Criar elemento de card
    const card = document.createElement("div");
    card.classList.add("card");

    // Preencher o card com informações do aluno
    card.innerHTML = `
        <h2>${aluno.nome}</h2>
        <p>Email: ${aluno.email}</p>
        <p>Matéria Favorita: ${aluno.materiaFavorita}</p>
    `;

    // Adicionar o card à página
    alunosContainer.appendChild(card);
}

// Ler dados dos 10 alunos e adicioná-los à página
for (let i = 1; i <= 10; i++) {
    const nome = prompt(`Digite o nome do aluno ${i}:`);
    const email = prompt(`Digite o email do aluno ${i}:`);
    const materiaFavorita = prompt(`Digite a matéria favorita do aluno ${i}:`);

    const aluno = criarAluno(nome, email, materiaFavorita);
    adicionarCardAluno(aluno);
}
