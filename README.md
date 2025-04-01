![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

# <img src="public/images/Icon_logo.png" width="40px"> Leve Sabor
## Projeto Web I - IFCE

Este projeto foi desenvolvido como parte da disciplina de **Web I** no IFCE. O objetivo é criar um site com páginas estáticas usando **HTML**, **CSS** e **JavaScript**, além de publicar o projeto utilizando o **GitHub Pages**.

## Objetivo do Projeto

- Criar um site com:
  - **Área pública**: página inicial e de detalhes dos objetos-tema.
  - **Área administrativa**: login, cadastro de objetos e usuários.
- Aplicar conceitos de HTML semântico, CSS e GitHub Pages.
- Praticar as melhores práticas no uso de HTML.

## Design do Projeto
O layout do projeto foi desenvolvido previamente no **Figma** e serve como guia para a implementação das páginas HTML.  
Acesse o protótipo interativo clicando no link abaixo:  
👉 [Protótipo no Figma - Leve Sabor](https://www.figma.com/proto/UgfbMzpEacpUJ8VgH4tHx7/Leve-Sabor?node-id=50-72&p=f&t=l8f3DpPzzWq5DA6t-0&scaling=min-zoom&content-scaling=fixed&page-id=50%3A71&starting-point-node-id=50%3A72)
Você deve ter uma conta <a href="https://www.figma.com/">Figma</a> para acessá-lo..

## Funcionalidades
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

## Tecnologias Utilizadas
   
- **HTML:** Estrutura do site.
- **CSS:** Estilização básica do conteúdo.
- **JavaScript:** Implementação de funcionalidades (futuramente nas unidades seguintes).
- **GitHub Pages:** Publicação do site.

## Como Utilizar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SeuUsuario/seu-repositorio.git
2. Abra o arquivo index.html: Execute o arquivo index.html no navegador para visualizar a página inicial.

[👉 Acesse o site aqui!!](https://fernandabitten.github.io/recipe-website/)

## Estrutura do Projeto
```
recipe-website/
├── index.html                   # Página inicial
├── public/                      # Área pública
│   ├── details.html             # Página de detalhes da receita
│   ├── /images                  # Imagens usadas no projeto
|   ├── /css                     # Estilo e variáveis css
|   ├── /js                      # JavaScript
├── admin/                       # Área de administração 
│   ├── login.html               # Página de login
│   ├── recipe-management.html   # Página de gerenciamento das receitas
│   ├── user_management.html     # Página de gerenciamento de usuários
|   ├── /css                     # Estilo
└── README.md                    # Arquivo de documentação do projeto 
```
