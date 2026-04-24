import { No } from "./no";

export class Arvore {
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

// private coletarFolhasPilha(raiz: No | null): number[] {
//     const folhas: number[] = [];
//     if (raiz == null) return folhas;

//     const pilha: No[] = [];
//     pilha.push(raiz);

//     while (pilha.length > 0) {
//         const atual = pilha.pop()!;

//         // Empilha direita primeiro
//         if (atual.dir != null) pilha.push(atual.dir);
//         if (atual.esq != null) pilha.push(atual.esq);

//         // É folha?
//         if (atual.esq == null && atual.dir == null) {
//             folhas.push(atual.valor);
//         }
//     }

//     return folhas;
// }