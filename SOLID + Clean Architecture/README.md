
# Projeto SOLID e Clean Architecture

Este projeto foi criado com o objetivo de aprender e aplicar na prática os conceitos de SOLID e Clean Architecture. A ideia é construir uma loja virtual onde é possível criar e listar todos os produtos.

# 📚 Conceitos


# SOLID

O acrônimo ***SOLID*** é um conjunto de princípios de design de código que visam facilitar a manutenção e a evolução do software. Ele foi introduzido por Robert C. Martin em 2000 e é composto por cinco princípios:

- **S** - Single Responsibility Principle (Princípio da Responsabilidade Única)
- **O** - Open/Closed Principle (Princípio do Aberto/Fechado)
- **L** - Liskov Substitution Principle (Princípio da Substituição de Liskov)
- **I** - Interface Segregation Principle (Princípio da Segregação de Interfaces)
- **D** - Dependency Inversion Principle (Princípio da Inversão de Dependências)

# Clean Architecture

A ***Clean Architecture*** é um conjunto de práticas e técnicas que visam facilitar a manutenção e a evolução do software. Ela foi introduzida por [Robert C. Martin em 2012](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) e é composta por quatro camadas:

- **Domain** (Domínio) - Camada mais interna, onde se encontra as regras de negócio do sistema. Ela deve ser totalmente agnóstica em relação a qualquer tecnologia/infraestrutura.
- **Use Cases** (Casos de Uso) - Camada intermediária, que faz a orquestração do fluxo de dados entre a camada de domínio e a camada de infraestrutura. Cada caso de uso é uma intenção do usuário.
- **Infraestrutura** (Infra-estrutura) - Terceira camada, onde se encontram as implementações concretas das interfaces definidas na camada de domínio. Ela é responsável por lidar com detalhes de tecnologia e é a única camada que pode depender de frameworks e bibliotecas. É aqui que você irá encontrar os repositórios e os *controllers*, por exemplo.
- **External Interface** (Interface externa) - Camada mais externa, na qual usualmente não temos acesso. Geralmente é onde se encontram os dispositivos de entrada e saída, como a interface do usuário, banco de dados, web browsers, aplicativos móveis, etc. De forma geral, é aqui que residem os clientes da aplicação, o banco de dados, as APIs externas, etc.



# Construção de projeto com Prisma, Node.Js e Typescript:

 **PASSOS PARA RODAR ESTE PROJETO:**

1. Execute o comando `npm i` para instalar as dependências.
2. Configure as configurações do banco de dados no arquivo data-source.ts.
3. run serve `npm run start-dev`

#
**CONFIGURAÇÃO PRINCIPAL DO PRISMA:**


1. Execute o comando npm i prisma --save-dev para instalar o Prisma como dependência de desenvolvimento.
2. Execute o comando npm i @prisma/client para instalar o cliente Prisma.
3. Execute o comando npx prisma init para inicializar o Prisma no projeto.


## Referência
  - [YouTube Canal](https://www.youtube.com/@doutorwaka)
  - [YouTube Vídeo](https://www.youtube.com/watch?v=vkcTw9jgDTw)
  

## Autores

- [@Bergkley Brasil](https://github.com/Bergkley/Bergkley)
- [@José Eurípedes](https://github.com/jeferreirajf)



# BACK-END :

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
)&nbsp;
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

![Clean Architecture](https://img.shields.io/badge/Clean_Architecture-008000?style=for-the-badge)

![SOLID Principles](https://img.shields.io/badge/SOLID-008080?style=for-the-badge)


![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)&nbsp;
![Prisma](https://img.shields.io/badge/Prisma-1B222D?style=for-the-badge&logo=prisma&logoColor=white)


