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

 // Metodo para inserir com arrays
  inserirPorArray(array: number[]) {
    if (array.length === 0) {
      this.raiz = null;
      return;
    }

    // remove numeros duplicados no array
    const valores = [...new Set(array)];

    this.raiz = this.construirPorRegra(valores, null);
  }

  private construirPorRegra(valores: number[], pai: No | null): No | null {
    if (valores.length === 0) return null;

    // escolha da raiz
    let melhorIndice = 0;
    let melhorDiferenca = Infinity;

    for (let i = 0; i < valores.length; i++) {
      let menores = 0;
      let maiores = 0;

      for (let j = 0; j < valores.length; j++) {
        if (valores[j] < valores[i]) menores++;
        else if (valores[j] > valores[i]) maiores++;
      }

      const diferenca = Math.abs(menores - maiores);

      if (diferenca < melhorDiferenca) {
        melhorDiferenca = diferenca;
        melhorIndice = i;
      }
    }

    const raizValor = valores[melhorIndice];
    const no = new No(raizValor);
    no.pai = pai;

    // separa os grupos
    const esquerda = valores.filter(v => v < raizValor);
    const direita = valores.filter(v => v > raizValor);

    no.esq = this.construirPorRegra(esquerda, no);
    no.dir = this.construirPorRegra(direita, no);

    return no;
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