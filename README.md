# Netflix Clone
Este projeto é um clone interativo da interface da Netflix feito para a conclusão do projeto 04 do módulo de React da Trilha síncrona Fullstack Jr. da +PraTi.

## Objetivo do desenvolvimento desta aplicação 🎯
Clonar a interface da Netflix para efeitos de aprendizado da biblioteca React e demais bibliotecas adjacentes.

## Como usar a aplicação?
Para acessar a aplicação, é necessário utilizar esse cadastro no formulário de login:
- Usuário: emailparaentrar@gmail.com
- Senha: 12345678

## Funcionalidades
- **Remember Me:**
    - A funcionalidade "Lembrar-se de mim" tem por objetivo permitir ao usuário um acesso continuo ao site, mesmo que esse resolva fechar a página. Caso essa checkbox não seja marcada, o usuário deve se autenticar antes de entrar novamente na página.

- **Busca:**
    - É possível buscar por conteúdos específicos a partir da barra de busca.
    
- **Modal de apresentação:**
    - Ao clicar em um resultado da busca ou em um dos conteúdos mostrados no carrossel, um modal se abrirá com informações adicionais sobre o conteúdo clicado.

## Tecnologias utilizadas
- **React:** para a componentização e renderização das páginas;
- **Axios:** para fazer requisições assíncronas;
- **React Icons:** para a utilização de ícones e símbolos;
- **React Router Dom:** para a criação de rotas;
- **Tailwind CSS:** para a estilização de páginas e componentes.

## Use o projeto localmente
1. Clone o repositório:
```
git clone https://github.com/Yasmin-Carloto/6-Netflix-Clone.git
```

2. Digite no terminal, dentro do diretório do projeto:
```
npm install
```

3. Crie um arquivo **.env**.

4. Configure sua chave de [API do TMDB](https://developer.themoviedb.org/v4/reference/intro/getting-started) no arquivo **.env**
```
VITE_APP_TMDB_API_KEY=
```

5. Agora, use o projeto localmente: 
```
npm run dev
```