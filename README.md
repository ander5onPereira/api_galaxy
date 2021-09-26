<div align="center">
<h1><strong>💻 API Node Js - Galaxy💻</strong></h1>

<h2> API base para o app React Native <a href="https://github.com/ander5onPereira/galaxy.git">Galaxy</a> contrução em NodeJs.</h2> 
<h3>
  <a href="https://nodejs.org/en/">🔗 Server Nodejs </a>
</h3>

</div>

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)

<div align="center">

## 🛠 Dependencias

<br>

[![Badge](https://img.shields.io/static/v1?label=license&message=MIT&color=<COLOR>&style=flat-square)](https://github.com/ander5onPereira/api_galaxy/blob/cfad59f73337f5250e5a4ea008a7d7d3b367af4e/LICENSE)
![Badge](https://img.shields.io/static/v1?label=express&message=^4.17.1&color=<COLOR>&style=flat-square)
![Badge](https://img.shields.io/static/v1?label=typeorm&message=^0.2.29&color=orange&style=flat-square)
![Badge](https://img.shields.io/static/v1?label=sqlite3&message=^5.0.2&color=<COLOR>&style=flat-square)

<h4 align="center">

    ✔️  Node Js 🚀 Final API Galaxy ✔️

</h4>
</div>
<br>

## Requisito

- Node Js

## Clone este repositório

> $ git clone <https://github.com/ander5onPereira/api_galaxy.git> <br>

## Acesse a pasta do projeto no terminal/cmd

> $ cd api_galaxy
> <br>

## Instale as dependências

> $ yarn install
> <br>

- ``Add .env seguindo o modelo .env.exemple``

## Execute a aplicação em modo de desenvolvimento

> $ yarn dev
> <br>

## O servidor inciará na porta:3001 se não alterado no .env

- acesse <http://localhost:3001>

## Gerar Build

> $ yarn build
> <br>

## Execute a aplicação modo produção

> $ yarn start
> <br>

## Comandos adicionais

Cria uma nova migration:

> yarn typeorm migration:create -n NOME

Executar migration:

> yarn typeorm migration:run

Reverter migration:

> yarn typeorm migration:revert

Apagar todo o banco de dados:

> yarn typeorm schema:drop

## Interface_Funcionario

    - id?: int;
    - nome: string;
    - sobrenome: string;
    - email: string;
    - nis: string;

# REST API

Seguem a descrição das funcionalidades da api. 

## ⚙ Status da api

### Request

> `GET /status`

    URL: http://localhost:3330/status

### ✔ Response Success

    HTTP/1.1 200 OK
    Content-Type: application/json; 
    Location: /status

    return: true

## ➕ Cadastro de Funcionario

### Request

> `POST /funcionanrio`

    URL: http://localhost:3001/funcionario
    body.json( {Interface_Funcionario} )

### ✔ Response Success

    Status: 201 Created
    Content-Type: application/json
    Location: /funcionario

    return: {Interface_Funcionario}

## 📝 Atualizar Funcionario

### Request

> `PUT /usuario`

    URL: http://localhost:3001/funcionario/{id}
    body.json( {Interface_Funcionario} )

### ✔ Response Success

    Status: 200 OK
    Content-Type: application/json
    Location: /funcionario

    return: {Message:"sucsess"}

## 📝 Deletar Funcionario

### Request

> `DELETE /funcionario`

    URL: http://localhost:3001/funcionario/{id}

### ✔ Response Success

    Status: 204 OK
    Content-Type: application/json
    Location: /funcionario

    return: {Message:"success"}

## 📝 Listar Funcionario

### Request

> `GET /funcionario`

    URL: http://localhost:3001/funcionario

### ✔ Response Success

    Status: 200 OK
    Content-Type: application/json
    Location: /funcionario

    return: [{Interface_Funcionario}]

## 📝 Buscar Funcionario

### Request

> `GET /search/{id}`

    URL: http://localhost:3001/search/{id}

### ✔ Response Success

    Status: 200 OK
    Content-Type: application/json
    Location: /search

    return: [{Interface_Funcionario}]


