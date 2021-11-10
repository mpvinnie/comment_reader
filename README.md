<h1 align="center">
  Comment Reader
</h1>

Comment Reader é uma aplicação que permite a criação de comentários e a leitura do comentário por voz. Desenvolvido utlizando [React.Js](https://pt-br.reactjs.org/) e [NodeJS](https://nodejs.org/en/) na linguagem [Typescript](https://www.typescriptlang.org/).


## Frameworks e Libs

* [React.js](https://pt-br.reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [Express JS](https://expressjs.com/pt-br/)
* [IBM Watson](https://www.ibm.com/br-pt/watson)

## Pré-requisitos

Essas instruções fornecerão uma cópia do projeto completo instalado e funcionando em sua máquina local para fins de desenvolvimento e teste.

O projeto pode ser executado com npm ou yarn, então escolha uma das abordagens abaixo caso você não tenha nenhum instalado em seu sistema.

* Para rodar o projeto, você precisa instalar o [NodeJS](https://nodejs.org/en/download/) na sua máquina.

* Você precisa de uma conta na [IBM Cloud](https://cloud.ibm.com/registration) para obter sua `API_KEY` e `URL`.
* **Npm** é distribuído com o Node.js, o que significa que quando você baixa o Node.js, o npm é instalado automaticamente no seu computador. [Download Node.js](https://nodejs.org/en/download/)

* O **Yarn** é um gerenciador de pacotes criado pela equipe do Facebook e costuma ser mais rápido que o npm em geral.  [Download Yarn](https://yarnpkg.com/en/docs/install)

## Banco de Dados e Docker

O Projeto usa [MySql](https://www.mysql.com/) executando em um container do [Docker](https://www.docker.com/).

Segue o link para baixar e configurar o docker: [install docker](https://www.notion.so/Instalando-Docker-6290d9994b0b4555a153576a1d97bee2).

Com o docker instalado, você precisa criar um container do MySql no Docker.

Em um terminal, execute:
```bash
$ sudo docker run --name smarkio_mysql -e MYSQL_ROOT_PASSWORD=docker -p 3306:3306 -d mysql --default-authentication-plugin=mysql_native_password
```
Esse comando criará um container chamado `smarkio_mysql` com a senha `docker` e a porta padrão do mysql `3306`.

Após finalizar a criação, execute `$ sudo docker ps` e verifique se o container está em execução, se não estiver, execute `$ sudo docker start smarkio_mysql`.

Agora você precisa se conectar e criar um banco de dados manualmente no container do docker, você pode utilizar o [DBeaver](https://dbeaver.io/) ou o [BeeKeeper](https://www.beekeeperstudio.io/) para gerenciar seus bancos de dados.

Para as configuraões de conexão, você precisa inserir as seguintes opções:
```ts
 Type: MySql
 Host: localhost
 Port: 3306
 User: root
 Password: docker
```

Após se conectar, crie um banco de dados chamado `smarkio_test`.


## Instalação

* Para baixar o projeto siga as instruções abaixo:

#### Backend (API)

```bash
$ git clone https://github.com/mpvinnie/comment_reader.git
$ cd comment_reader/server
```

* Instale as dependências e inicie o projeto:

```bash
$ yarn
$ yarn dev
```

ou

```bash
$ npm install
$ npm dev
```

#### FrontEnd (React)

* Com o projeto já clonado entre no diretório do app 

```bash
$ cd comment_reader/web
```

* Instale as dependências e inicie o projeto:

```bash
$ yarn
$ yarn start
```

ou

```bash
$ npm install
$ npm start
```

Renomeie o arquivo `.env.example` to `.env` que está em `server` e adicione suas credenciais de acesso à API do [IBM Watson](https://cloud.ibm.com/docs/watson?topic=watson-iam) mencionado no pré-requsito.

Isso é tudo! =)

## Licença
[MIT](https://choosealicense.com/licenses/mit/)
