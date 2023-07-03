# [EN] Serverless Example (AWS Lambda)

## Description

The current project consists of a Serverless application with AWS Lambda, Typescript, and Serverless Framework, focusing on implementing design patterns, unit testing, commit standardization, and staging scenarios. The goal is to improve performance and organize future developed applications.

## Dependencies

The main dependencies used in this project are:

- Serverless: tool used to facilitate the use of AWS tools with a single model.
- Jest and Babel: used to perform unit tests.
- Commitizen, Commitlint and Husky: used to standardize commits.
- @hapi/joi: used to validate parameters forwarded through HTTP requests.

## Structure

Next, the folder structure used in this project:

- `src`: main source code folder.
  - `config`: folder used to store environment variables and other necessary configurations.
  - `example`: route example folder, including cases with and without parameter passing.
    - `controllers`: folder used to control endpoints.
    - `services`: folder used to execute the service designated to endpoints.
    - `models`: folder with parameter validators.
  - `handler`: file responsible for centralizing the controllers to be consumed in the `serverless.yml` file and unit tests.
- `tests`: folder used to store the unit test files and mocks to demonstrate request parameters.
- `utils`: folder with utility functions and classes used throughout the code.
- `serverless.yml`: central project file containing all necessary configurations for AWS, environment settings, and routes.

## Scripts

The scripts available in this project are:

- `start`: script used to start the project locally.
- `test`: script used to perform tests.
- `commit`: script used to perform commits.
- `delete`: script used to remove the project from AWS.
- `deploy:qa`: script used to deploy the project in a test environment.
- `deploy:prod`: script used to deploy the project in a production environment.

## References

The main references used in this project were:

- [Serverless Framework documentation](https://www.serverless.com/framework/docs)
- [Jest documentation](https://jestjs.io/pt-BR/docs/getting-started)
- [AWS Lambda documentation](https://docs.aws.amazon.com/lambda/index.html)

# [PT] Serverless Example (AWS Lambda)

## Descrição

O projeto atual consiste em uma aplicação Serverless com AWS Lambda, Typescript e Serverless Framework, tendo como foco a implementação de padrões de projeto, testes unitários, padronização de commits e cenários de homologação. O objetivo é melhorar a performance e organizar as aplicações desenvolvidas futuramente.

## Dependências

As principais dependências utilizadas neste projeto são:

- Serverless: ferramenta utilizada para facilitar o uso das ferramentas da AWS com um único modelo.
- Jest e Babel: utilizados para a realização de testes unitários.
- Commitizen, Commitlint e Husky: utilizados para padronizar os commits.
- @hapi/joi: utilizado para validar os parâmetros encaminhados através de requisições http.

## Estrutura

A seguir, a estrutura de pastas utilizada neste projeto:

- `src`: pasta principal do código-fonte.
  - `config`: pasta utilizada para armazenar as variáveis de ambiente e outras configurações necessárias.
  - `example`: pasta de exemplo de rota, incluindo casos com e sem passagem de parâmetros.
    - `controllers`: pasta utilizada para controlar os endpoints.
    - `services`: pasta utilizada para executar o serviço designado para os endpoints.
    - `models`: pasta com validadores de parâmetros.
  - `handler`: arquivo responsável por centralizar os controllers a serem consumidos no arquivo `serverless.yml` e nos testes unitários.
- `tests`: pasta utilizada para armazenar os arquivos de testes unitários e mocks para demonstração dos parâmetros de requisições.
- `utils`: pasta com funções e classes utilitárias utilizadas em todo o código.
- `serverless.yml`: arquivo central do projeto, contendo todas as configurações necessárias para a AWS, configurações de ambiente e rotas.

## Scripts

Os scripts disponíveis neste projeto são:

- `start`: script utilizado para iniciar o projeto localmente.
- `test`: script utilizado para realizar os testes.
- `commit`: script utilizado para realizar os commits.
- `delete`: script utilizado para remover o projeto da AWS.
- `deploy:qa`: script utilizado para realizar o deploy do projeto em ambiente de testes.
- `deploy:prod`: script utilizado para realizar o deploy do projeto em ambiente de produção.

## Referências

As principais referências utilizadas neste projeto foram:

- [Documentação Serverless Framework](https://www.serverless.com/framework/docs)
- [Documentação Jest](https://jestjs.io/pt-BR/docs/getting-started)
- [Documentação da AWS Lambda](https://docs.aws.amazon.com/lambda/index.html)
