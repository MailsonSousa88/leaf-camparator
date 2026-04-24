import { No } from "./arvore/no";
import { Arvore } from "./arvore/arvore";

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

arvore.preOrdem(raiz);

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
let raizA = new No(100);
let a1 = new No(50);
let a2 = new No(150);
let a3 = new No(3);  // Folha 1
let a4 = new No(9);  // Folha 2
let a5 = new No(31); // Folha 3

// Conectando os nós (Pai e Filhos)
a1.pai = raizA; 
a2.pai = raizA; 
a3.pai = a1;    
a4.pai = a1;    
a5.pai = a2;    

raizA.esq = a1; // 100 -> esq: 50
raizA.dir = a2; // 100 -> dir: 150
a1.esq = a3;    // 50 -> esq: 3 (FOLHA)
a1.dir = a4;    // 50 -> dir: 9 (FOLHA)
a2.dir = a5;    // 150 -> dir: 31 (FOLHA)

let arvore1: Arvore = new Arvore();
arvore1.raiz = raizA;

// Árvore 2: Folhas completamente diferentes (7, 14, 21)
let raizB = new No(5);
let b1 = new No(7);  // Folha 1
let b2 = new No(10);
let b3 = new No(14); // Folha 2
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

console.log(arvore.folhasSemelhantesRec(arvore1));
console.log(arvore.folhasSemelhantesRec(arvore2));