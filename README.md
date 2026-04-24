# IFPI - Campus Piripiri
## Tecnologia em Análise e Desenvolvimento de Sistemas

**Professor:** Jonathas Jivago<br>
**Disciplina:** Estrutura de Dados II<br>
**Alunos:** Francisco Mailson, Vitor Lopes, Mateus Araujo<br>
**Módulo:** III<br>  

---

# GRUPO 4  
## PROBLEMA 4 — Árvores com Folhas Semelhantes

---

## Descrição do Problema

Este trabalho aborda um problema clássico envolvendo **árvores binárias** e **percursos em estruturas hierárquicas**.

Considere todas as folhas de uma árvore binária, observadas **da esquerda para a direita**.  
Os valores dessas folhas formam uma **sequência de valores das folhas**.

Duas árvores binárias são consideradas **semelhantes em folhas** quando:

> As sequências de valores das folhas, percorridas da esquerda para a direita, são **exatamente iguais**.

### Exemplo Conceitual

- Árvore da esquerda → folhas: **3, 9, 12, 16, 29**  
- Árvore da direita → folhas: **3, 9, 12, 16, 29**

Mesmo que as árvores possuam formatos diferentes, alturas diferentes e organizações internas distintas, elas são consideradas **semelhantes**, pois a sequência das folhas é idêntica.

## Exemplo 1 - Git (Controle de Versões)

O Git organiza o projeto inteiro em forma de árvore

- Pastas são nós internos
- Arquivos são as folhas
  
Quando o Git compara dois commits, ele não olha apenas a estrutura das pastas. Ele verifica se os arquivos finais (folhas) são iguais.
Ou seja, Mesmo que os arquivos estejam organizados em pastas diferentes, se as folhas forem iguais, o conteúdo do projeto é o mesmo.

Isso é exatamente o conceito de “folhas semelhantes” aplicado.

## Exemplo 2 - IAs (Árvores de Decisão)

Nas IAs, especialmente em modelos de árvore de decisão: Os nós internos são decisões (perguntas), e as folhas são os resultados finais (classificações ou previsões).

Ao percorrer a árvore da esquerda para a direita, chegamos às respostas finais do modelo, comparar folhas em árvores diferentes nos permite:

- verificar se dois modelos de IA tomam as mesmas decisões finais
- validar se uma versão otimizada do modelo ainda produz os mesmos resultados
- comparar comportamentos de algoritmos de decisão
