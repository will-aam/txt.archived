import { poems } from "./data.js";

// Seletores do Leitor
const leitorLateral = document.getElementById("leitor-lateral");
const btnFechar = document.getElementById("fechar-leitor");
const leitorPoemaContainer = document.getElementById("leitor-poema");

// Seletores dos Filtros
const listaFiltros = document.getElementById("lista-filtros");
const spanTagAtiva = document.getElementById("tag-ativa");

function renderizarPoemas(filtro = null) {
  const container = document.getElementById("lista-poemas");
  if (!container) return;

  container.innerHTML = "";

  const poemasParaMostrar = filtro
    ? poems.filter((poema) => poema.tags.includes(filtro))
    : poems;

  if (poemasParaMostrar.length === 0) {
    container.innerHTML =
      '<p style="text-align:center; grid-column: 1/-1;">Nenhuma poesia encontrada com esta tag.</p>';
    return;
  }

  poemasParaMostrar.forEach((poema) => {
    const artigo = document.createElement("article");
    artigo.className = "poema-card";

    // Removi o '...' fixo do preview no JS, pois adicionamos o botão logo em seguida
    // Se o seu data.js já tem os 3 pontinhos no final do preview, você pode deixá-los lá!
    artigo.innerHTML = `
      <h2 class="poema-titulo">${poema.title}</h2>
      <p class="poema-preview">
        ${poema.preview} <span class="ver-mais" data-id="${poema.id}">ver mais</span>
      </p>
      
      <div class="poema-footer">
        <div class="poema-tags">
          ${poema.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <button class="like-btn" data-id="${poema.id}" title="Curtir">❤️ 0</button>
      </div>
    `;

    container.appendChild(artigo);
  });

  // Evento de clique agora é no "ver mais"
  document.querySelectorAll(".ver-mais").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const poemaId = parseInt(e.target.getAttribute("data-id"));
      abrirLeitor(poemaId);
    });
  });
}

function renderizarFiltros() {
  if (!listaFiltros) return;

  const todasAsTags = [...new Set(poems.flatMap((poema) => poema.tags))].sort();

  let htmlBotoes = `<button class="tag-btn active" data-tag="todas">Todas</button>`;

  todasAsTags.forEach((tag) => {
    htmlBotoes += `<button class="tag-btn" data-tag="${tag}">${tag}</button>`;
  });

  listaFiltros.innerHTML = htmlBotoes;

  document.querySelectorAll(".tag-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document
        .querySelectorAll(".tag-btn")
        .forEach((b) => b.classList.remove("active"));

      const botaoClicado = e.target;
      botaoClicado.classList.add("active");

      const tagEscolhida = botaoClicado.getAttribute("data-tag");

      if (tagEscolhida === "todas") {
        spanTagAtiva.textContent = "Todas as poesias";
        renderizarPoemas();
      } else {
        spanTagAtiva.textContent = `#${tagEscolhida}`;
        renderizarPoemas(tagEscolhida);
      }
    });
  });
}

function abrirLeitor(id) {
  const poema = poems.find((p) => p.id === id);
  if (!poema) return;

  leitorPoemaContainer.innerHTML = `
    <h1 class="leitor-poema-titulo">${poema.title}</h1>
    <div class="leitor-poema-texto">${poema.content}</div>
  `;

  leitorLateral.classList.add("aberto");
  document.body.style.overflow = "hidden";
}

btnFechar.addEventListener("click", () => {
  leitorLateral.classList.remove("aberto");
  document.body.style.overflow = "";
});

document.addEventListener("DOMContentLoaded", () => {
  renderizarFiltros();
  renderizarPoemas();
});
