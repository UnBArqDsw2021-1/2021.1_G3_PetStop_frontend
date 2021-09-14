# 2021.1_G3_PetStop_frontend

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-purple.svg)](https://conventionalcommits.org)

## Documentação

Nossa documentação pode ser encontrada [aqui](https://unbarqdsw2021-1.github.io/2021.1_G3_PetStop_docs/)

## Como rodar a aplicação

### Requisitos

- [Docker](https://docs.docker.com/engine/install)
- [docker-compose](https://docs.docker.com/compose/install/)
- [Node/NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)

### Variáveis de ambiente

É necessário criar um arquivo `.env.local` na raiz do projeto, atualmente não é necessário colocar nenhuma variável porém pode ser utilizado no futuro.

### Para iniciar

```
make up
```

### Para forçar um novo build

```
make build
```

### Para finalizar

```
make down

# Caso queira remover o container
make destroy
```

Obs.: Requer nível de permissão similar ao Docker