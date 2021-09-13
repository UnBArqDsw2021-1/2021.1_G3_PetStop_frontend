# 2021.1_G3_PetStop_backend

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-purple.svg)](https://conventionalcommits.org)

## Documentação

Nossa documentação pode ser encontrada [aqui](https://unbarqdsw2021-1.github.io/2021.1_G3_PetStop_docs/)

## Como rodar a aplicação

### Requisitos

* [Docker](https://docs.docker.com/engine/install)
* [docker-compose](https://docs.docker.com/compose/install/)
* [Node/NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* [Yarn](https://classic.yarnpkg.com/en/docs/install)

### Para iniciar

```
# Build da aplicação
make build

# Subir o container
make up

# Inicia a aplicação
make start
```

### Para finalizar

```
make down

# Caso queira remover o container
make destroy
```

Obs.: Requer nível de permissão similar ao Docker

## Executando analíse de qualidade estática localmente

```
make up-sonar
yarn sonar
make down-sonar
```

Obs.: Requer nível de permissão similar ao Docker
