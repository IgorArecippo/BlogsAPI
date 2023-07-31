# API de Blogs!

Este projeto traz uma API poderosa junto a um banco de dados para a produção de conteúdo de um blog!

A aplicação foi desenvolvida em `Node.js` e utiliza o banco de dados `MySQL`, juntamente com o pacote `sequelize` para possibilitar um completo conjunto de operações de criação, leitura, atualização e exclusão de posts.

Além disso, destacam-se as seguintes características:

1. Relação entre as tabelas `user` e `post`: Para realizar um post, é necessário um usuário autenticado.

2. Uso de categorias para os posts: A aplicação trabalha com a relação entre as tabelas `posts` e `categories`, permitindo uma organização mais eficiente do conteúdo.

## Orientações

## 🐋 Rodando no Docker vs Localmente

### 👉 Com Docker

**:warning: Antes de começar, verifique se sua versão do docker-compose é 1.29 ou superior. Caso contrário, atualize-o seguindo este [link](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou acesse a [documentação oficial](https://docs.docker.com/compose/install/). No primeiro artigo, caso a versão atual seja `1.26.0`, substitua pela versão `1.29.2`.**

> :information_source: Inicie os serviços `node` e `db` utilizando o comando `docker-compose up -d --build`.

- Caso esteja utilizando o `mysql` localmente na porta padrão (`3306`), lembre-se de pará-lo ou adapte-o para utilizar a aplicação em containers.

- Os serviços mencionados acima inicializarão dois containers chamados `blogs_api` e `blogs_api_db`.

- A partir deste ponto, você pode executar comandos no container `blogs_api` via linha de comando ou abri-lo no Visual Studio Code.

> :information_source: Use o comando `docker exec -it blogs_api bash`.

- Esse comando proporcionará acesso ao terminal interativo do container criado pelo docker-compose, o qual está executando em segundo plano.

> :information_source: Caso existam dependências [**listadas no arquivo package.json**], instale-as com o comando `npm install` dentro do container.

- **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec`, mencionado acima.

- **:warning: Atenção:** O **git** dentro do container não está configurado com suas credenciais. Faça os commits fora do container ou configure suas credenciais do git dentro do container.

- **:warning: Atenção:** Não execute o comando npm audit fix! Ele atualiza várias dependências do projeto.

- ✨ **Dica:** Recomendamos a extensão `Remote - Containers` (que estará na seção de extensões recomendadas do Visual Studio Code), pois ela permite que você desenvolva sua aplicação diretamente no container Docker, da mesma forma que faz com seus arquivos locais.

<br />

### 👉 Sem Docker

> :information_source: Instale as dependências [**caso existam**] com `npm install`.

- **:warning: Atenção:** Não execute o comando npm audit fix! Ele atualiza várias dependências do projeto.

- **✨ Dica:** Para executar o projeto desta forma, o `node` deve estar instalado em seu computador.

- **✨ Dica:** Utilize a versão 16 do `node`.

<br />

## Observações importantes

O projeto possui uma pasta `src`, e **a aplicação foi construída dentro dessa pasta**.

**Não é necessário usar o comando `npx sequelize-cli init`**, pois já está incluso no projeto.

**Você precisará configurar as variáveis de ambiente para utilizar o MySQL**. Você pode utilizar o [conteúdo de variáveis de ambiente com NodeJS](https://dev.to/pauloricardoz/usando-variaveis-de-ambiente-em-nodejs-env--4ioi) como referência.

O arquivo `.env.example` contém um modelo das variáveis de ambiente utilizadas no projeto. Para o contexto de teste local, é importante configurar as variáveis: `MYSQL_HOST`, `MYSQL_PORT`, `MYSQL_USER`, `MYSQL_PASSWORD`.

```env
#### SERVER VARS
NODE_ENV=development
API_PORT=3000
API_HOST=localhost

#### DATABASE VARS
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DB_NAME=blogs-api
MYSQL_USER=root
MYSQL_PASSWORD=1234

#### SECRECT VARS
JWT_SECRET=suaSenhaSecreta

```

**Variável `JWT_SECRET`:**

Essa variável de ambiente será utilizada tanto para criar o token quanto para verificá-lo. Os testes locais e o avaliador utilizarão a variável de ambiente `JWT_SECRET` para testar os requisitos.

**Scripts prontos para o banco de dados:**

- Deletar o banco de dados:
```json
"drop": "npx sequelize-cli db:drop"
```

- Criar o banco e gerar as tabelas:
```json
"prestart": "npx sequelize-cli db:create && npx sequelize-cli db:migrate"
```

- Inserir dados/popular a tabela:
```json
"seed": "npx sequelize-cli db:seed:all"
```
