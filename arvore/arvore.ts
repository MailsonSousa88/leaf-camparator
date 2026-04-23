import { No } from "./no";

export class Arvore {
    raiz: No | null = null;

    constructor(){
    }

    ehRaiz(no: No){
        if(no.pai == null){
            console.log("É raiz!!!");
        } else {
            console.log("Não é raiz!!!");
        }
    }

    ehFolha(no: No){
        if(no.esq == no.dir){
            console.log("É um nó folha!!!");
        } else {
            console.log("Não é um nó folha!!!");
        }
    }

    ehInterno(no: No){
        if(no.esq != no.dir){
            console.log("É um nó interno!!!");
        } else {
            console.log("Não é um nó interno!!!");

        }
    }

    profundidade(no: No): number{
        if(no.pai == null){
            return 0;
        } else {
            return 1 + this.profundidade(no.pai);
        }
    }

    altura(no: No): number {
        if(no.esq == no.dir){
            return 0;
        } else {
            let altesq = 0;
            let altdir = 0;
            if(no.esq != null){
                altesq = 1 + this.altura(no.esq);
            }
            if(no.dir != null){
                altdir = 1 + this.altura(no.dir);
            }
            if(altesq > altdir){
                return altesq;
            } else {
                return altdir;
            }
        }
    }

    preOrdem(no: No | null){
      if(no == null){
        return;
      }
      
      console.log(no.valor);

      this.preOrdem(no.esq);
      this.preOrdem(no.dir);
    }
    
}