// Salva nome e redireciona
function entrar() {
  const name = document.getElementById("name").value;
  if (name) {
    localStorage.setItem("nome", name);
    window.location.href = "index-2.html";
  } else {
    alert("Digite seu nome.");
  }
}

let listadevalores = [];

// Adiciona gasto com título e valor
function adicionar() {
  const titulo = document.getElementById("titulo").value;
  const valor = Number(document.getElementById("valor").value);

  if (titulo && valor) {
    listadevalores.push({ titulo, valor });
    localStorage.setItem("gastosSalvos", JSON.stringify(listadevalores));
    atualizar();
    renderizarItens();
    document.getElementById("titulo").value = "";
    document.getElementById("valor").value = "";
  }
}

// Atualiza saldo e gastos totais
function atualizar() {
  const salario = Number(document.getElementById("salario").value);
  const total = listadevalores.reduce((acc, item) => acc + item.valor, 0);
  const saldofinal = salario - total;

  document.getElementById("saldo").textContent = saldofinal + " R$";
  document.getElementById("gastos").textContent = total + " R$";
}

// Renderiza os itens na tela com botão apagar
function renderizarItens() {
  const container = document.getElementById("resultado");
  container.innerHTML = "";

  listadevalores.forEach((item, indice) => {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = `${item.titulo} - R$${item.valor}`;

    const btn = document.createElement("button");
    btn.textContent = "Apagar";
    btn.style.marginLeft = "10px";
    btn.onclick = () => apagarItem(indice);

    div.appendChild(btn);
    container.appendChild(div);
  });
}

// Apaga item individual
function apagarItem(indice) {
  listadevalores.splice(indice, 1);
  localStorage.setItem("gastosSalvos", JSON.stringify(listadevalores));
  atualizar();
  renderizarItens();
}

// Apaga todos os dados
function apagarTudo() {
  localStorage.clear();
  listadevalores = [];
  document.getElementById("resultado").innerHTML = "";
  atualizar();
}

// Carrega dados ao iniciar a página
window.onload = function () {
  const nome = localStorage.getItem("nome");
  if (nome) {
    const nomeSpan = document.getElementById("nomeUsuario");
    if (nomeSpan) nomeSpan.textContent = nome;
  }

  const dados = localStorage.getItem("gastosSalvos");
  if (dados) {
    listadevalores = JSON.parse(dados);
    atualizar();
    renderizarItens();
  }
}


  


