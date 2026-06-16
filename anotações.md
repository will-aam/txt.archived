Estrutura
/
├── index.html # Página principal (lista de poemas/home)
├── poema.html # Página modelo para ler um poema específico
├── css/
│ ├── style.css # Estilos globais (substituindo o globals.css)
│ ├── components.css # Estilos para botões, cards e modais (adaptando o visual do shadcn/ui)
│ └── themes/ # Seus arquivos de tema atuais (default, starry-night, retro, etc.)
├── js/
│ ├── main.js # Lógica de inicialização e injeção de dados no HTML
│ ├── theme.js # Lógica para alternar entre os temas
│ └── data.js # (Opcional) Array com os poemas estáticos enquanto o banco não é conectado
└── assets/
├── img/ # placeholder.jpg, logos
└── icons/ # SVGs
