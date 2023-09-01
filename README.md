# token_node
Projeto apenas para demonstrar funcionamento de token, sem se preocupar com definições de segurança.

## PASSOS INICIAIS
Após clonar o projeto use o comando npm install dentro da raiz do mesmo, a versão node utilizada é a v18.
Logo após clonar usar o comando source .env-example para carregar variáveis de ambiente.
Abra seu postman e importe o arquivo que esta dentro da pasta colecao_de_requests.
Dentro do postman você terá algumas rotas, a ideia é cadastrar um usuário na rota de cadastro, fazer login e depois ir na rota 'get' para obter a listagem dos usuários.

### USANDO token no postman
Após usar a rota de login você terá um objeto com uma string token, basta copiar essa string sem as aspas, depois ir na rota get pelo postman, ir na parte de Authorization selecionar token Bearer e onde estiver escrito token, você irá colar seu token, e ai sim pode clicar em send.
** Existe uma imagem dentro da pasta colecao_de_requests que mostra o local.

### Base de dados

Utilizamos mongodb local, com a database com nome de db_token, você terá que criar, mas não há necessidade de criar collection 'users' para armazenar os usuários, ela seria criada durante o primeiro cadastro.


### AGRADECIMENTO
Everton Dev (nome do canal do youtube)
