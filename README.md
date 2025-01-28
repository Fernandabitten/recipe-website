# <img src="images/Icon_logo.png" width="60px"> Leve Sabor
## Projeto Web I - IFCE

Este projeto foi desenvolvido como parte da disciplina de **Web I** no IFCE. O objetivo é criar um site com páginas estáticas usando **HTML**, **CSS** e **JavaScript**, além de publicar o projeto utilizando o **GitHub Pages**.

## 🎯 Objetivo do Projeto

- Criar um site com:
  - **Área pública**: página inicial e de detalhes dos objetos-tema.
  - **Área administrativa**: login, cadastro de objetos e usuários.
- Aplicar conceitos de HTML semântico, CSS e GitHub Pages.
- Praticar as melhores práticas no uso de HTML.

## 🎨 Design do Projeto
O layout do projeto foi desenvolvido previamente no **Figma** e serve como guia para a implementação das páginas HTML.  
Acesse o protótipo interativo clicando no link abaixo:  
👉 [Protótipo no Figma - Leve Sabor](https://www.figma.com/proto/UgfbMzpEacpUJ8VgH4tHx7/Leve-Sabor?node-id=50-72&p=f&t=l8f3DpPzzWq5DA6t-0&scaling=min-zoom&content-scaling=fixed&page-id=50%3A71&starting-point-node-id=50%3A72)
Você deve ter uma conta <a href="https://www.figma.com/">Figma</a> para acessá-lo..

## 🌟 Funcionalidades
### Área Pública
- **Página Inicial:** Exibição de uma coleção de objetos-tema com dados relevantes (título, imagem e descrição).
- **Página de Detalhes:** Visualização de todos os dados sobre um objeto-tema.

Elementos em todas as páginas:
- Cabeçalho com título e logo do site.
- Menu de navegação para acesso às páginas públicas e de administração.
- Rodapé com nome do autor e link para a página sobre o autor.

### Área de Administração
- **Página de Login:** Acesso à área administrativa.
- **Página de Cadastro de Objetos-tema:** Formulário para adicionar/editar objetos e tabela com lista de objetos cadastrados, incluindo botões para editar e apagar.
- **Página de Cadastro de Usuários:** Formulário para adicionar/editar usuários e tabela com lista de usuários cadastrados, incluindo botões para editar e apagar.

## 🛠️ Tecnologias Utilizadas
   
- **HTML:** Estrutura do site.
- **CSS:** Estilização básica do conteúdo.
- **JavaScript:** Implementação de funcionalidades (futuramente nas unidades seguintes).
- **GitHub Pages:** Publicação do site.

## 🚀 Como Utilizar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SeuUsuario/seu-repositorio.git
2. Abra o arquivo index.html: Execute o arquivo index.html no navegador para visualizar a página inicial.

[👉 Acesse o site aqui!!](https://fernandabitten.github.io/recipe-website/)


## ✨ Próximos Passos
- **Adição de Estilos**: Melhorar o visual do site com CSS.
- **Interatividade**: Adicionar funcionalidades com JavaScript.
- **Validações**: Implementar validação nos formulários.

## 🗂️ Estrutura do Projeto
```plaintext
recipe-website/
├── index.html                   # Página inicial do site
├── details.html                # Página de detalhes do objeto-tema
├── admin/                       # Área de administração (em desenvolvimento)
│   ├── login.html               # Página de login
│   ├── register.html            # Página de cadastro de objetos-tema
│   ├── usuarios.html            # Página de cadastro de usuários
│   └── css/                     # Estilos específicos da área administrativa
│       └── admin-styles.css
├── css/                         # Estilos gerais do site (em desenvolvimento)
│   ├── main.css                 # Estilos principais da área pública
├── js/                          # Scripts JavaScript
│   ├── main.js                  # Scripts principais da área pública
│   └── admin.js                 # Scripts específicos da área administrativa
├── images/                      # Imagens usadas no site
└── README.md                    # Arquivo de documentação do projeto 

