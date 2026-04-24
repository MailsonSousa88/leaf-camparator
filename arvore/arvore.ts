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

  private coletarFolhasRec(no: No | null, folhas: number[]): number[] {
    if (no == null) 
        return folhas;

    // É folha?
    if (no.esq == null && no.dir == null) {
      folhas.push(no.valor);
    }

    this.coletarFolhasRec(no.esq, folhas);
    this.coletarFolhasRec(no.dir, folhas);

    return folhas;
  }

  public folhasSemelhantesRec(arvoreComparada: Arvore): boolean {

    const folhas1: Array<number> = this.coletarFolhasRec(this.raiz, []);
    const folhas2: Array<number> = this.coletarFolhasRec(arvoreComparada.raiz, []);

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