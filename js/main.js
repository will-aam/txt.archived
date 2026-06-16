import { poems } from "./data.js";

// Seletores do Leitor
const leitorLateral = document.getElementById("leitor-lateral");
const btnFechar = document.getElementById("fechar-leitor");
const leitorPoemaContainer = document.getElementById("leitor-poema");

// Seletores dos Filtros e Bottom Sheet
const listaFiltros = document.getElementById("lista-filtros");
const spanTagAtiva = document.getElementById("tag-ativa");
const btnAbrirFiltros = document.getElementById("btn-abrir-filtros");
const filtrosSheet = document.getElementById("filtros-sheet");
const filtrosOverlay = document.getElementById("filtros-overlay");
const sheetHandle = document.getElementById("fechar-sheet-handle");

// --- LÓGICA DO BOTTOM SHEET (MOBILE) ---
function abrirSheet() {
  filtrosSheet.classList.add("aberto");
  filtrosOverlay.classList.add("ativo");
  document.body.style.overflow = "hidden"; // Impede rolar a tela de fundo
}

function fecharSheet() {
  filtrosSheet.classList.remove("aberto");
  filtrosOverlay.classList.remove("ativo");
  document.body.style.overflow = ""; // Devolve a rolagem normal
}

// Eventos de clique para abrir/fechar o Sheet
if (btnAbrirFiltros) btnAbrirFiltros.addEventListener("click", abrirSheet);
if (filtrosOverlay) filtrosOverlay.addEventListener("click", fecharSheet);
if (sheetHandle) sheetHandle.addEventListener("click", fecharSheet); // Clicar na barrinha também fecha

// --- LÓGICA DOS POEMAS ---
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

    artigo.innerHTML = `
      <h2 class="poema-titulo">${poema.title}</h2>
      <p class="poema-preview">
        ${poema.preview} <span class="ver-mais" data-id="${poema.id}">... ver mais</span>
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

      // O GRANDE TRUQUE: Fecha a gaveta automaticamente após selecionar!
      fecharSheet();
    });
  });
}

// --- LÓGICA DO LEITOR LATERAL ---
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

// --- INICIALIZAÇÃO ---
document.addEventListener("DOMContentLoaded", () => {
  renderizarFiltros();
  renderizarPoemas();
});
