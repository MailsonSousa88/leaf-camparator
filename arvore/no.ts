export class No {
    valor: number;
    pai: No | null = null;
    esq: No | null = null;
    dir: No | null = null;

    constructor(valor: number){
        this.valor = valor;
    }
}