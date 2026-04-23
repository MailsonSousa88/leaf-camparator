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