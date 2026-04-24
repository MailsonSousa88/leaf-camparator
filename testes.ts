class No {
    valor: number;
    pai: No | null = null;
    esq: No | null = null;
    dir: No | null = null;

    constructor(valor: number){
        this.valor = valor;
    }
}

class Arvore {
  raiz: No | null = null;

  constructor() {}

  ehRaiz(no: No) {
    if (no.pai == null) {
      console.log("É raiz!!!");
    } else {
      console.log("Não é raiz!!!");
    }
  }

  ehFolha(no: No) {
    if (no.esq == no.dir) {
      console.log("É um nó folha!!!");
    } else {
      console.log("Não é um nó folha!!!");
    }
  }

  ehInterno(no: No) {
    if (no.esq != no.dir) {
      console.log("É um nó interno!!!");
    } else {
      console.log("Não é um nó interno!!!");
    }
  }

  profundidade(no: No): number {
    if (no.pai == null) {
      return 0;
    } else {
      return 1 + this.profundidade(no.pai);
    }
  }

  altura(no: No): number {
    if (no.esq == no.dir) {
      return 0;
    } else {
      let altesq = 0;
      let altdir = 0;
      if (no.esq != null) {
        altesq = 1 + this.altura(no.esq);
      }
      if (no.dir != null) {
        altdir = 1 + this.altura(no.dir);
      }
      if (altesq > altdir) {
        return altesq;
      } else {
        return altdir;
      }
    }
  }

  preOrdem(no: No | null) {
    if (no == null) {
      return;
    }

    console.log(no.valor);

    this.preOrdem(no.esq);
    this.preOrdem(no.dir);
  }

  // Percorre a árvore em profundidade (DFS) da esquerda para a direita
  // e guarda no array apenas os valores dos nós folha
  private coletarFolhasRec(no: No | null, folhas: number[]): number[] {

    // Se o nó não existe, encerra essa chamada
    if (no == null) 
        return folhas;

    // Se não possui filhos, é folha → guarda o valor
    if (no.esq == null && no.dir == null) {
      folhas.push(no.valor);
    }

    // Primeiro percorre toda a subárvore da esquerda
    this.coletarFolhasRec(no.esq, folhas);

    // Depois percorre toda a subárvore da direita
    this.coletarFolhasRec(no.dir, folhas);

    // Retorna o array com as folhas coletadas na ordem correta
    return folhas;
  }


  // Compara a sequência de folhas de duas árvores
  public folhasSemelhantesRec(arvoreComparada: Arvore): boolean {

    // Coleta as folhas da árvore que chamou o método (this)
    const folhas1: Array<number> = this.coletarFolhasRec(this.raiz, []);

    // Coleta as folhas da árvore passada por parâmetro
    const folhas2: Array<number> = this.coletarFolhasRec(arvoreComparada.raiz, []);

    // Compara as duas sequências (valor e ordem)
    return JSON.stringify(folhas1) === JSON.stringify(folhas2);
  }
}

let raiz = new No(20);
let n1 = new No(12);
let n2 = new No(25);
let n3 = new No(8);
let n4 = new No(28);
let n5 = new No(3);
let n6 = new No(10);
let n7 = new No(31);
let n8 = new No(9);

n1.pai = raiz;
n2.pai = raiz;
n3.pai = n1;
n4.pai = n2;
n5.pai = n3;
n6.pai = n3;
n7.pai = n4;
n8.pai = n6;

raiz.esq = n1;
raiz.dir = n2;
n1.esq = n3;
n2.dir = n4;
n3.esq = n5;
n3.dir = n6;
n4.dir = n7;
n6.esq = n8;

let arvore: Arvore = new Arvore();
arvore.raiz = raiz;

// A árvore construída é a seguinte:
//         20
//        /  \
//      12    25
//     /       \
//    8         28
//   / \          \
//  3   10         31
//     /
//    9

// Árvore 1: Estrutura diferente, MAS folhas iguais (3, 9, 31)
let raizA = new No(19);
let a1 = new No(15);
let a2 = new No(20);
let a3 = new No(3);  // Folha 1
let a4 = new No(9);  // Folha 2
let a5 = new No(31); // Folha 3

// Conectando os nós (Pai e Filhos)
a1.pai = raizA; 
a2.pai = raizA; 
a3.pai = a1;    
a4.pai = a1;    
a5.pai = a2;    

raizA.esq = a1; // 19 -> esq: 15
raizA.dir = a2; // 19 -> dir: 20
a1.esq = a3;    // 15 -> esq: 3 (FOLHA)
a1.dir = a4;    // 15 -> dir: 9 (FOLHA)
a2.dir = a5;    // 20 -> dir: 31 (FOLHA)

let arvore1: Arvore = new Arvore();
arvore1.raiz = raizA;

// Árvore 2: Folhas completamente diferentes (5, 7, 21)
let raizB = new No(10);
let b1 = new No(5);  // Folha 1
let b2 = new No(14);
let b3 = new No(7); // Folha 2
let b4 = new No(21); // Folha 3

// Conectando os nós (Pai e Filhos)
b1.pai = raizB; 
b2.pai = raizB; 
b3.pai = b2;    
b4.pai = b2;    

raizB.esq = b1; // 5 -> esq: 7 (FOLHA)
raizB.dir = b2; // 5 -> dir: 10
b2.esq = b3;    // 10 -> esq: 14 (FOLHA)
b2.dir = b4;    // 10 -> dir: 21 (FOLHA)

let arvore2: Arvore = new Arvore();
arvore2.raiz = raizB;

console.log(`Sequência 1: ${arvore.folhasSemelhantesRec(arvore1)}`);
console.log(`Sequência 2: ${arvore.folhasSemelhantesRec(arvore2)}`);