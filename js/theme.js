// Seleciona todos os botões de tema
const themeBtns = document.querySelectorAll(".theme-btn");

function applyTheme(themeName) {
  // 1. Limpa qualquer tema que esteja no <body>
  document.body.classList.remove("theme-sepia", "theme-night");

  // 2. Adiciona o novo tema (se não for o padrão "default")
  if (themeName !== "default") {
    document.body.classList.add(themeName);
  }

  // 3. Salva a escolha no navegador do usuário
  localStorage.setItem("poesia-theme", themeName);

  // 4. Atualiza o botão ativo visualmente (deixa o fundo dele mais escuro)
  themeBtns.forEach((btn) => {
    if (btn.getAttribute("data-theme") === themeName) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// Quando a página carrega, verifica se o usuário já tinha escolhido um tema antes
const savedTheme = localStorage.getItem("poesia-theme") || "default";
applyTheme(savedTheme);

// Adiciona o evento de "clique" em cada botão
themeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const themeName = btn.getAttribute("data-theme");
    applyTheme(themeName);
  });
});
