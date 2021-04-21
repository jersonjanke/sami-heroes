# Sami Heroes

## Índice

- [1. Desafio](#1-desafio)
- [2. A aplicação](#2-a-aplicação)
- [3. Desenvolvimento](#3-desenvolvimento)
- [4. Interface Final](#4-interface-final)
- [5. Tecnologias](#️5-tecnologias)
- [6. Rodar aplicacao](#6-rodar-aplicacao)
- [7. Desenvolvedor](#7-desenvolvedor)

---

## 1. Desafio

Desafio desenvolvido pela empresa [**Sami**](https://www.samisaude.com.br/#/) com o intuito de medir a senioridade para um Desenvolvedor Front-End.

Consiste em desenvolver uma aplicação web que traga a listagem de super heróis utilizando a API escolhida por eles, a [**Super Hero API**](https://superheroapi.com/).

Para o desenvolvimento há apenas uma regra a seguir:

- O teste deve ser feito utilizando **React JS**.

Claro que se você:

- Utilizar **Redux** será um diferencial.

O design da tela fica por conta da criatividade do desenvolvedor, porém algumas dicas e funcionalidades básicas a seguir devem ser levadas em consideração:

- Listagem dos heróis;
- Filtragem de heróis por nome e poderes;
- Ao clicar no herói, exibir um modal com as informações completas dele;
- Gostam de [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/);
- Utilizam SCSS;
- Utilizam StandardJS.

## 2. A Aplicação

A partir do desafio acima foi desenvolvido a [**Sami Heroes**](https://jersonjanke.github.io/sami-heroes/), uma aplicação web onde você pode pesquisar seu herói favorito, vilões e se aprofundar mais no mundo dos _Comics_.

A busca na página pode ser feita pelo nome do herói que você deseja saber mais informações, ou você pode filtrar pela editora do personagem.

Ao selecionar o herói desejado, você consegue ter mais detalhes dele, como dados de aparência do herói (altura, peso, gênero), sua biografia, e dados como percentual de inteligência, força, velocidade, etc.

## 3. Desenvolvimento

Seguindo a regra do desafio, a aplicação foi desenvolvida em React JS, com a utilização do Redux.

Ao estudar a API foi verificado um limitador para a filtragem por poder, uma vez que o mesmo traz um valor de poder que cada personagem tem e não um tipo de poder. Com isso foi desenvolvido o filtro por editora, para saber em que editora foi lançado o herói, assim complementando a pesquisa.

## 4. Interface Final

Convido você a acessar a aplicação e começar a usá-la agora mesmo através do [Link](https://jersonjanke.github.io/sami-heroes/).

## 5. Tecnologias

- ReactJs
- Redux
- SASS

## 6. Rodar aplicacao

Instalar as dependências:

```
yarn install
```

Rodar projeto:

```
yarn start
```

Em seguida acesse: - [localhos:3000](http://localhost:3000)

## 7. Desenvolvedor

<div align='center'>
Aplicação desenvolvida por <strong>Jerson Janke</strong>.
<br>
<a href='https://github.com/jersonjanke'>GitHub</a> | <a href='https://www.linkedin.com/in/jerson-janke/'>LinkedIn</a>
</div>
