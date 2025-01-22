// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar o nome do amigo à lista
function adicionarAmigo() {
    // Pega o valor do campo de input
    const nome = document.getElementById("amigo").value.trim();
    
    // Verifica se o nome não está vazio
    if (nome !== "") {
        // Adiciona o nome ao array de amigos
        amigos.push(nome);
        
        // Adiciona o nome na lista exibida na tela
        const listaAmigos = document.getElementById("listaAmigos");
        const itemLista = document.createElement("li");
        itemLista.textContent = nome;
        listaAmigos.appendChild(itemLista);
        
        // Limpa o campo de input
        document.getElementById("amigo").value = "";
    } else {
        // Caso o nome esteja vazio, exibe mensagem de erro
        alert("Por favor, insira um nome.");
    }
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verifica se existem nomes na lista
    if (amigos.length === 0) {
        // Exibe a mensagem pedindo para adicionar nomes
        alert("Por favor, adicione pelo menos um nome para sortear.");
        return;
    }

    // Sorteia um amigo aleatório da lista
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o resultado do sorteio
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpa resultados anteriores

    const itemResultado = document.createElement("li");
    itemResultado.textContent = `O amigo secreto sorteado é: ${sorteado}`;
    resultadoLista.appendChild(itemResultado);
}
