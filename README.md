# Documentação do Projeto DevEventos

## Visão Geral

O DevEventos é uma plataforma desenvolvida para permitir que usuários visualizem eventos de tecnologia, cadastrem palestrantes, e interajam de várias outras formas com o ecossistema de eventos. Este projeto é construído utilizando tecnologias de ponta no desenvolvimento web, incluindo o .NET 7 para o backend e o Angular 16 para o frontend, com SQLite como sistema de gerenciamento de banco de dados.

### Tecnologias Utilizadas

- **Backend:** .ASP NET 7
- **Frontend:** Angular 16
- **Banco de Dados:** SQLite

## Funcionalidades

O DevEventos oferece uma série de funcionalidades destinadas a melhorar a experiência de organizadores de eventos e participantes, incluindo:

- **Visualização de Eventos:** Os usuários podem navegar por um catálogo de eventos de tecnologia, visualizando detalhes como datas, locais e tópicos abordados.
- **Cadastro de Palestrantes:** Permite que os usuários cadastrem palestrantes, fornecendo informações relevantes como nome, biografia e tópicos de especialidade.
- **Gerenciamento de Eventos:** Os organizadores podem criar, editar e excluir eventos, além de gerenciar inscrições e feedback dos participantes.
- **Autenticação e Autorização:** Segurança integrada para garantir que apenas usuários autorizados possam gerenciar eventos e acessar informações sensíveis.

## Arquitetura

### Backend (.ASP NET 7)

O backend do DevEventos é construído utilizando o .ASP NET 7, oferecendo uma API RESTful robusta para comunicação com o frontend. A estrutura segue os princípios de design limpo, com uma separação clara entre a lógica de negócios, acesso a dados e apresentação.

#### Principais Características:

- **Controllers:** Responsáveis por receber as solicitações HTTP e direcioná-las para os serviços adequados.
- **Serviços:** Contêm a lógica de negócios e chamadas para operações de banco de dados.
- **Entity Framework Core:** Utilizado para o ORM (Object-Relational Mapping), facilitando as operações CRUD com o banco de dados SQLite.

### Frontend (Angular 16)

O frontend é desenvolvido com Angular 16, oferecendo uma experiência de usuário dinâmica e responsiva. Utiliza serviços modernos e componentes reutilizáveis, seguindo as melhores práticas de desenvolvimento frontend.

#### Principais Características:

- **Componentes Reutilizáveis:** Para telas e funcionalidades comuns, promovendo uma abordagem DRY (Don't Repeat Yourself).
- **Serviços Angular:** Para gerenciar chamadas HTTP, autenticação e outras operações transversais.
- **Roteamento:** Para navegação entre diferentes vistas da aplicação.

### Banco de Dados (SQLite)

SQLite é escolhido devido à sua simplicidade, leveza e facilidade de configuração, ideal para projetos de médio porte e para simplificar a distribuição e teste do aplicativo.

#### Estrutura de Dados:

- **Eventos:** Tabela para armazenar informações sobre os eventos.
- **Palestrantes:** Tabela para informações dos palestrantes.
- **Usuários:** Tabela para dados dos usuários, incluindo autenticação.

## Configuração e Instalação

Para configurar e instalar o DevEventos, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone [URL do Repositório]
   ```

2. **Backend:**
   - Navegue até a pasta do backend e restaure os pacotes NuGet:
     ```bash
     cd [Pasta do Backend]
     dotnet restore
     ```
   - Execute o projeto:
     ```bash
     dotnet run
     ```

3. **Frontend:**
   - Navegue até a pasta do frontend e instale as dependências:
     ```bash
     cd [Pasta do Frontend]
     npm install
     ```
   - Inicie o servidor de desenvolvimento:
     ```bash
     ng serve
     ```

4. **Banco de Dados:**
   - O Entity Framework Core irá criar e inicializar o banco de dados SQLite automaticamente na primeira execução.

## Contribuições

Contribuições são sempre bem-vindas. Para contribuir, por favor, crie um fork do repositório, faça suas alterações e

 submeta um pull request. Para bugs, questões ou sugestões, abra uma issue no GitHub.
