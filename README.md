# [EN] Translate function (AWS Lambda)

## Description

The current project was thought about using a function for global translation of my personal portfolio. The architecture was based on a design by a great friend [Iuri Aguiar](https://github.com/iuriaguiarr/Serverless) together with the behavioral and structural logic of the Serverless framework, which I learned from a great tutor [Erick Wendell](https://www.linkedin.com/in/erickwendel/)

## Dependencies

The main dependencies used in this project are:

- Serverless: tool used to facilitate the use of AWS tools with a single model.
- Jest and Babel: used to perform unit tests.
- Commitizen, Commitlint and Husky: used to standardize commits.
- @hapi/joi: used to validate parameters forwarded through HTTP requests.
- Aws-sdk: for using the various AWS services including translate which serves to perform the translation

## Structure

Next, the folder structure used in this project:

- `src`: main source code folder.
  - `config`: folder used to store environment variables and other necessary configurations.
  - `translate`: folder for principal route
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

# [PT] Função de tradução (AWS Lambda)

## Descrição

O projeto atual foi pensado a respeito do uso de uma função para tradução a nível global do meu portifolio pessoal.A arquitetura foi baseada em uma na concepção de um grande amigo [Iuri Aguiar](https://github.com/iuriaguiarr/Serverless-example) adjunto da logica comportamental e estrutural do framework Serverless cuja a qual aprendi com um grande tutor [Erick Wendell](https://www.linkedin.com/in/erickwendel/)

## Dependências

As principais dependências utilizadas neste projeto são:

- Serverless: ferramenta utilizada para facilitar o uso das ferramentas da AWS com um único modelo.
- Jest e Babel: utilizados para a realização de testes unitários.
- Commitizen, Commitlint e Husky: utilizados para padronizar os commits.
- @hapi/joi: utilizado para validar os parâmetros encaminhados através de requisições http.
- Aws-sdk:para utilização dos diversos serviços da AWS incluindo o translate o qual serve para realizar a tradução

## Estrutura

A seguir, a estrutura de pastas utilizada neste projeto:

- `src`: pasta principal do código-fonte.
  - `config`: pasta utilizada para armazenar as variáveis de ambiente e outras configurações necessárias.
  - `translate`: pasta da rota principal
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
