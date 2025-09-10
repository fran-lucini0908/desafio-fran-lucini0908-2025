# Abrigo de Animais – Desafio Técnico

## Sobre o Projeto

Solução de um **desafio técnico do Programa de Estágio START DB (@DBServer)** para criar um sistema que organiza a adoção de animais de um abrigo.

---

## Regras do Desafio

- Cada animal vai para a pessoa que apresentar **todos os brinquedos favoritos na ordem correta**.
- **Gatos não dividem brinquedos**; em caso de empate, ficam no abrigo.
- Cada pessoa pode adotar **no máximo 3 animais**.
- O jabuti **“Loco”** aceita qualquer ordem se estiver com outro animal como companhia.

---

## Animais e Brinquedos Favoritos

| Animal | Tipo   | Brinquedos Favoritos |
| ------ | ------ | -------------------- |
| Rex    | Cão    | RATO, BOLA           |
| Mimi   | Gato   | BOLA, LASER          |
| Fofo   | Gato   | BOLA, RATO, LASER    |
| Zero   | Gato   | RATO, BOLA           |
| Bola   | Cão    | CAIXA, NOVELO        |
| Bebe   | Cão    | LASER, RATO, BOLA    |
| Loco   | Jabuti | SKATE, RATO          |

---

## Funcionalidades

- Adoção baseada nos **brinquedos favoritos**.
- Limite de **3 animais por pessoa**.
- Regras especiais para **gatos e jabuti Loco**.
- **Validação de entradas** (animais e brinquedos válidos).
- Normalização de entradas e remoção de duplicatas.
- Testes automatizados com **Jest**.

---

## Como Rodar

Clone o repositório e instale dependências:

```bash
git clone https://github.com/fran-lucini0908/desafio-fran-lucini0908-2025.git
npm install
```

Execute os testes:

```bash
npm test
```
