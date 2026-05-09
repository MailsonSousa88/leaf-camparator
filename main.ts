import { Arvore } from "./arvore/arvore";

console.log("=== Teste inserir por Array ===");

// Teste 1: Primeira Arvore:
const arvoreTeste1 = new Arvore();
arvoreTeste1.inserirPorArray([18, 8, 15, 10, 3, 9, 16, 20, 29]);
console.log(`Arvore 1 - PreOrdem:`);
arvoreTeste1.preOrdem(arvoreTeste1.raiz);

// A árvore construída é a seguinte:
//         15
//       /    \
//      8      18
//     / \    /  \
//    3  10  16   20
//       /          \
//      9            29       

// Teste 2: Segunda Arvore:
const arvoreTeste2 = new Arvore();
arvoreTeste2.inserirPorArray([10, 8, 9, 3, 13, 12, 18, 16, 29]);
console.log(`Arvore 2 - PreOrdem:`);
arvoreTeste2.preOrdem(arvoreTeste2.raiz);

// A árvore construída é a seguinte:
//         12
//       /    \
//      8      18
//     / \    /  \
//    3  10  13   29
//       /     \
//      9       16