# API Cadastro de Produtos

Projeto em Node.js que utiliza o framework Express e um banco de dados MySQL para fornecer recursos de CRUD (Create, Read, Update, Delete) para cadastro de produtos.

## Funcionalidades

A API oferece as seguintes funcionalidades:

- Achar produto.
- Listar produtos.
- Cadastrar produto.
- Editar produto.
- Excluir produto.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/)
- MySQL - [Download & Install MySQL](https://dev.mysql.com/downloads/)

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/wendelpantoja/backend-crud-nodejs.git
```

2. Instale as dependências:

```bash
cd backend-crud-nodejs
npm install
```

3. Crie um banco de dados MySQL:

```bash
CREATE DATABASE db_products;
```

4. Inicie o servidor:

```bash
npm start
```

A API estará acessível em [http://localhost:8080](http://localhost:8080).

## Endpoints

A seguir estão os endpoints fornecidos pela API:

- `POST /product/create`: Criação de dados sobre o produto.
- `GET /product/list`: Retorna a lista de produtos cadastrados.
- `GET /product/search/:id`: Busca por um produto específico.
- `PUT /product/update`: Atualiza o produto.
- `DELETE /product/delete/:id`: Deleta um produto específico.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

## Recursos adicionais

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [MySQL Documentation](https://dev.mysql.com/doc/)