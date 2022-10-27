informacoes do projeto:

aplicacao monolitica divida conforme padrao de arquitetura MVC
//Models, Views, Controller

Frontend da aplicacao:

Camada View: 
Utilizado template engine EJS para criar estruturas componentizadas 
** configuracao
/partials/head.ejs
/partials/foot.ejs

** componentes
/partials/header.ejs

as estruturas de páginas estão seguidas no doretorio view
departamentos.ejs
funcionarios.ejs
index.ejs - página principal do projeto (Home page)
manutencoes.ejs
motoristas.ejs
multas.ejs
solicitacoes.ejs
veiculos.ejs

Backend da aplicacao

Camada Model: 
Abriga momentaneamente o modelo do banco de dados para o usuario

Camada Controller:
*** Gerencia toda a regra de negócios e cria os parametros de atividades a serem realizados na aplicacao

Diretorio de rotas:
Renderiza paginas da aplicacao e os respectivos titulos dos documentos
criar rotas para realizar as atividades da aplicacao.

modelo de ENV:
PORT='3030'
STRING_DB_CONNECTION='mongodb://localhost:27017/controle-de-frotas'




