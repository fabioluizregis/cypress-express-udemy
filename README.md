# Cypress Express Udemy Exercises

Este repositório contém os exercícios que completei durante o curso Udemy "Cypress Express" ([link para o curso](https://www.udemy.com/course/cypress-express/)).

## Configurando o Projeto

### 1. Iniciando um projeto Node.js

Comece criando um novo projeto Node.js usando o npm:

```bash
npm init
```
Este comando gera um arquivo package.json que serve como base para a configuração do seu projeto.

2. Instalando o Cypress
Instale o Cypress como uma dependência de desenvolvimento usando o npm:

```bash
npm install cypress --save-dev
```

Isso instala o Cypress dentro do diretório do seu projeto.

Opções adicionais:

Para desinstalar o Cypress, use:

```bash
npm uninstall cypress
```

Para instalar uma versão específica do Cypress (por exemplo, versão 12.2.0), use:

```bash
npm install cypress@12.2.0 --save-dev
```

3. Instalando o Allure Reports e o plugin Cypress Allure
Vamos usar os relatórios Allure para visualização dos resultados dos testes. Instale os pacotes necessários:

```bash
npm install -D @shelex/cypress-allure-plugin
npx add allure-commandLine -D
```

Isso instala o @shelex/cypress-allure-plugin para integração com o Allure e o pacote allure-commandLine para gerenciar os relatórios Allure.

Executando a aplicação e os testes

1. Iniciando o Cypress
Inicie o executor de testes do Cypress em uma interface gráfica para fácil interação:

```bash
npx cypress open
```

2. Executando o ambiente de teste local
A aplicação sob teste reside na pasta app. Para acessá-la no seu navegador, navegue para http://localhost:3000.

3. Configurando e iniciando o projeto da API
Navegue para o diretório app/markL/api e instale as dependências do projeto:

```bash
npm install
```

Em seguida, inicialize o banco de dados da API (assumindo que você tenha um script de configuração do banco de dados):

```bash
npm run db:init
```

Finalmente, inicie o servidor da API:

```bash
npm run dev
```

4. Configurando e iniciando o projeto web
Mova-se para o diretório app/markL/web e instale suas dependências:

```bash
npm install
```

Inicie a aplicação web no modo de desenvolvimento:

```bash
npm run dev
```

5. Executando os testes do Cypress em modo headless
Para executar os testes do Cypress em modo headless (sem uma interface do navegador), use:

```bash
npx cypress run
```

6. Executando testes em um navegador específico
Se você preferir executar os testes em um navegador diferente do Electron (o padrão), especifique o nome do navegador:

```bash
npx cypress run --browser BrowserName
```

Por exemplo, para executar testes no Chrome:

```bash
npx cypress run --browser chrome
```

7. Gerando relatórios Allure
Execute os testes do Cypress com a variável de ambiente allure=true para gerar relatórios Allure:

```bash
npx cypress run --env allure=true
```bash