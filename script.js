// script.js

let amigos = [];

document.getElementById('adicionarBtn').addEventListener('click', function () {
    const nomeInput = document.getElementById('nomeInput');
    const nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
    } else {
        amigos.push(nome);
        nomeInput.value = "";
        atualizarLista();
    }
});

document.getElementById('sortearBtn').addEventListener('click', function () {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um nome.");
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
});

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach(function (nome) {
        const li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}
